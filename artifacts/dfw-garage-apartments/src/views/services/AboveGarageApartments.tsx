import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
const heroImg = '/images/2253_6th_Ave-20_1775501313348.jpg';
const interiorImg = '/images/2253_6th_Ave-16_1775501313348.jpg';
const exteriorImg = '/images/2253_6th_Ave-35_1775501331344.jpg';

const faqs = [
  {
    q: 'Can I build an apartment above my existing garage?',
    a: 'In many cases, yes — but it depends on the structural integrity of your current garage\'s foundation and framing. We do a structural assessment during our first visit to determine what\'s feasible.',
  },
  {
    q: 'How much does an above-garage apartment cost in DFW?',
    a: 'Most above-garage apartments in DFW run $80,000–$200,000. Building above an existing garage is typically less than constructing a brand-new two-story garage-and-apartment structure.',
  },
  {
    q: 'Do I need separate utilities for an above-garage apartment?',
    a: 'It depends on your city and your plans. Separate meters make sense for rental units. We help you determine what\'s required and what\'s smart for your situation.',
  },
  {
    q: 'Is it cheaper to convert a garage or build above it?',
    a: 'Garage conversions are usually cheaper ($40K–$100K) because you\'re working within an existing structure. Above-garage apartments cost more ($80K–$200K) but you keep your garage and gain more square footage.',
  },
  {
    q: 'What\'s the fire code for an apartment above a garage?',
    a: 'Texas and most DFW cities require a 1-hour fire-rated assembly between the garage and the living space above. This includes fire-rated drywall, sealed penetrations, and a self-closing fire-rated door if there\'s interior access.',
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button className="w-full text-left flex justify-between items-start gap-4 font-semibold text-primary text-base" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-accent" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-accent" />}
      </button>
      {open && <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function AboveGarageApartments() {
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
        title="Above-Garage Apartments in DFW — Build Up, Keep Your Garage"
        description="Add a full living unit above your existing garage. Keep your parking, gain rental income. DFW Garage Apartments handles design, permits, and construction. $80K–$200K."
        canonical="/services/above-garage-apartments"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://dfwgarageapartments.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Above-Garage Apartments", "item": "https://dfwgarageapartments.com/services/above-garage-apartments" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Above-Garage Apartment Construction",
            "provider": { "@type": "LocalBusiness", "name": "DFW Garage Apartments" },
            "areaServed": "Dallas–Fort Worth",
            "description": "Design and construction of apartment units built above existing garages across DFW.",
            "serviceType": "Above-Garage Apartment"
          }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Services', href: '/services' }, { label: 'Above-Garage Apartments' }]} />
        </div>
      </div>

      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Above-garage apartment exterior in DFW" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Above-Garage Apartments</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Above-Garage Apartments<br />in Dallas–Fort Worth
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Build a full apartment above your existing garage — and keep the garage below. One team handles design, permits, and construction.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8">
                Schedule a Free Consultation
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Typical cost: <strong className="text-white">$80,000–$200,000</strong></span>
              <span>·</span>
              <span>Timeline: <strong className="text-white">4–7 months</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          An above-garage apartment gives you the best of both worlds: a full, separate living space on your property — and you keep the garage below. It's one of the most popular builds for homeowners who want rental income without sacrificing parking or storage.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Building above an existing garage is typically more cost-effective than constructing an entirely new two-story structure from scratch. We evaluate the current garage's foundation and framing, determine what structural reinforcement is needed, and design the apartment to fit your property and budget.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Above-garage apartments in DFW typically range from $80,000 to $200,000. The main variables are square footage, whether the existing garage needs structural upgrades, and the level of finish. We'll walk you through a realistic number at your first meeting.
        </p>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={interiorImg} alt="Above-garage apartment interior" className="rounded-lg shadow-xl object-cover w-full h-80 lg:h-96 order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                What Goes Into Building Above a Garage
              </h2>
              <div className="space-y-4">
                {[
                  ['Structural Assessment', 'We evaluate your existing garage\'s foundation and framing capacity before any design begins.'],
                  ['Structural Reinforcement', 'Depending on the assessment, we may need to add posts, beams, or a new foundation to carry the load above.'],
                  ['Fire-Rated Assembly', 'Texas code requires a 1-hour fire-rated separation between the garage and living space — we build this correctly every time.'],
                  ['Full MEP Systems', 'Complete mechanical, electrical, and plumbing rough-in and finish for an independent living unit.'],
                  ['Private Exterior Staircase', 'Most above-garage apartments have dedicated exterior stairs for privacy and code compliance.'],
                  ['Exterior Design Match', 'We design the upper level to complement or match your main home\'s style and materials.'],
                  ['HVAC & Insulation', 'Mini-splits and proper insulation keep the unit comfortable year-round.'],
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
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Above-Garage Apartment Zoning in DFW
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-primary">Height Limits:</strong> Building above a garage adds height that isn't there for ground-floor conversions. Every city in DFW sets maximum ADU heights — typically 25–35 feet — and your design must stay within those limits. We factor this into design from the start.
          </p>
          <p>
            <strong className="text-primary">Fort Worth:</strong> Generally allows above-garage construction within height limits. No owner-occupancy requirement makes it ideal for rental use.
          </p>
          <p>
            <strong className="text-primary">Dallas:</strong> Overlay districts govern ADU construction. Some neighborhoods have more flexibility than others — we research your specific address.
          </p>
          <p>
            <strong className="text-primary">Setbacks:</strong> Adding height to a structure can bring new setback scrutiny. We confirm setback compliance early to avoid redesigns.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/resources/zoning-guide" className="text-accent font-semibold hover:underline flex items-center gap-1">
            Read the full DFW Zoning Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            How Long Does an Above-Garage Apartment Take?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Design', duration: '3–6 weeks', desc: 'Structural assessment, floor plan development, and material selections.' },
              { phase: 'Permits', duration: '3–8 weeks', desc: 'Permit timelines vary by city. Structural drawings add review time.' },
              { phase: 'Construction', duration: '10–16 weeks', desc: 'Structural work, framing, rough-in, drywall, finishes, and punch list.' },
            ].map(s => (
              <div key={s.phase} className="bg-white/10 rounded-lg p-6">
                <div className="text-accent font-bold uppercase tracking-widest text-xs mb-1">{s.phase}</div>
                <div className="text-2xl font-bold mb-2">{s.duration}</div>
                <p className="text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70">Total: <strong className="text-white">4–7 months</strong> from first conversation to final walkthrough.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Is an Above-Garage Apartment Worth It?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: '$1,400–$2,200/mo', label: 'Rental income potential in DFW' },
            { stat: '+10–15%', label: 'Typical property value increase' },
            { stat: 'Keep your garage', label: 'Unlike a conversion — you don\'t give up parking' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 bg-card rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">{s.stat}</div>
              <div className="text-primary text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          The key advantage over a garage conversion: you don't give up anything. Your garage stays a garage. The apartment above it is entirely additive — new square footage, new rental income potential, new equity. For homeowners who rely on their garage for parking or workshop space, this is often the right call.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-8">
        <img src={exteriorImg} alt="Above-garage apartment exterior view" className="w-full rounded-lg shadow-lg object-cover h-72 lg:h-96" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Frequently Asked Questions About Above-Garage Apartments
        </h2>
        <div>{faqs.map(f => <FAQ key={f.q} {...f} />)}</div>
      </section>

      <section className="bg-card py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-lg font-bold text-primary mb-4">Helpful Resources</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            {[
              { label: 'Cost Guide', href: '/resources/cost-guide' },
              { label: 'Zoning Guide', href: '/resources/zoning-guide' },
              { label: 'Our Process', href: '/process' },
              { label: 'Garage Conversions (comparison)', href: '/services/garage-conversions' },
              { label: 'Detached ADUs', href: '/services/detached-adus' },
              { label: 'Fort Worth Projects', href: '/areas/fort-worth' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-accent hover:underline font-medium flex items-center gap-1">
                {l.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Ready to Build Above Your Garage?
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
