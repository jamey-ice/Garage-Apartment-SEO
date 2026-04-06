import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CheckCircle, ChevronRight, RotateCcw } from 'lucide-react';

const PROJECT_TYPES = [
  {
    id: 'garage-conversion',
    label: 'Garage Conversion',
    description: 'Convert your existing attached or detached garage into livable space.',
    baseRange: [40000, 100000],
    perSqft: { standard: 150, premium: 220, luxury: 310 },
    icon: '🏠',
  },
  {
    id: 'above-garage',
    label: 'Above-Garage Apartment',
    description: 'Build a full living unit on top of your existing garage — keep the garage below.',
    baseRange: [80000, 200000],
    perSqft: { standard: 180, premium: 260, luxury: 360 },
    icon: '🏗️',
  },
  {
    id: 'detached-adu',
    label: 'Detached ADU',
    description: 'A brand-new standalone structure built from the ground up on your property.',
    baseRange: [100000, 300000],
    perSqft: { standard: 200, premium: 285, luxury: 390 },
    icon: '🏡',
  },
  {
    id: 'guest-house',
    label: 'Guest House',
    description: 'A private retreat for family — accessible, comfortable, and purpose-built.',
    baseRange: [45000, 250000],
    perSqft: { standard: 155, premium: 230, luxury: 325 },
    icon: '🛖',
  },
];

const SIZE_OPTIONS = [
  { id: 'small', label: 'Small', sqft: 350, range: 'Under 450 sq ft', description: 'Studio or 1-bed' },
  { id: 'medium', label: 'Medium', sqft: 600, range: '450–750 sq ft', description: '1–2 bedroom' },
  { id: 'large', label: 'Large', sqft: 850, range: '750–1,000 sq ft', description: '2+ bedroom' },
];

const FINISH_OPTIONS = [
  { id: 'standard', label: 'Standard', description: 'Functional finishes — LVP floors, stock cabinets, mid-range fixtures.' },
  { id: 'premium', label: 'Premium', description: 'Upgraded finishes — hardwood or tile, semi-custom cabinets, quality fixtures.' },
  { id: 'luxury', label: 'Luxury', description: 'High-end finishes — custom everything, designer tile, high-end appliances.' },
];

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  return `$${Math.round(n / 1000)}K`;
}

function calcRange(
  type: typeof PROJECT_TYPES[number],
  size: typeof SIZE_OPTIONS[number],
  finish: typeof FINISH_OPTIONS[number]
) {
  const rate = type.perSqft[finish.id as keyof typeof type.perSqft];
  const base = rate * size.sqft;
  const low = Math.max(type.baseRange[0], Math.round(base * 0.85 / 5000) * 5000);
  const high = Math.min(type.baseRange[1] * 1.15, Math.round(base * 1.2 / 5000) * 5000);
  return { low, high };
}

type Step = 'type' | 'size' | 'finish' | 'result';

export default function CostCalculator() {
  const [step, setStep] = useState<Step>('type');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);

  const type = PROJECT_TYPES.find(t => t.id === selectedType);
  const size = SIZE_OPTIONS.find(s => s.id === selectedSize);
  const finish = FINISH_OPTIONS.find(f => f.id === selectedFinish);
  const range = type && size && finish ? calcRange(type, size, finish) : null;

  const steps: { id: Step; label: string }[] = [
    { id: 'type', label: 'Project Type' },
    { id: 'size', label: 'Size' },
    { id: 'finish', label: 'Finish Level' },
    { id: 'result', label: 'Your Estimate' },
  ];
  const stepIndex = steps.findIndex(s => s.id === step);

  function reset() {
    setStep('type');
    setSelectedType(null);
    setSelectedSize(null);
    setSelectedFinish(null);
  }

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title="DFW Garage Apartment Cost Calculator — Estimate Your Build"
        description="Estimate the cost of building a garage apartment or ADU in Dallas–Fort Worth. Interactive calculator for garage conversions, above-garage apartments, detached ADUs, and guest houses."
        canonical="/cost-calculator"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Cost Calculator", "item": "https://dfwgarageapartments.com/cost-calculator" }
          ]
        }}
      />

      <div className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Cost Calculator' }]} />
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Free Estimate Tool</span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Garage Apartment Cost Calculator
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Get a realistic cost range for your project in 60 seconds — based on project type, size, and finish level.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className={`flex items-center gap-2 text-sm font-sans font-medium transition-colors ${i <= stepIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i < stepIndex ? 'bg-accent text-white' : i === stepIndex ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                  {i < stepIndex ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-0.5 transition-colors ${i < stepIndex ? 'bg-accent' : 'bg-muted'}`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Step: Project Type */}
        {step === 'type' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">What type of project are you planning?</h2>
            <p className="text-muted-foreground font-sans mb-6">Select the option that best describes your project.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {PROJECT_TYPES.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all hover:border-accent hover:shadow-md ${selectedType === t.id ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                >
                  <div className="text-2xl mb-2">{t.icon}</div>
                  <div className="font-serif font-bold text-primary text-base mb-1">{t.label}</div>
                  <div className="text-sm text-muted-foreground font-sans leading-relaxed">{t.description}</div>
                </button>
              ))}
            </div>
            <Button
              disabled={!selectedType}
              onClick={() => setStep('size')}
              className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
            >
              Continue <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}

        {/* Step: Size */}
        {step === 'size' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">How large is the space?</h2>
            <p className="text-muted-foreground font-sans mb-6">Choose the approximate finished square footage you're targeting.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {SIZE_OPTIONS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSize(s.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all hover:border-accent hover:shadow-md ${selectedSize === s.id ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                >
                  <div className="font-serif font-bold text-primary text-lg mb-1">{s.label}</div>
                  <div className="text-sm font-bold text-accent mb-1">{s.range}</div>
                  <div className="text-xs text-muted-foreground font-sans">{s.description}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep('type')} className="border-border">Back</Button>
              <Button
                disabled={!selectedSize}
                onClick={() => setStep('finish')}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
              >
                Continue <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step: Finish Level */}
        {step === 'finish' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">What finish level are you aiming for?</h2>
            <p className="text-muted-foreground font-sans mb-6">Finish level is one of the biggest cost drivers. Be realistic — we'll give you honest ranges.</p>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {FINISH_OPTIONS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFinish(f.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all hover:border-accent hover:shadow-md ${selectedFinish === f.id ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                >
                  <div className="font-serif font-bold text-primary text-base mb-1">{f.label}</div>
                  <div className="text-sm text-muted-foreground font-sans">{f.description}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep('size')} className="border-border">Back</Button>
              <Button
                disabled={!selectedFinish}
                onClick={() => setStep('result')}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
              >
                See My Estimate <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step: Result */}
        {step === 'result' && range && type && size && finish && (
          <div>
            <div className="bg-primary text-white rounded-2xl p-8 mb-8 text-center">
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Your Estimated Range</p>
              <div className="text-5xl lg:text-6xl font-serif font-bold mb-2">
                {formatCurrency(range.low)} – {formatCurrency(range.high)}
              </div>
              <p className="text-white/70 text-sm font-sans">
                {type.label} · {size.range} · {finish.label} finish
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 mb-8 border border-border">
              <h3 className="font-serif font-bold text-primary text-lg mb-3">What affects this range?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Site conditions (slope, utility access, existing structure)</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> City permit fees and requirements (vary by DFW city)</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Plumbing and electrical complexity</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Foundation and structural conditions</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Your specific design selections</li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
              <p className="font-serif font-bold text-primary text-base mb-2">Want a real number for your property?</p>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                This estimate is a starting point. We'll give you a project-specific range after seeing your property and understanding your goals — at no cost.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide">
                  Schedule a Free Consultation
                </Button>
              </Link>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
            >
              <RotateCcw className="w-4 h-4" /> Start over
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
