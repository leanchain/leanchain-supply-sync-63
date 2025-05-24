import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Wrench,
  Rocket,
  Globe,
  Users,
  Mail,
  BarChart3,
  CheckCircle,
  DollarSign,
  Zap,
  Shield,
  TrendingDown,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "LeanChain",
    subtitle: "Intelligent Supply Chain for SMEs",
    type: "title",
    tagline: "Supply chain clarity for small businesses",
    founder: {
      name: "Pankaj Kumar",
      title: "Founder & CEO",
      background: "ex-Google, ex-Amazon",
      email: "pankaj@leanchain.eu",
      linkedin: "linkedin.com/in/pankaj4u4m",
    },
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "SME Operations Face Daily Chaos",
    type: "problem",
    icon: AlertTriangle,
    description:
      "An operations manager frustrated by manual processes and data silos. Businesses report these key pain points from our interviews:",
    points: [
      "Forecasting gaps: Excel spreadsheets cause errors and outdated plans",
      "Data silos: Disconnected ERPs/systems mean no single source of truth",
      "Inventory issues: No real-time view leads to stockouts, overstocking, missed sales",
      "Operational drag: Teams waste hours reconciling data instead of planning",
      "Manual forecasting and inventory planning leads to constant errors and blind spots",
    ],
    stat: "78% of SMEs struggle with inventory accuracy",
    impact: "These inefficiencies constrain growth and profitability for SMEs",
  },
  {
    id: 3,
    title: "Market Validation",
    subtitle: "This Pain is Real & Widespread",
    type: "validation",
    icon: TrendingDown,
    points: [
      '"Every ERP sucks. All of them." – r/ERP community member',
      "40%+ ERP rollouts fail within first year (Capterra study)",
      "Most SMEs still rely on Excel + QuickBooks workarounds",
      "Inventory mismatches average 50–100+ units monthly",
      "SAP/Odoo implementations cost $50k–$100k+ to customize",
    ],
    stat: "$1.1T lost annually due to poor inventory management",
  },
  {
    id: 4,
    title: "Our Solution",
    subtitle: "Excel-First Planning & Inventory Sync Tool",
    type: "solution",
    icon: Wrench,
    backgroundImage:
      "/lovable-uploads/433bc4ea-8ecc-4d46-8e50-2977fa012d42.png",
    description:
      "LeanChain provides an Excel-first planning & inventory sync tool. Users start with their existing Excel forecasts and click to import them into our platform.",
    points: [
      "Seamless Excel integration: Import/export forecasts with one click",
      "Real-time sync: Instant updates across ERPs, warehouses, and sales platforms",
      "Multi-channel support: Integrates Shopify, Amazon, WooCommerce, and more",
      "Unified dashboard: Consolidated view of inventory, POs, forecasts, and KPIs",
      "Intuitive, spreadsheet-like interface means teams can adopt it immediately",
    ],
    stat: "90% setup reduction vs traditional ERP",
  },
  {
    id: 5,
    title: "Business Model",
    subtitle: "Scalable SaaS with Predictable Revenue",
    type: "business-model",
    icon: DollarSign,
    description:
      "LeanChain is a cloud-based SaaS with tiered pricing based on company size and features.",
    points: [
      "Tiered subscription: Basic, Pro, Enterprise plans (per-company, monthly)",
      "API addons: Premium plans include API access and custom integration support",
      "Usage-based: Pricing scales with number of channels or transaction volume",
      "Professional services: Optional setup and training for complex cases (minimal)",
      "No large upfront license fees, making sales simple",
    ],
    stat: "Unit economics: 85% gross margin, 24-month payback",
  },
  {
    id: 6,
    title: "Secret Sauce",
    subtitle: "Plug-and-Play Simplicity",
    type: "competitive-advantage",
    icon: Zap,
    description:
      "Our secret is plug‑and‑play simplicity combined with deep integration.",
    points: [
      "Adapters galore: Ready-made connectors for SAP, Odoo, QuickBooks, Shopify, WooCommerce",
      "Excel-like UI: Familiar spreadsheet workflow; zero training required",
      "Rapid onboarding: Guided setup wizard – typically live in 1–2 weeks",
      "Continuous sync: Automated two-way data flow and smart alerts for discrepancies",
      "Integration takes minutes, not months",
    ],
    stat: "Days to deploy, not months",
  },
  {
    id: 7,
    title: "Market Size",
    subtitle: "Large SMB Segment Opportunity",
    type: "market",
    icon: Globe,
    description:
      "Our focus is on the large SMB segment in the US/EU e-commerce and light manufacturing sectors.",
    points: [
      "TAM: 5M US/EU SMEs in target sectors ($15B software market)",
      "SAM: 500k companies actively pursuing SCM software ($3B)",
      "SOM (year1): 1,000 pilot SMEs ($5M potential ARR at our price)",
      "Vertical focus: Omnichannel retailers, consumer goods mfg, electronics, hardware",
      "Key verticals: retail/distribution, consumer products, electronics, D2C brands",
    ],
    stat: "TAM: $15B | SAM: $3B | SOM: $5M Year 1",
  },
  {
    id: 8,
    title: "Go-to-Market Strategy",
    subtitle: "Community, Partnerships & Product-Led Growth",
    type: "gtm",
    icon: Rocket,
    points: [
      "Community & content: Reddit/LinkedIn groups, blog posts, SEO targeting supply chain pain points",
      "ERP partnerships: Joint marketing with consultants and VARs (Odoo/NetSuite/SAP partners)",
      "Product-led growth: Self-serve trials and demos to let teams adopt LeanChain organically",
      "Events/webinars: Present at industry meetups, e-commerce/retail conferences for visibility",
      "Bottom-up adoption through operations teams championing internally",
    ],
    stat: "Multi-channel acquisition strategy",
  },
  {
    id: 9,
    title: "Competitive Landscape",
    subtitle: "Positioned Between Heavy ERPs & DIY Spreadsheets",
    type: "competition",
    icon: Shield,
    competitive_table: {
      headers: [
        "Feature",
        "SAP Business One/Oracle",
        "Odoo (Open ERP)",
        "LeanChain",
      ],
      rows: [
        [
          "Deployment time",
          "Months (consultants)",
          "Weeks (technical)",
          "Days (self-serve setup)",
        ],
        [
          "ERP integration",
          "Built-in, but proprietary",
          "Modular (custom APIs)",
          "Plug‑and‑play adapters",
        ],
        [
          "User interface",
          "Complex ERP modules",
          "Dashboards/Forms",
          "Spreadsheet-first UI",
        ],
        [
          "Target segment",
          "Large enterprises/SMBs",
          "SMBs/Tech-savvy",
          "SMBs (e-com/mfg focus)",
        ],
        ["Requires consulting", "Yes", "Often", "No (DIY)"],
        [
          "Cost structure",
          "High license + fees",
          "Low license/SaaS",
          "Competitive SaaS",
        ],
      ],
    },
    stat: "Fast to deploy, easy to use, tailored for modern SMBs",
  },
  {
    id: 10,
    title: "Our Team",
    subtitle: "Startup Experience + Supply Chain Expertise",
    type: "team",
    icon: Users,
    description:
      "Our founding team blends startup experience with supply-chain expertise.",
    team_members: [
      {
        name: "Pankaj Kumar",
        role: "CEO",
        background:
          "Ex-Google, ex-Amazon, 13 years in software engineering & product management",
        email: "pankaj@leanchain.eu",
      },
      {
        name: "Placeholder",
        role: "CTO",
        background: "Placeholder",
      },
      {
        name: "Placeholder",
        role: "Advisor",
        background: "Placeholder",
      },
      {
        name: "Placeholder",
        role: "Advisor",
        background: "Placeholder",
      },
    ],
    hiring: ["Lead Full-Stack Developer", "Growth Marketing Specialist"],
    stat: "Team goal: 5 people by end of Year 1",
  },
  {
    id: 11,
    title: "The Ask",
    subtitle: "Co-Founder, Partnerships & Pilot Customers",
    type: "cta",
    icon: Mail,
    description:
      "We're not raising funding yet; our immediate need is people and partnerships.",
    points: [
      "Co-founder/CTO: Enterprise SaaS experience (especially data engineering or analytics)",
      "Strategic partners: ERP implementers, industry advisors, and pilot customers",
      "Pilot customers: E-commerce/retailers and manufacturers to validate and refine our product",
      "If LeanChain's vision resonates, let's connect!",
    ],
    contact: {
      email: "pankaj@leanchain.eu",
      linkedin: "linkedin.com/in/pankaj4u4m",
      website: "leanchain.eu",
      tagline: "Let's simplify supply chains together!",
    },
  },
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentSlide > 0) {
          prevSlide();
        }
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        if (currentSlide < slides.length - 1) {
          nextSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentSlide]);

  // Simple PDF download function
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/LeanChain-Pitch-Deck.pdf";
    link.download = "LeanChain-Pitch-Deck.pdf";
    link.click();
  };

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 flex flex-col relative overflow-hidden">
      {/* Header with navigation dots and progress */}
      <div className="flex justify-between items-center py-6 px-8 relative z-10">
        <div className="flex items-center space-x-4">
          <Button
            onClick={downloadPDF}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 border-slate-300 text-slate-700 hover:bg-slate-100 bg-white/90 backdrop-blur-sm shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </Button>
        </div>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "leanchain-gradient scale-125 shadow-lg"
                  : index < currentSlide
                  ? "bg-blue-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-slate-600 font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Main slide content */}
      <div className="flex-1 flex items-center justify-center px-8 relative z-10">
        <div className="max-w-6xl w-full">
          {slide.type === "title" ? (
            <div className="text-center space-y-12 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mb-8 border border-white/30">
                  <div className="relative">
                    <TrendingUp className="w-12 h-12 text-blue-600" />
                    <Zap className="text-orange-500 absolute -top-1 -right-1 w-6 h-6" />
                  </div>
                </div>
                <h1 className="font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent text-8xl tracking-tight inline-block">
                  {slide.title}
                </h1>
                <p className="text-3xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
                  {slide.subtitle}
                </p>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                  {slide.tagline}
                </p>
              </div>

              {/* Founder Info */}
              {slide.founder && (
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/30 shadow-xl">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {slide.founder.name}
                    </h3>
                    <p className="font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent text-lg inline-block">
                      {slide.founder.title}
                    </p>
                    <p className="text-slate-600">{slide.founder.background}</p>
                    <div className="flex items-center justify-center space-x-8 pt-4 border-t border-slate-200">
                      <div className="text-center">
                        <p className="font-semibold text-slate-700">Email</p>
                        <p className="text-sm text-slate-600">
                          {slide.founder.email}
                        </p>
                      </div>
                      <div className="w-px h-8 bg-slate-300"></div>
                      <div className="text-center">
                        <p className="font-semibold text-slate-700">LinkedIn</p>
                        <p className="text-sm text-slate-600">
                          {slide.founder.linkedin}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : slide.type === "competition" ? (
            <div className="space-y-10">
              {/* Slide header */}
              <div className="text-center space-y-6 animate-fade-in">
                {IconComponent && (
                  <div className="flex justify-center">
                    <div className="p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                      <IconComponent className="w-14 h-14 text-slate-700" />
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  <h1 className="text-6xl font-bold gradient-text tracking-tight inline-block">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-2xl text-slate-600 font-light">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
                {slide.stat && (
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
                    <BarChart3 className="w-5 h-5 text-slate-700 mr-2" />
                    <span className="text-slate-800 font-semibold">
                      {slide.stat}
                    </span>
                  </div>
                )}
              </div>

              {/* Competitive table */}
              {slide.competitive_table && (
                <div className="max-w-6xl mx-auto">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="leanchain-gradient text-white">
                          {slide.competitive_table.headers.map(
                            (header, index) => (
                              <th
                                key={index}
                                className="px-6 py-4 text-left font-semibold text-lg"
                              >
                                {header}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {slide.competitive_table.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={
                              rowIndex % 2 === 0
                                ? "bg-slate-50/50"
                                : "bg-white/50"
                            }
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={`px-6 py-4 text-slate-700 ${
                                  cellIndex === 0 ? "font-semibold" : ""
                                } ${
                                  cellIndex === 3
                                    ? "font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"
                                    : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ) : slide.type === "team" ? (
            <div className="space-y-10">
              {/* Slide header */}
              <div className="text-center space-y-6 animate-fade-in">
                {IconComponent && (
                  <div className="flex justify-center">
                    <div className="p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                      <IconComponent className="w-14 h-14 text-slate-700" />
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  <h1 className="text-6xl font-bold gradient-text tracking-tight inline-block">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-2xl text-slate-600 font-light">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
                {slide.description && (
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                )}
                {slide.stat && (
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
                    <BarChart3 className="w-5 h-5 text-slate-700 mr-2" />
                    <span className="text-slate-800 font-semibold">
                      {slide.stat}
                    </span>
                  </div>
                )}
              </div>

              {/* Team members */}
              {slide.team_members && (
                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {slide.team_members.map((member, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/95 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 leanchain-gradient rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-lg">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-800">
                                {member.name}
                              </h3>
                              <p className="font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent inline-block">
                                {member.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-slate-600 text-sm">
                            {member.background}
                          </p>
                          {member.email && (
                            <p className="text-blue-600 text-sm font-medium">
                              {member.email}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hiring section */}
                  {slide.hiring && (
                    <div className="leanchain-gradient rounded-xl p-6 text-white shadow-lg">
                      <h3 className="text-xl font-bold mb-3">Now Hiring:</h3>
                      <div className="flex flex-wrap gap-2">
                        {slide.hiring.map((role, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-10">
              {/* Slide header */}
              <div className="text-center space-y-6 animate-fade-in">
                {IconComponent && (
                  <div className="flex justify-center">
                    <div className="p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                      <IconComponent className="w-14 h-14 text-slate-700" />
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  <h1 className="text-6xl font-bold gradient-text tracking-tight inline-block">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-2xl text-slate-600 font-light">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
                {slide.description && (
                  <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                    {slide.description}
                  </p>
                )}
                {slide.stat && (
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
                    <BarChart3 className="w-5 h-5 text-slate-700 mr-2" />
                    <span className="text-slate-800 font-semibold">
                      {slide.stat}
                    </span>
                  </div>
                )}
              </div>

              {/* Slide content */}
              <div className="max-w-5xl mx-auto">
                {slide.points && (
                  <ul className="space-y-6">
                    {slide.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-4 p-6 bg-white/95 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-6 h-6 leanchain-gradient rounded-full flex items-center justify-center mt-1 shadow-sm">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl text-slate-700 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.impact && (
                  <div className="mt-8 p-6 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl">
                    <p className="text-lg text-red-700 font-medium text-center">
                      {slide.impact}
                    </p>
                  </div>
                )}

                {/* Contact section for CTA slide */}
                {slide.contact && (
                  <div className="mt-12 text-center space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                      <div className="p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-200">
                        <Mail className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                        <p className="font-semibold text-slate-800">Email</p>
                        <p className="text-slate-600 text-sm">
                          {slide.contact.email}
                        </p>
                      </div>
                      <div className="p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-200">
                        <Users className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                        <p className="font-semibold text-slate-800">LinkedIn</p>
                        <p className="text-slate-600 text-sm">
                          {slide.contact.linkedin}
                        </p>
                      </div>
                      <div className="p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-200">
                        <Globe className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                        <p className="font-semibold text-slate-800">Website</p>
                        <p className="text-slate-600 text-sm">
                          {slide.contact.website}
                        </p>
                      </div>
                    </div>
                    {slide.contact.tagline && (
                      <div className="leanchain-gradient rounded-xl p-6 text-white shadow-lg">
                        <p className="text-xl font-semibold">
                          {slide.contact.tagline}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with navigation */}
      <div className="flex justify-between items-center p-8 bg-white/90 backdrop-blur-md border-t border-white/30 relative z-10 shadow-lg">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50 bg-white/90 backdrop-blur-sm shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </Button>

        <div className="flex items-center space-x-4">
          <div className="text-slate-700 font-medium text-lg">
            {slide.title}
          </div>
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50 bg-white/90 backdrop-blur-sm shadow-sm"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default PitchDeck;
