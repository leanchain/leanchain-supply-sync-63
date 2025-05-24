#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { jsPDF } from 'jspdf';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDFDirect() {
  console.log('🚀 Starting direct PDF generation from images...');

  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Set viewport for consistent rendering (16:9 aspect ratio for presentations)
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    });

    // Check if dist directory exists (production build)
    const distPath = path.resolve('./dist');
    const distExists = fs.existsSync(distPath);

    let baseUrl;
    if (distExists) {
      // Use HTTP server for built files (better than file:// for assets)
      baseUrl = 'http://localhost:8080';
      console.log(`📄 Using HTTP server for built files: ${baseUrl}`);
      console.log('⚠️  Make sure to run: npx serve dist -p 8080');
    } else {
      // Fallback to dev server
      baseUrl = 'http://localhost:5173';
      console.log('⚠️  Built files not found. Ensure dev server is running on port 5173');
      console.log(`📄 Navigating to: ${baseUrl}`);
    }

    await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait for the presentation to load
    console.log('⏳ Waiting for presentation to load...');
    await page.waitForSelector('#root', { timeout: 15000 });
    console.log('✅ Found #root element');

    // Wait for React to render
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('⏳ Waiting for React components to render...');

    // Get the actual number of slides by checking the navigation dots
    const slideCount = await page.evaluate(() => {
      const dots = document.querySelectorAll('button.w-3.h-3.rounded-full');
      return dots.length || 11; // fallback to known slide count
    });
    console.log(`📊 Found ${slideCount} slides`);

    // Collect all slide screenshots
    const slideImages = [];

    for (let i = 0; i < slideCount; i++) {
      console.log(`📄 Capturing slide ${i + 1}/${slideCount}`);

      // Navigate to slide by clicking the navigation dot
      const navigationResult = await page.evaluate((slideIndex) => {
        const buttons = document.querySelectorAll('button.w-3.h-3.rounded-full');
        if (buttons[slideIndex]) {
          buttons[slideIndex].click();
          return `Clicked navigation dot ${slideIndex + 1}`;
        } else {
          return `Could not find navigation dot ${slideIndex + 1}. Found ${buttons.length} dots total.`;
        }
      }, i);

      console.log(`🔄 ${navigationResult}`);

      // Wait for slide transition
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Hide navigation elements for cleaner screenshot
      await page.addStyleTag({
        content: `
          .flex.justify-between.items-center.py-6.px-8 {
            display: none !important;
          }
          .flex.justify-between.items-center.p-8 {
            display: none !important;
          }
        `
      });

      // Take screenshot of the slide
      const screenshot = await page.screenshot({
        fullPage: false,
        type: 'png'
      });

      // Remove the style tag to restore navigation for next slide
      await page.evaluate(() => {
        const styleTags = document.querySelectorAll('style');
        const lastStyleTag = styleTags[styleTags.length - 1];
        if (lastStyleTag && lastStyleTag.textContent?.includes('display: none !important')) {
          lastStyleTag.remove();
        }
      });

      console.log(`📸 Screenshot ${i + 1} size: ${(screenshot.length / 1024).toFixed(2)} KB`);

      // Save individual screenshots for debugging
      const debugDir = path.resolve('./debug-screenshots');
      if (!fs.existsSync(debugDir)) {
        fs.mkdirSync(debugDir, { recursive: true });
      }
      fs.writeFileSync(path.join(debugDir, `slide-${i + 1}.png`), screenshot);

      slideImages.push(screenshot);
    }

    // Create PDF directly from images
    console.log('📄 Creating PDF directly from images...');

    // Use the actual screenshot dimensions (1920x1080) converted to points
    // 1 point = 1/72 inch, so we convert pixels to points
    const imageWidth = 1920;
    const imageHeight = 1080;

    // Convert pixels to points (assuming 96 DPI)
    const pointsPerPixel = 72 / 96;
    const pageWidthPoints = imageWidth * pointsPerPixel;
    const pageHeightPoints = imageHeight * pointsPerPixel;

    // Create a new PDF document with custom dimensions matching our screenshots
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'pt', // Use points for precise control
      format: [pageWidthPoints, pageHeightPoints] // Custom format matching image dimensions
    });

    console.log(`📐 PDF page size: ${pageWidthPoints.toFixed(1)} x ${pageHeightPoints.toFixed(1)} points`);

    // Add each image as a page
    for (let i = 0; i < slideImages.length; i++) {
      console.log(`📄 Adding slide ${i + 1} to PDF...`);

      if (i > 0) {
        pdf.addPage();
      }

      // Convert image buffer to base64
      const base64Image = slideImages[i].toString('base64');
      const imageDataUrl = `data:image/png;base64,${base64Image}`;

      // Add image to PDF at actual size (no stretching)
      pdf.addImage(imageDataUrl, 'PNG', 0, 0, pageWidthPoints, pageHeightPoints);
    }

    // Save PDF
    const publicDir = path.resolve('./public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const pdfPath = path.join(publicDir, 'LeanChain-Pitch-Deck.pdf');
    const pdfBuffer = Buffer.from(pdf.output('arraybuffer'));
    fs.writeFileSync(pdfPath, pdfBuffer);

    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    console.log(`📁 File size: ${(pdfBuffer.length / 1024 / 1024).toFixed(2)} MB`);

    // Also copy to dist directory if it exists
    if (distExists) {
      const distPdfPath = path.join(distPath, 'LeanChain-Pitch-Deck.pdf');
      fs.writeFileSync(distPdfPath, pdfBuffer);
      console.log(`📁 PDF also saved to dist: ${distPdfPath}`);
    }

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generatePDFDirect();
}

export default generatePDFDirect;
