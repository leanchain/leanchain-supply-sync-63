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
    subtitle: "AI Supply Planning Co-Pilot",
    type: "title",
    tagline: "Smarter Planning Without Replacing Your ERP",
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
    subtitle: "Supply Planning is Broken for SMEs",
    type: "problem",
    icon: AlertTriangle,
    description:
      "Operations teams struggle with disconnected planning tools and reactive decision-making. Key pain points from our research:",
    points: [
      "Planning chaos: Excel-based forecasting creates errors and outdated demand plans",
      "ERP limitations: Existing systems lack intelligent planning and predictive insights",
      "Reactive operations: Teams constantly firefight stockouts and overstock situations",
      "Data fragmentation: Multiple systems create planning blind spots and delays",
      "Manual processes: Hours wasted on data reconciliation instead of strategic planning",
    ],
    stat: "78% of SMEs struggle with accurate demand planning",
    impact:
      "Poor planning decisions directly impact cash flow and customer satisfaction",
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
    subtitle: "AI-Powered Planning Co-Pilot for Your Existing ERP",
    type: "solution",
    icon: Wrench,
    description:
      "LeanChain acts as an intelligent planning layer that enhances your existing ERP with AI-powered demand forecasting and inventory optimization.",
    points: [
      "AI demand forecasting: Machine learning models predict demand patterns from your historical data",
      "ERP enhancement: Works alongside your existing systems without replacement",
      "Excel-friendly interface: Familiar spreadsheet workflow with intelligent recommendations",
      "Real-time optimization: Continuous inventory and procurement planning adjustments",
      "Multi-channel intelligence: Unified planning across all sales channels and warehouses",
    ],
    stat: "Reduces planning time by 80% while improving accuracy",
  },
  {
    id: 5,
    title: "Business Model",
    subtitle: "AI Co-Pilot SaaS with Predictable Revenue",
    type: "business-model",
    icon: DollarSign,
    description:
      "LeanChain operates as a planning co-pilot SaaS that enhances existing ERP investments rather than replacing them.",
    points: [
      "Co-pilot pricing: Subscription based on planning complexity and data volume",
      "ERP-agnostic model: Works with any existing ERP system without migration costs",
      "AI-powered tiers: Basic forecasting to advanced optimization and scenario planning",
      "Implementation support: Guided onboarding with minimal professional services",
      "Value-based pricing: ROI-focused model tied to planning accuracy improvements",
    ],
    stat: "Unit economics: 85% gross margin, 18-month payback",
  },
  {
    id: 6,
    title: "Secret Sauce",
    subtitle: "AI-Powered Planning Intelligence",
    type: "competitive-advantage",
    icon: Zap,
    description:
      "Our competitive advantage combines AI-powered planning intelligence with seamless ERP integration.",
    points: [
      "Smart adapters: AI-enhanced connectors that learn from your ERP data patterns",
      "Planning intelligence: Machine learning models trained on supply chain best practices",
      "Familiar interface: Excel-like experience with AI recommendations and insights",
      "Rapid deployment: Co-pilot setup in days, not months of ERP implementation",
      "Continuous learning: AI models improve planning accuracy over time",
    ],
    stat: "AI-powered planning without ERP replacement",
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
    subtitle: "ERP Enhancement & Co-Pilot Positioning",
    type: "gtm",
    icon: Rocket,
    points: [
      "ERP enhancement messaging: Position as intelligent upgrade, not replacement",
      "Partner ecosystem: Collaborate with ERP consultants and implementation partners",
      "Planning-focused content: Target operations managers struggling with forecasting accuracy",
      "Co-pilot trials: Self-serve demos showing AI planning improvements on real data",
      "Bottom-up adoption: Operations teams champion the planning intelligence benefits",
    ],
    stat: "ERP-friendly positioning drives faster adoption",
  },
  {
    id: 9,
    title: "Competitive Landscape",
    subtitle: "AI Co-Pilot vs Traditional Planning Tools",
    type: "competition",
    icon: Shield,
    competitive_table: {
      headers: [
        "Feature",
        "SAP Business One/Oracle",
        "Odoo (Open ERP)",
        "LeanChain Co-Pilot",
      ],
      rows: [
        [
          "Planning intelligence",
          "Basic MRP modules",
          "Manual forecasting",
          "AI-powered predictions",
        ],
        [
          "ERP relationship",
          "Full replacement required",
          "Full replacement required",
          "Enhancement layer",
        ],
        [
          "Deployment approach",
          "Months (consultants)",
          "Weeks (technical)",
          "Days (co-pilot setup)",
        ],
        [
          "User experience",
          "Complex ERP modules",
          "Dashboards/Forms",
          "Excel-like with AI insights",
        ],
        [
          "Planning accuracy",
          "Static rules-based",
          "Manual adjustments",
          "ML-driven continuous improvement",
        ],
        [
          "Implementation risk",
          "High (full migration)",
          "Medium (system change)",
          "Low (enhancement only)",
        ],
      ],
    },
    stat: "AI planning intelligence without ERP replacement risk",
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
    hiring: [],
    stat: "Team goal: 5 people by end of Year 1",
  },
  {
    id: 11,
    title: "The Ask",
    subtitle: "Co-Founder, Partners & AI Planning Pilots",
    type: "cta",
    icon: Mail,
    description:
      "We're building the future of AI-powered supply planning. Join us in revolutionizing how SMEs plan and optimize their operations.",
    points: [
      "Co-founder/CTO: AI/ML expertise with enterprise SaaS experience",
      "ERP partners: Implementation consultants interested in AI planning co-pilot offerings",
      "Pilot customers: Operations teams ready to enhance their planning with AI intelligence",
      "If AI-powered planning without ERP replacement resonates, let's connect!",
    ],
    contact: {
      email: "pankaj@leanchain.eu",
      linkedin: "linkedin.com/in/pankaj4u4m",
      website: "leanchain.eu",
      tagline: "Let's make supply planning intelligent together!",
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
            <div className="space-y-10">
              {/* Slide header */}
              <div className="text-center space-y-6 animate-fade-in">
                <div className="flex justify-center">
                  <div className="p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                    <div className="relative">
                      <TrendingUp className="w-14 h-14 text-blue-600" />
                      <Zap className="text-orange-500 absolute -top-1 -right-1 w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
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
                      <p className="text-slate-600">
                        {slide.founder.background}
                      </p>
                      <div className="flex items-center justify-center space-x-8 pt-4 border-t border-slate-200">
                        <div className="text-center">
                          <p className="font-semibold text-slate-700">Email</p>
                          <p className="text-sm text-slate-600">
                            {slide.founder.email}
                          </p>
                        </div>
                        <div className="w-px h-8 bg-slate-300"></div>
                        <div className="text-center">
                          <p className="font-semibold text-slate-700">
                            LinkedIn
                          </p>
                          <p className="text-sm text-slate-600">
                            {slide.founder.linkedin}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
                  {slide.hiring && slide.hiring.length > 0 && (
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
