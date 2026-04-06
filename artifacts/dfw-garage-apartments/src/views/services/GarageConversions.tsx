import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
const heroImg = '/images/2228_Hurley_Patry_Family_Garage_Apartment-40_1775501313347.jpg';
const interiorImg = '/images/2228_Hurley_Patry_Family_Garage_Apartment-7_1775501313346.jpg';
const exteriorImg = '/images/2228_Hurley_Patry_Family_Garage_Apartment-75_1775501313347.jpg';

const faqs = [
  {
    q: 'Can I convert my garage to an apartment in Fort Worth?',
    a: 'Yes. Fort Worth allows garage conversions, but you\'ll need to maintain the same amount of covered parking (or get a variance). You\'ll also need egress windows, smoke/CO detectors, and a building permit. We handle all of this.',
  },
  {
    q: 'How much does a garage conversion cost in DFW?',
    a: 'Most garage conversions in DFW run $40,000–$100,000 depending on size, plumbing/electrical needs, and finish level. We\'ll give you a realistic range at your first meeting.',
  },
  {
    q: 'Do I need a permit to convert my garage?',
    a: 'Yes — every city in DFW requires a building permit for garage conversions. The good news: we handle the permit process for you.',
  },
  {
    q: 'How long does a garage conversion take?',
    a: 'Typically 3–5 months from planning to completion. Construction itself is usually 6–12 weeks.',
  },
  {
    q: 'Will a garage conversion increase my property value?',
    a: 'In most cases, yes. A well-done garage conversion adds livable square footage, which directly increases assessed and market value. It also opens up rental income potential.',
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex justify-between items-start gap-4 font-semibold text-primary text-base"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-accent" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-accent" />}
      </button>
      {open && <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function GarageConversions() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Garage Conversion Apartments in DFW — Convert Your Existing Garage"
        description="Turn your existing garage into a livable apartment. We handle design, permits, and construction for garage conversions across Dallas–Fort Worth. $40K–$100K."
        canonical="/services/garage-conversions"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://dfwgarageapartments.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Garage Conversions", "item": "https://dfwgarageapartments.com/services/garage-conversions" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Garage Conversion Apartments",
            "provider": { "@type": "LocalBusiness", "name": "DFW Garage Apartments" },
            "areaServed": "Dallas–Fort Worth",
            "description": "Full-service garage conversion into a livable apartment, including design, permits, and construction.",
            "serviceType": "Garage Conversion"
          }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Services', href: '/services' }, { label: 'Garage Conversions' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Garage conversion interior in Fort Worth" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Garage Conversions</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Garage Conversions in<br />Dallas–Fort Worth
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Turn your existing garage into a fully livable apartment, studio, or rental unit. One team handles design, permits, and construction.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8">
                Schedule a Free Consultation
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Typical cost: <strong className="text-white">$40,000–$100,000</strong></span>
              <span>·</span>
              <span>Timeline: <strong className="text-white">3–5 months</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A garage conversion is one of the fastest and most cost-effective ways to add livable square footage to your home. You already have the foundation, the walls, and the roof — we transform what's there into a space that actually works.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you're converting a two-car garage into a studio apartment, a one-car garage into a home office, or a detached garage into a full rental unit, the process is simpler than most people expect. And because we handle design, permitting, and construction under one roof, there's no juggling multiple contractors.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Garage conversions in DFW typically range from $40,000 to $100,000 depending on the size, condition of the existing structure, plumbing and electrical needs, and the level of finish. We'll give you a realistic number before any work begins.
        </p>
      </section>

      {/* What's Involved */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                What's Involved in a Garage Conversion
              </h2>
              <div className="space-y-4">
                {[
                  ['Structural Assessment', 'We evaluate your existing garage\'s foundation, framing, and condition before design begins.'],
                  ['Insulation & Climate Control', 'Garages aren\'t insulated like living spaces — we bring them up to residential code.'],
                  ['Plumbing & Electrical', 'Full rough-in and finish for bathroom, kitchen, and electrical panel upgrades as needed.'],
                  ['Flooring & Finish', 'From concrete polishing to hardwood, we match the finish level to your goals and budget.'],
                  ['Egress Windows & Fire Safety', 'Fort Worth requires egress windows and smoke/CO detectors in all converted living spaces.'],
                  ['HVAC', 'Mini-split systems are the most common and cost-effective solution for converted garages.'],
                  ['Separate Entrance', 'Options for private entry, making the space ideal for rental or family use.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary">{title}</strong>
                      <span className="text-gray-600"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src={interiorImg} alt="Converted garage living space interior" className="rounded-lg shadow-xl object-cover w-full h-80 lg:h-96" />
          </div>
        </div>
      </section>

      {/* Zoning */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Garage Conversion Zoning in DFW
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-primary">Fort Worth:</strong> Garage conversions are permitted, but the city requires you to maintain equivalent covered parking space — or obtain a variance. Egress windows, smoke and CO detectors, and a building permit are required. Fort Worth is one of the more ADU-friendly cities in the region.
          </p>
          <p>
            <strong className="text-primary">Dallas:</strong> Conversions in Dallas typically require either an ADUO (Accessory Dwelling Unit Overlay) zone or a Board of Adjustment exception. Requirements vary significantly by neighborhood — some areas have much more flexibility than others.
          </p>
          <p>
            <strong className="text-primary">Other DFW Cities:</strong> Each city has its own rules around setbacks, lot size minimums, parking replacement, and permit requirements. We research your specific property before design begins.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/resources/zoning-guide" className="text-accent font-semibold hover:underline flex items-center gap-1">
            Read the full DFW Zoning Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            How Long Does a Garage Conversion Take?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Planning', duration: '2–4 weeks', desc: 'Site visit, design development, material selections, and scope finalization.' },
              { phase: 'Permits', duration: '2–6 weeks', desc: 'Permit timeline varies by city. Fort Worth and smaller cities tend to be faster than Dallas.' },
              { phase: 'Construction', duration: '6–12 weeks', desc: 'Demo, rough-in, insulation, drywall, finishes, fixtures, and final walkthrough.' },
            ].map(s => (
              <div key={s.phase} className="bg-white/10 rounded-lg p-6">
                <div className="text-accent font-bold uppercase tracking-widest text-xs mb-1">{s.phase}</div>
                <div className="text-2xl font-bold mb-2">{s.duration}</div>
                <p className="text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70">Total: <strong className="text-white">3–5 months</strong> from first conversation to final walkthrough.</p>
        </div>
      </section>

      {/* ROI */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Is a Garage Conversion Worth It?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: '$1,200–$2,000/mo', label: 'Rental income potential in DFW' },
            { stat: '+8–12%', label: 'Typical property value increase' },
            { stat: '5–7 yrs', label: 'Average payback period via rental income' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 bg-card rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">{s.stat}</div>
              <div className="text-primary text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          Compared to other renovation types — additions, room remodels, kitchen upgrades — a garage conversion delivers some of the best cost-per-square-foot value because you're not building new structure. You're finishing what's already there. And with DFW's strong rental market, converting a garage to a rental unit can pay for itself within a decade while adding equity from day one.
        </p>
      </section>

      {/* Photo */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <img src={exteriorImg} alt="Garage apartment exterior in Fort Worth" className="w-full rounded-lg shadow-lg object-cover h-72 lg:h-96" />
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Frequently Asked Questions About Garage Conversions
        </h2>
        <div>
          {faqs.map(f => <FAQ key={f.q} {...f} />)}
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-card py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-lg font-bold text-primary mb-4">Helpful Resources</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              { label: 'Cost Guide', href: '/resources/cost-guide' },
              { label: 'Zoning Guide', href: '/resources/zoning-guide' },
              { label: 'Our Process', href: '/process' },
              { label: 'Fort Worth Garage Apartments', href: '/areas/fort-worth' },
              { label: 'Dallas Garage Apartments', href: '/areas/dallas' },
              { label: 'Above-Garage Apartments', href: '/services/above-garage-apartments' },
              { label: 'Detached ADUs', href: '/services/detached-adus' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-accent hover:underline font-medium flex items-center gap-1">
                {l.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Ready to Convert Your Garage?
          </h2>
          <p className="text-white/90 mb-8 text-lg">Tell us about your property and we'll give you a realistic picture of what's possible.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold uppercase tracking-wide px-10">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
