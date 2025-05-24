
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, AlertTriangle, Target, Wrench, Rocket, Globe, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: "LeanChain",
    subtitle: "Smarter forecasting and inventory sync for SME supply chains",
    type: "title"
  },
  {
    id: 2,
    title: "Supply Chain Pain for SMEs",
    type: "problem",
    icon: AlertTriangle,
    points: [
      "Can't buy in bulk; need lean, just-in-time inventory",
      "ERP tools are too heavy, slow, or expensive",
      "Forecasting done in messy Excel sheets", 
      "Physical inventory checks are rare; data is off",
      "High mismatch between system vs. reality"
    ]
  },
  {
    id: 3,
    title: "This Pain is Real",
    type: "validation",
    icon: TrendingUp,
    points: [
      '"Every ERP sucks. All of them." – r/ERP user',
      "40%+ ERP rollouts fail within 1 year (Capterra study)",
      "Most SMEs still use Excel + QuickBooks hacks",
      "Inventory mismatches of 50–100+ units/month",
      "SAP/Odoo costs 50k–100k+ to customize"
    ]
  },
  {
    id: 4,
    title: "What SMEs Want",
    type: "opportunity",
    icon: Target,
    subtitle: "They don't want SAP. They want:",
    points: [
      "Forecasting in Excel — just smarter and faster",
      "Real-time visibility between warehouse + ERP",
      "Plug-and-play tools they can use without consultants",
      "Lightweight planning, lean inventory control"
    ]
  },
  {
    id: 5,
    title: "Our Product Vision",
    type: "solution",
    icon: Wrench,
    subtitle: "Excel-First + Inventory Sync Assistant",
    points: [
      "Upload Excel → get demand forecast + order timing",
      "Sync ERP (e.g. Odoo, Dynamics) to live warehouse data",
      "Flag mismatches instantly",
      "No consultants. No setup nightmares."
    ]
  },
  {
    id: 6,
    title: "Why Now",
    type: "timing",
    icon: Rocket,
    points: [
      "Supply chain disruptions = pressure on SMEs",
      "ERPs are bloated relics for this audience",
      "SMB SaaS adoption is surging",
      "AI + APIs make plug-and-play ops tools viable"
    ]
  },
  {
    id: 7,
    title: "Market",
    type: "market",
    icon: Globe,
    points: [
      "6M+ SMEs in US/EU in manufacturing, e-comm",
      "$30B+ SMB ops & ERP software market",
      "Targeting 2–20 person ops teams, underserved"
    ]
  },
  {
    id: 8,
    title: "Who We're Looking For",
    type: "team",
    icon: Users,
    subtitle: "Looking for a co-founder / early builder:",
    points: [
      "SaaS engineer (ideally with supply chain, ERP, or data experience)",
      "Someone obsessed with ops clarity + clean UX",
      "Not afraid of building lean + fast"
    ]
  },
  {
    id: 9,
    title: "Let's Build This",
    type: "cta",
    icon: Mail,
    points: [
      "I've done the research, validated the pain, and mapped the first MVP.",
      "Want to build something clean, useful, and real with me?",
      "DM me or email: hello@leanchain.co"
    ]
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Header with navigation dots */}
      <div className="flex justify-center py-6">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-blue-300 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main slide content */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-4xl w-full">
          {slide.type === 'title' ? (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-7xl font-bold text-blue-900 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
              <div className="text-blue-600 text-lg space-y-2">
                <p>Pitch Deck</p>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Slide header */}
              <div className="text-center space-y-4">
                {IconComponent && (
                  <div className="flex justify-center">
                    <div className="p-4 bg-blue-200 rounded-full">
                      <IconComponent className="w-12 h-12 text-blue-700" />
                    </div>
                  </div>
                )}
                <h1 className="text-5xl font-bold text-blue-900">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-2xl text-blue-700">
                    {slide.subtitle}
                  </p>
                )}
              </div>

              {/* Slide content */}
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-6">
                  {slide.points?.map((point, index) => (
                    <li 
                      key={index}
                      className="flex items-start space-x-4 text-xl text-blue-800"
                    >
                      <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with navigation */}
      <div className="flex justify-between items-center p-8">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 border-blue-300 text-blue-700 hover:bg-blue-200"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </Button>

        <div className="text-blue-600 font-medium">
          {currentSlide + 1} / {slides.length}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="lg"
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 border-blue-300 text-blue-700 hover:bg-blue-200"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default PitchDeck;
