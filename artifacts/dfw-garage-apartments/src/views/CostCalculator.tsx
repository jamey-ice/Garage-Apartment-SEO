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
    baseMin: 40000,
    baseMax: 100000,
    icon: '🏠',
  },
  {
    id: 'above-garage',
    label: 'Above-Garage Apartment',
    description: 'Build a full living unit on top of your existing garage — keep the garage below.',
    baseMin: 80000,
    baseMax: 200000,
    icon: '🏗️',
  },
  {
    id: 'detached-adu',
    label: 'Detached ADU',
    description: 'A brand-new standalone structure built from the ground up on your property.',
    baseMin: 100000,
    baseMax: 300000,
    icon: '🏡',
  },
  {
    id: 'guest-house',
    label: 'Guest House',
    description: 'A private retreat for family — accessible, comfortable, and purpose-built.',
    baseMin: 45000,
    baseMax: 250000,
    icon: '🛖',
  },
];

const SIZE_OPTIONS = [
  { id: 'under-400', label: 'Under 400 sq ft', description: 'Studio or efficiency', multiplier: 0.70 },
  { id: '400-600', label: '400–600 sq ft', description: 'Studio or 1-bedroom', multiplier: 0.85 },
  { id: '600-800', label: '600–800 sq ft', description: '1–2 bedroom', multiplier: 1.00 },
  { id: '800-1000', label: '800–1,000 sq ft', description: '2 bedroom', multiplier: 1.15 },
  { id: '1000-plus', label: '1,000+ sq ft', description: '2–3 bedroom', multiplier: 1.35 },
];

const CITY_OPTIONS = [
  { id: 'fort-worth', label: 'Fort Worth', multiplier: 1.00 },
  { id: 'denton', label: 'Denton', multiplier: 0.95 },
  { id: 'dallas', label: 'Dallas', multiplier: 1.05 },
  { id: 'arlington', label: 'Arlington', multiplier: 1.00 },
  { id: 'mansfield', label: 'Mansfield', multiplier: 1.00 },
  { id: 'aledo', label: 'Aledo', multiplier: 1.00 },
  { id: 'burleson', label: 'Burleson', multiplier: 0.98 },
  { id: 'southlake', label: 'Southlake', multiplier: 1.20 },
];

const FINISH_OPTIONS = [
  { id: 'standard', label: 'Standard', description: 'Functional finishes — LVP floors, stock cabinets, mid-range fixtures.', multiplier: 0.85 },
  { id: 'mid-range', label: 'Mid-Range', description: 'Upgraded finishes — hardwood or tile, semi-custom cabinets, quality fixtures.', multiplier: 1.00 },
  { id: 'premium', label: 'Premium', description: 'High-end finishes — custom everything, designer tile, high-end appliances.', multiplier: 1.30 },
];

const PLUMBING_OPTIONS = [
  { id: 'full-kitchen-bath', label: 'Full Kitchen & Bath', description: 'Full kitchen with range/dishwasher plus one or more full bathrooms.', adder: 0 },
  { id: 'kitchenette-bath', label: 'Kitchenette & Bath', description: 'Basic kitchenette (no full range) plus a full bathroom.', adder: -5000 },
  { id: 'bath-only', label: 'Bath Only', description: 'One bathroom — no kitchen plumbing.', adder: -15000 },
  { id: 'none', label: 'No Kitchen or Bath', description: 'Non-plumbed space — office, studio, or hobby room.', adder: -25000 },
];

function roundToNearest5k(n: number) {
  return Math.round(n / 5000) * 5000;
}

function formatCurrency(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${Math.round(n / 1000)}K`;
}

function calcRange(
  typeId: string,
  sizeMultiplier: number,
  cityMultiplier: number,
  finishMultiplier: number,
  plumbingAdder: number
) {
  const type = PROJECT_TYPES.find(t => t.id === typeId)!;
  const low = roundToNearest5k(type.baseMin * sizeMultiplier * finishMultiplier * cityMultiplier + plumbingAdder);
  const high = roundToNearest5k(type.baseMax * sizeMultiplier * finishMultiplier * cityMultiplier + plumbingAdder);
  return { low: Math.max(low, 20000), high: Math.max(high, 30000) };
}

type Step = 'type' | 'size' | 'city' | 'finish' | 'plumbing' | 'result';

export default function CostCalculator() {
  const [step, setStep] = useState<Step>('type');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);
  const [selectedPlumbing, setSelectedPlumbing] = useState<string | null>(null);

  const typeObj = PROJECT_TYPES.find(t => t.id === selectedType);
  const sizeObj = SIZE_OPTIONS.find(s => s.id === selectedSize);
  const cityObj = CITY_OPTIONS.find(c => c.id === selectedCity);
  const finishObj = FINISH_OPTIONS.find(f => f.id === selectedFinish);
  const plumbingObj = PLUMBING_OPTIONS.find(p => p.id === selectedPlumbing);

  const range =
    typeObj && sizeObj && cityObj && finishObj && plumbingObj
      ? calcRange(typeObj.id, sizeObj.multiplier, cityObj.multiplier, finishObj.multiplier, plumbingObj.adder)
      : null;

  const steps: { id: Step; label: string }[] = [
    { id: 'type', label: 'Type' },
    { id: 'size', label: 'Size' },
    { id: 'city', label: 'City' },
    { id: 'finish', label: 'Finish' },
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'result', label: 'Estimate' },
  ];
  const stepIndex = steps.findIndex(s => s.id === step);

  function reset() {
    setStep('type');
    setSelectedType(null);
    setSelectedSize(null);
    setSelectedCity(null);
    setSelectedFinish(null);
    setSelectedPlumbing(null);
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
            Get a realistic cost range for your project in 90 seconds — based on project type, size, location, finish level, and plumbing scope.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Progress bar */}
        <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-2">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className={`flex items-center gap-1.5 text-xs font-sans font-medium transition-colors whitespace-nowrap ${i <= stepIndex ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors shrink-0 ${i < stepIndex ? 'bg-accent text-white' : i === stepIndex ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                  {i < stepIndex ? <CheckCircle className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-0.5 transition-colors min-w-[8px] ${i < stepIndex ? 'bg-accent' : 'bg-muted'}`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Step 1: Project Type */}
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

        {/* Step 2: Size */}
        {step === 'size' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">How large is the space?</h2>
            <p className="text-muted-foreground font-sans mb-6">Choose the approximate finished square footage you're targeting.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {SIZE_OPTIONS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSize(s.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all hover:border-accent hover:shadow-md ${selectedSize === s.id ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                >
                  <div className="font-serif font-bold text-primary text-base mb-1">{s.label}</div>
                  <div className="text-xs text-muted-foreground font-sans">{s.description}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep('type')} className="border-border">Back</Button>
              <Button
                disabled={!selectedSize}
                onClick={() => setStep('city')}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
              >
                Continue <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: City */}
        {step === 'city' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">Which DFW city is your property in?</h2>
            <p className="text-muted-foreground font-sans mb-6">Construction costs vary across the Metroplex due to permit fees, labor markets, and site conditions.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {CITY_OPTIONS.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCity(c.id)}
                  className={`text-center p-4 rounded-xl border-2 transition-all hover:border-accent hover:shadow-md ${selectedCity === c.id ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                >
                  <div className="font-serif font-bold text-primary text-sm">{c.label}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep('size')} className="border-border">Back</Button>
              <Button
                disabled={!selectedCity}
                onClick={() => setStep('finish')}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
              >
                Continue <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Finish Level */}
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
              <Button variant="outline" onClick={() => setStep('city')} className="border-border">Back</Button>
              <Button
                disabled={!selectedFinish}
                onClick={() => setStep('plumbing')}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
              >
                Continue <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Plumbing */}
        {step === 'plumbing' && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">What level of plumbing does your project include?</h2>
            <p className="text-muted-foreground font-sans mb-6">Plumbing scope affects cost significantly — from a full kitchen and bath to a non-plumbed space.</p>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {PLUMBING_OPTIONS.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlumbing(p.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all hover:border-accent hover:shadow-md ${selectedPlumbing === p.id ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                >
                  <div className="font-serif font-bold text-primary text-base mb-1">{p.label}</div>
                  <div className="text-sm text-muted-foreground font-sans">{p.description}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep('finish')} className="border-border">Back</Button>
              <Button
                disabled={!selectedPlumbing}
                onClick={() => setStep('result')}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8 disabled:opacity-40"
              >
                See My Estimate <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 6: Result */}
        {step === 'result' && range && typeObj && sizeObj && cityObj && finishObj && plumbingObj && (
          <div>
            <div className="bg-primary text-white rounded-2xl p-8 mb-8 text-center">
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Your Estimated Range</p>
              <div className="text-5xl lg:text-6xl font-serif font-bold mb-3">
                {formatCurrency(range.low)} – {formatCurrency(range.high)}
              </div>
              <div className="text-white/60 text-xs font-sans space-x-2">
                <span>{typeObj.label}</span>
                <span>·</span>
                <span>{sizeObj.label}</span>
                <span>·</span>
                <span>{cityObj.label}</span>
                <span>·</span>
                <span>{finishObj.label} finish</span>
                <span>·</span>
                <span>{plumbingObj.label}</span>
              </div>
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
