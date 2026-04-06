import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
const heroImg = '/images/Bethany_-_8_27_211937Fairmount-30_1775501331346.jpg';
const interiorImg = '/images/4205_Glenwood-33_Emily_Jolliff_1775501331345.jpg';
const exteriorImg = '/images/Bethany_-_8_19_21BellaireDrDB-15_1775501331346.jpg';

const faqs = [
  {
    q: 'What\'s the difference between an ADU and a guest house?',
    a: 'Functionally, they\'re similar — both are separate living spaces on your property. "ADU" (Accessory Dwelling Unit) is the legal/zoning term. "Guest house" is the lifestyle term. Zoning rules apply to both.',
  },
  {
    q: 'How much does a detached ADU cost in DFW?',
    a: 'Most detached ADUs in DFW cost $100,000–$300,000 depending on size, site conditions, and finish level. It\'s a ground-up build, so costs are higher than conversions but you get a brand-new, purpose-built structure.',
  },
  {
    q: 'What size ADU can I build on my property?',
    a: 'It depends on your city and lot size. Denton allows up to 800 sq ft or 75% of primary dwelling. Plano allows 400–1,100 sq ft. Fort Worth varies by zoning district. We research your specific property before design begins.',
  },
  {
    q: 'Do I need separate utilities for a detached ADU?',
    a: 'Most cities require or strongly recommend separate utility connections for detached structures. This includes water, sewer, electrical, and gas. Some cities allow shared meters; others require separate. We handle this during the design phase.',
  },
  {
    q: 'Can I put an ADU anywhere on my lot?',
    a: 'No — setback rules dictate how close to property lines, the main house, and other structures the ADU can be. Placement also depends on utility access, drainage, and tree preservation requirements. We factor all of this into the site plan.',
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

export default function DetachedADUs() {
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
        title="Detached ADU Builders in DFW — New Accessory Dwelling Units"
        description="Build a brand-new detached ADU on your property in Dallas–Fort Worth. Maximum design flexibility, purpose-built for rental income or family use. $100K–$300K."
        canonical="/services/detached-adus"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://dfwgarageapartments.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Detached ADUs", "item": "https://dfwgarageapartments.com/services/detached-adus" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Detached ADU Construction",
            "provider": { "@type": "LocalBusiness", "name": "DFW Garage Apartments" },
            "areaServed": "Dallas–Fort Worth",
            "description": "Ground-up construction of detached accessory dwelling units across Dallas–Fort Worth.",
            "serviceType": "Detached ADU"
          }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Services', href: '/services' }, { label: 'Detached ADUs' }]} />
        </div>
      </div>

      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Detached ADU in DFW backyard" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Detached ADUs</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Detached ADU Builders <br />in Dallas–Fort Worth
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            A standalone structure, built from the ground up, on your property. Total design flexibility. One team from site plan to final walkthrough.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8">
                Schedule a Free Consultation
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Typical cost: <strong className="text-white">$100,000–$300,000+</strong></span>
              <span>·</span>
              <span>Timeline: <strong className="text-white">5–9 months</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A detached ADU is a standalone structure on your property — designed from scratch, built from the ground up, and completely separate from your main home. It's the most flexible option for homeowners who want a true independent living space on their lot.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Because it's a new build, a detached ADU gives you total control over the design: layout, size, placement on the lot, finishes, and how the space connects (or doesn't) to your primary home. It's also the best option for lots where the existing garage can't be converted or built upon.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Detached ADUs in DFW typically range from $100,000 to $300,000+ depending on size, design complexity, site conditions (slope, access, utility proximity), and finish level. Larger or premium builds can go higher, but most DFW projects fall in this range.
        </p>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                What Goes Into Building a Detached ADU
              </h2>
              <div className="space-y-4">
                {[
                  ['Site Survey & Placement', 'We map your lot to determine the best location — factoring setbacks, utility lines, drainage, and views.'],
                  ['Foundation', 'Slab or pier-and-beam depending on soil conditions and site characteristics.'],
                  ['Framing & Structure', 'Ground-up framing gives you full flexibility on ceiling heights, window placement, and layout.'],
                  ['Full MEP Systems', 'Complete mechanical, electrical, and plumbing for a fully independent unit.'],
                  ['Separate Utility Connections', 'Most cities require separate water, sewer, electrical, and gas for detached structures.'],
                  ['Exterior Design', 'Most DFW cities require the ADU to match or complement the main home\'s style.'],
                  ['Site Restoration', 'Landscaping, drainage, and any disturbed yard areas restored after construction.'],
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
            <img src={interiorImg} alt="Detached ADU interior" className="rounded-lg shadow-xl object-cover w-full h-80 lg:h-96" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Lot Requirements for a Detached ADU in DFW
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left p-3 font-semibold">City</th>
                <th className="text-left p-3 font-semibold">Max Size</th>
                <th className="text-left p-3 font-semibold">Min Lot Size</th>
                <th className="text-left p-3 font-semibold">Owner-Occupancy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Fort Worth', 'Varies by district', '6,000 sq ft typical', 'Not required'],
                ['Dallas', 'Per ADUO overlay', 'Per overlay district', 'Not required'],
                ['Plano', '400–1,100 sq ft', '7,500 sq ft', 'Not required'],
                ['Frisco', 'Per zoning code', 'Per district', 'Check locally'],
                ['Denton', '800 sq ft or 75%', '7,000 sq ft', 'Not required'],
                ['McKinney', 'Per Chapter 146', 'Per district', 'Check locally'],
                ['Arlington', 'Per zoning code', 'Per district', 'Check locally'],
                ['Southlake', 'Larger lots typical', '15,000+ sq ft', 'Not required'],
              ].map(([city, size, lot, occ], i) => (
                <tr key={city} className={i % 2 === 0 ? 'bg-white' : 'bg-card'}>
                  <td className="p-3 font-medium text-primary">{city}</td>
                  <td className="p-3 text-gray-600">{size}</td>
                  <td className="p-3 text-gray-600">{lot}</td>
                  <td className="p-3 text-gray-600">{occ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">All zoning details subject to change. We verify your specific address before design begins.</p>
        <div className="mt-4">
          <Link href="/resources/zoning-guide" className="text-accent font-semibold hover:underline flex items-center gap-1">
            Full DFW Zoning Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            How Long Does It Take to Build a Detached ADU?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: 'Design', duration: '4–8 weeks', desc: 'Site survey, floor plan development, structural engineering, and material selections.' },
              { phase: 'Permits', duration: '4–10 weeks', desc: 'New construction takes longer to permit than conversions. City timelines vary significantly.' },
              { phase: 'Construction', duration: '12–20 weeks', desc: 'Site prep, foundation, framing, rough-in, exterior, and interior finish.' },
            ].map(s => (
              <div key={s.phase} className="bg-white/10 rounded-lg p-6">
                <div className="text-accent font-bold uppercase tracking-widest text-xs mb-1">{s.phase}</div>
                <div className="text-2xl font-bold mb-2">{s.duration}</div>
                <p className="text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70">Total: <strong className="text-white">5–9 months</strong> from first conversation to final walkthrough.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Is a Detached ADU a Good Investment?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { stat: '$1,600–$2,400/mo', label: 'Highest rental income of any ADU type' },
            { stat: '+12–20%', label: 'Typical property value increase' },
            { stat: 'Highest ROI long-term', label: 'Biggest upfront cost, biggest long-term return' },
          ].map(s => (
            <div key={s.label} className="text-center p-6 bg-card rounded-lg">
              <div className="text-2xl font-bold text-accent mb-2">{s.stat}</div>
              <div className="text-primary text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          Detached ADUs command the highest rents of any ADU type because they offer the most privacy, the most independence, and the most amenities. The payback period is longer than a garage conversion, but the long-term return — in both rental income and property value — is the strongest of any ADU build type.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-8">
        <img src={exteriorImg} alt="Detached ADU exterior view" className="w-full rounded-lg shadow-lg object-cover h-72 lg:h-96" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Frequently Asked Questions About Detached ADUs
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
              { label: 'Guest Houses (comparison)', href: '/services/guest-houses' },
              { label: 'Garage Conversions', href: '/services/garage-conversions' },
              { label: 'Fort Worth ADUs', href: '/areas/fort-worth' },
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
            Ready to Build a Detached ADU?
          </h2>
          <p className="text-white/90 mb-8 text-lg">Tell us about your lot and your goals — we'll give you an honest picture of what's possible.</p>
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
