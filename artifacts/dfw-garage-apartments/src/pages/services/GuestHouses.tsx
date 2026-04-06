import React, { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '@assets/2223_Mistletoe-25_1775501313346.jpg';
import interiorImg from '@assets/2223_Mistletoe-48_1775501313346.jpg';
import exteriorImg from '@assets/2223_Mistletoe-6_1775501313346.jpg';

const faqs = [
  {
    q: 'Can I build a guest house for my aging parents in DFW?',
    a: 'Yes. We design guest houses specifically for multi-generational living — with accessibility features, single-story layouts, and designs that keep family close while preserving independence.',
  },
  {
    q: 'How much does a guest house cost in DFW?',
    a: 'It depends on the type of build. A garage conversion for a guest suite runs $40K–$100K. A detached guest house runs $100K–$250K+. We\'ll give you a realistic range at your first meeting.',
  },
  {
    q: 'Does a guest house need a separate entrance?',
    a: 'Most cities require a separate entrance for any ADU/guest house. This is actually a feature, not a restriction — it gives your family member or guest privacy and independence.',
  },
  {
    q: 'Can I make a guest house ADA accessible?',
    a: 'Absolutely. We can design for zero-step entry, 36" doorways, roll-in showers, grab bars, lower countertops, and other accessibility features. We do this frequently for aging-in-place builds.',
  },
  {
    q: 'Can I convert a guest house to a rental later?',
    a: 'Yes — as long as it meets the ADU zoning requirements for your city (which it will, since we build to those standards). You just need to check owner-occupancy rules in your city before listing it as a rental.',
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

export default function GuestHouses() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex gap-2 items-center">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>›</span>
          <span className="text-primary font-medium">Guest Houses</span>
        </div>
      </div>

      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Guest house in DFW" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Guest Houses</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Guest House Builders<br />in Dallas–Fort Worth
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            A guest house built for family — with accessibility, privacy, and the feel of a real home. We handle design, permits, and construction from start to finish.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8">
                Schedule a Free Consultation
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Typical cost: <strong className="text-white">$100,000–$250,000+</strong></span>
              <span>·</span>
              <span>Timeline: <strong className="text-white">4–8 months</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A guest house is a separate living space on your property — designed for family, not for profit. Whether it's for aging parents, adult children, or extended family who visit for months at a time, we build guest houses that feel like real homes: comfortable, private, and connected to your property in a way that works for everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Guest houses can take any form: a garage conversion, a build above your existing garage, or an entirely new detached structure on your lot. We start by understanding who will live there and what their needs are — then we design around that.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Guest houses in DFW range from $40,000 (a garage conversion for a guest suite) to $250,000+ (a detached custom build with premium finishes and ADA-accessible features). The cost depends on the structure type, size, accessibility requirements, and design complexity.
        </p>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={interiorImg} alt="Guest house interior with accessible design" className="rounded-lg shadow-xl object-cover w-full h-80 lg:h-96 order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                Designing for Multi-Generational Living
              </h2>
              <p className="text-gray-700 mb-6">
                When a guest house is for an aging parent or someone with mobility limitations, design decisions matter more. We build accessibility in from the start — not as an afterthought.
              </p>
              <div className="space-y-4">
                {[
                  ['Zero-Step Entry', 'No threshold to trip over. Entry-level living throughout.'],
                  ['36" Doorways', 'Wide enough for wheelchairs and walkers throughout the home.'],
                  ['Roll-In Shower', 'Barrier-free showers with grab bars and fold-down seating.'],
                  ['Lower Countertops', 'Accessible kitchen and bath surfaces for seated use.'],
                  ['Covered Walkway Options', 'Stay connected to the main house without exposure to weather.'],
                  ['Emergency Access', 'Design that makes it easy to check on family without intruding.'],
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
          Guest House vs. ADU: What's the Difference?
        </h2>
        <div className="bg-card rounded-lg p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            From a zoning and permitting standpoint, they're the same thing. The difference is intent and design priority.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary mb-2">Guest House</h3>
              <p className="text-gray-600 text-sm">Designed for comfort, accessibility, and family connection. Priority is livability and relationships — not necessarily rental income.</p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">ADU (Accessory Dwelling Unit)</h3>
              <p className="text-gray-600 text-sm">Optimized for rental income and independent use. Priority is ROI, privacy, and market-rate rental appeal.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4 text-sm">
            The good news: we build guest houses to ADU zoning standards. So if you ever want to rent it later, you can. Many homeowners build a guest house today with rental optionality built in.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/resources/zoning-guide" className="text-accent font-semibold hover:underline flex items-center gap-1">
            Full DFW Zoning Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            How Long Does It Take to Build a Guest House?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: 'Garage Conversion', duration: '3–5 months', desc: 'Fastest path if your garage can be converted.' },
              { type: 'Above-Garage Build', duration: '4–7 months', desc: 'Keeps your garage; adds living space above it.' },
              { type: 'Detached New Build', duration: '5–9 months', desc: 'Maximum flexibility. Built from the ground up.' },
            ].map(s => (
              <div key={s.type} className="bg-white/10 rounded-lg p-6">
                <div className="text-accent font-bold uppercase tracking-widest text-xs mb-1">{s.type}</div>
                <div className="text-2xl font-bold mb-2">{s.duration}</div>
                <p className="text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-white/60 text-sm">ADA modifications add 1–2 weeks to the design phase to ensure all accessibility details are correct.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Is a Guest House Worth the Investment?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: '$80K–$150K+', label: 'Property value increase even if never rented' },
            { stat: '$4,000–$8,000/mo', label: 'Average DFW assisted living cost — avoided' },
            { stat: 'Priceless', label: 'Family close, independent — on your terms' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 bg-card rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">{s.stat}</div>
              <div className="text-primary text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          Even if you never charge rent, a well-built guest house adds significant property value and avoids the enormous cost of assisted living in DFW — which runs $4,000–$8,000 per month. For families keeping parents close, the math is clear. If you do eventually rent it, that optionality is built in from day one.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-8">
        <img src={exteriorImg} alt="Guest house exterior" className="w-full rounded-lg shadow-lg object-cover h-72 lg:h-96" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Frequently Asked Questions About Guest Houses
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
              { label: 'Detached ADUs (comparison)', href: '/services/detached-adus' },
              { label: 'Garage Conversions', href: '/services/garage-conversions' },
              { label: 'Fort Worth Guest Houses', href: '/areas/fort-worth' },
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
            Ready to Build a Guest House?
          </h2>
          <p className="text-white/90 mb-8 text-lg">Tell us who it's for and what they need. We'll design around that.</p>
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
