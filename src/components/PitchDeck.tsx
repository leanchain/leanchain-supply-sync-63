
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, AlertTriangle, Target, Wrench, Rocket, Globe, Users, Mail, BarChart3, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "LeanChain",
    subtitle: "Smarter forecasting and inventory sync for SME supply chains",
    type: "title",
    note: "Transforming supply chain management for small and medium enterprises"
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "Supply Chain Chaos for SMEs",
    type: "problem",
    icon: AlertTriangle,
    points: [
      "Can't buy in bulk; need lean, just-in-time inventory management",
      "ERP tools are too heavy, slow, or prohibitively expensive",
      "Forecasting done in messy Excel sheets with manual errors", 
      "Physical inventory checks are rare; data accuracy suffers",
      "High mismatch between system records vs. physical reality"
    ],
    stat: "78% of SMEs struggle with inventory accuracy"
  },
  {
    id: 3,
    title: "Market Validation",
    subtitle: "This Pain is Real & Widespread",
    type: "validation",
    icon: TrendingUp,
    points: [
      '"Every ERP sucks. All of them." – r/ERP community member',
      "40%+ ERP rollouts fail within first year (Capterra study)",
      "Most SMEs still rely on Excel + QuickBooks workarounds",
      "Inventory mismatches average 50–100+ units monthly",
      "SAP/Odoo implementations cost $50k–$100k+ to customize"
    ],
    stat: "$1.1T lost annually due to poor inventory management"
  },
  {
    id: 4,
    title: "Market Opportunity", 
    subtitle: "What SMEs Actually Want",
    type: "opportunity",
    icon: Target,
    points: [
      "Excel-based forecasting — but smarter and automated",
      "Real-time visibility between warehouse and ERP systems",
      "Plug-and-play tools without expensive consultants",
      "Lightweight planning with lean inventory control",
      "Affordable solutions that scale with business growth"
    ],
    stat: "$30B+ SMB operations software market"
  },
  {
    id: 5,
    title: "Our Solution",
    subtitle: "Excel-First + Real-Time Inventory Sync",
    type: "solution",
    icon: Wrench,
    points: [
      "Upload Excel → AI-powered demand forecast + optimal order timing",
      "Seamless sync between ERP (Odoo, Dynamics) and live warehouse data",
      "Instant alerts for inventory mismatches and anomalies",
      "No consultants required. No complex setup nightmares.",
      "Clean, intuitive interface that teams actually want to use"
    ],
    stat: "90% setup reduction vs traditional ERP"
  },
  {
    id: 6,
    title: "Why Now",
    subtitle: "Perfect Market Timing",
    type: "timing",
    icon: Rocket,
    points: [
      "Supply chain disruptions created urgency for better tools",
      "Legacy ERPs are increasingly seen as bloated relics",
      "SMB SaaS adoption accelerating post-pandemic",
      "AI + API ecosystem makes plug-and-play solutions viable",
      "Remote work demands better digital inventory visibility"
    ],
    stat: "300% increase in SMB SaaS adoption since 2020"
  },
  {
    id: 7,
    title: "Market Size",
    subtitle: "Massive Addressable Market",
    type: "market",
    icon: Globe,
    points: [
      "6M+ SMEs in US/EU across manufacturing and e-commerce",
      "$30B+ SMB operations & ERP software market annually",
      "2–20 person operations teams: underserved segment",
      "Average customer LTV: $15k-50k based on comparable SaaS",
      "95% of target market currently using inadequate solutions"
    ],
    stat: "TAM: $30B+ | SAM: $8.5B | SOM: $850M"
  },
  {
    id: 8,
    title: "Business Model",
    subtitle: "Clear Path to Revenue",
    type: "business",
    icon: DollarSign,
    points: [
      "SaaS subscription: $200-800/month based on company size",
      "Implementation & training: $2k-5k one-time fee",
      "Premium analytics & forecasting: $100-300/month add-on",
      "Integration partnerships with ERP vendors (revenue share)",
      "Target: $10M ARR by Year 3 with 1,000+ customers"
    ],
    stat: "Unit economics: 85% gross margin, 24-month payback"
  },
  {
    id: 9,
    title: "What We Need",
    subtitle: "Looking for Co-Founder & Early Team",
    type: "team",
    icon: Users,
    points: [
      "Technical co-founder: SaaS engineer with supply chain/ERP experience",
      "Someone obsessed with operational clarity and clean UX/UI",
      "Ready to build lean, fast, and iterate based on customer feedback",
      "Seed funding: $500k-1M for 12-18 month runway",
      "Strategic advisors with SME operations experience"
    ],
    stat: "Team goal: 5 people by end of Year 1"
  },
  {
    id: 10,
    title: "Let's Build This",
    subtitle: "Ready to Transform SME Supply Chains",
    type: "cta",
    icon: Mail,
    points: [
      "Validated problem with clear market demand",
      "Technical roadmap and MVP specifications ready",
      "Initial customer interviews and feedback collected",
      "Ready to start building immediately with the right partner"
    ],
    contact: {
      email: "hello@leanchain.co",
      linkedin: "Connect on LinkedIn",
      website: "leanchain.eu"
    }
  }
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Header with navigation dots and progress */}
      <div className="flex justify-between items-center py-6 px-8">
        <div className="text-sm text-slate-600 font-medium">
          LeanChain Pitch Deck
        </div>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 scale-125 shadow-lg' 
                  : index < currentSlide
                  ? 'bg-blue-400'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-slate-600 font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Main slide content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-5xl w-full">
          {slide.type === 'title' ? (
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">LC</span>
                  </div>
                </div>
                <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-3xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                  {slide.note}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-8 text-slate-600">
                <div className="text-center">
                  <p className="font-semibold">Date</p>
                  <p className="text-sm">{new Date().toLocaleDateString()}</p>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div className="text-center">
                  <p className="font-semibold">Contact</p>
                  <p className="text-sm">hello@leanchain.co</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Slide header */}
              <div className="text-center space-y-6">
                {IconComponent && (
                  <div className="flex justify-center">
                    <div className="p-5 bg-white rounded-2xl shadow-lg border border-slate-200">
                      <IconComponent className="w-14 h-14 text-blue-600" />
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  <h1 className="text-6xl font-bold text-slate-800 tracking-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-2xl text-slate-600 font-light">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
                {slide.stat && (
                  <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full">
                    <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-blue-800 font-semibold">{slide.stat}</span>
                  </div>
                )}
              </div>

              {/* Slide content */}
              <div className="max-w-4xl mx-auto">
                {slide.points && (
                  <ul className="space-y-6">
                    {slide.points.map((point, index) => (
                      <li 
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl text-slate-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact section for CTA slide */}
                {slide.contact && (
                  <div className="mt-12 text-center space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                      <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                        <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <p className="font-semibold text-slate-800">Email</p>
                        <p className="text-blue-600 text-sm">{slide.contact.email}</p>
                      </div>
                      <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <p className="font-semibold text-slate-800">LinkedIn</p>
                        <p className="text-blue-600 text-sm">{slide.contact.linkedin}</p>
                      </div>
                      <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                        <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <p className="font-semibold text-slate-800">Website</p>
                        <p className="text-blue-600 text-sm">{slide.contact.website}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with navigation */}
      <div className="flex justify-between items-center p-8 bg-white/50 backdrop-blur-sm border-t border-slate-200">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </Button>

        <div className="flex items-center space-x-4">
          <div className="text-slate-600 font-medium text-lg">
            {slide.title}
          </div>
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default PitchDeck;
