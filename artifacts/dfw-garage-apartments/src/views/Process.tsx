import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
const processImg = '/images/garage-apartment-construction-walsh.jpg';
const designImg = '/images/garage-apartment-interior-parkplace-3.jpg';

const steps = [
  {
    number: '01',
    title: 'Meet Up',
    subtitle: 'We Start With Your Property and Your Goals',
    content: [
      'Every project starts with a conversation — not a pitch. We want to understand what you\'re trying to accomplish: rental income, space for family, a home office, something else entirely. Then we look at your actual property together.',
      'Our first meeting includes a site visit. We walk your lot, look at your existing garage or the space where a new structure might go, and talk through what\'s realistic. We\'ll give you a preliminary read on feasibility, a rough budget range, and an honest assessment of any challenges your property presents.',
      'No pressure, no obligation. By the end of the first meeting, you\'ll have a clear picture of what\'s possible and what it would cost to find out.',
    ],
    details: ['Site visit and walkthrough', 'Goal and budget discussion', 'Preliminary feasibility assessment', 'Rough cost range conversation'],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'We Create a Layout That Fits Your Space and Budget',
    content: [
      'Once you decide to move forward, we develop a floor plan that fits your property and your goals. Our design team works within your budget and the zoning constraints of your city — we don\'t design things that won\'t get approved.',
      'You\'ll see floor plan options, exterior design concepts, and material selections before anything is finalized. We\'ll go through revisions together until the design is exactly right. This is also when we nail down the scope and finalize the project budget.',
      'We use real materials pricing — not estimates pulled from a database. By the end of design, you\'ll know precisely what you\'re building and what it costs.',
    ],
    details: ['Floor plan development', 'Material selections', 'Design revisions until right', 'Final scope and budget'],
  },
  {
    number: '03',
    title: 'Permits',
    subtitle: 'We Navigate the Red Tape So You Don\'t Have To',
    content: [
      'Permits are the part of this process that surprises homeowners most — the paperwork, the city requirements, the wait times. We\'ve done this across eight DFW cities. We know what each city requires, we know how to prepare drawings that get approved, and we know how to respond when the city comes back with comments.',
      'Permit timelines vary by city. Fort Worth and smaller cities like Denton and Southlake tend to move faster than Dallas. In all cases, we submit complete, accurate packages to minimize back-and-forth.',
      'We keep you informed throughout the permit process so you\'re never wondering where things stand. When permits are issued, we\'re ready to start.',
    ],
    details: ['Complete permit package preparation', 'City-specific knowledge', 'Response to city comments', 'Clear communication throughout'],
  },
  {
    number: '04',
    title: 'Construction',
    subtitle: 'One Team, Clear Timeline, Consistent Updates',
    content: [
      'Construction is managed by our team, not subcontracted and forgotten. The same team that helped you design your project is the team overseeing construction. You\'ll have a dedicated project manager and a consistent crew on your property.',
      'We work on a cost-plus basis, which means you see exactly what we spend. No hidden markups, no surprise change orders. If something unexpected comes up — and it sometimes does — we tell you immediately and explain your options before spending a dollar more.',
      'You\'ll receive regular updates on progress, and you\'re welcome on the job site any time. We document the build throughout so you have a complete record of the finished work.',
    ],
    details: ['Dedicated project manager', 'Consistent crew on site', 'Cost-plus billing transparency', 'Regular progress updates'],
  },
  {
    number: '05',
    title: 'Completion',
    subtitle: 'Final Walkthrough and Handoff',
    content: [
      'Before we call anything done, we do a final walkthrough together. We go through the space item by item — you tell us anything that isn\'t right, and we fix it before we hand you the keys.',
      'We\'ll walk you through how everything works: HVAC, appliances, utilities, any smart home features. You\'ll receive a complete warranty package and a final set of all documents — permits, inspections, warranties, and as-builts.',
      'After the project, we\'re still your team. If something comes up in the first year, call us. We stand behind our work.',
    ],
    details: ['Detailed final walkthrough', 'Punch list completion', 'Systems orientation', 'Full documentation package'],
  },
];

export default function Process() {
  return (
    <>
      <SEOHead
        title="How We Build Your Garage Apartment — Our 5-Step Process"
        description="From first conversation to final walkthrough — our clear, no-surprise process for designing and building garage apartments across Dallas–Fort Worth."
        canonical="/process"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Our Process", "item": "https://dfwgarageapartments.com/process" }
          ]
        }}
      />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Our Process' }]} />
        </div>
      </div>

      <section className="bg-primary text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">How We Work</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            How to Build a Garage Apartment in DFW
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From first conversation to final walkthrough — here's exactly how we design and build garage apartments in Dallas–Fort Worth. Clear steps, no surprises.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-card rounded-xl p-6 flex flex-wrap gap-6">
          {[
            { label: 'Total Timeline', value: '3–9 months' },
            { label: 'Cities We Serve', value: '8 DFW Cities' },
            { label: 'Projects Completed', value: '120+' },
            { label: 'In Business Since', value: '2016' },
          ].map(s => (
            <div key={s.label} className="flex-1 min-w-[120px] text-center">
              <div className="text-2xl font-bold text-accent">{s.value}</div>
              <div className="text-primary text-sm font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        {steps.map((step, i) => (
          <div key={step.number} className={`py-16 ${i < steps.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                  {step.title}
                </h2>
                <p className="text-accent font-semibold mb-6">{step.subtitle}</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {step.content.map((p, j) => <p key={j}>{p}</p>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.details.map(d => (
                    <span key={d} className="bg-card text-primary text-sm font-medium px-3 py-1.5 rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                What Makes This Different
              </h2>
              <div className="space-y-4">
                {[
                  ['One Team, Start to Finish', 'Design, permits, and construction handled by 6th Ave Homes — no subcontracting the hard parts out and hoping for the best.'],
                  ['Cost-Plus Billing', 'You see exactly what we spend. No hidden markups. No surprise change orders.'],
                  ['8 Years of DFW Experience', 'We\'ve built across Fort Worth, Dallas, and six other DFW cities. We know the zoning, the permit offices, and the inspectors.'],
                  ['Real Site Visits', 'We come to your property before we design anything. We don\'t sell you something that won\'t work on your lot.'],
                  ['Clear Communication', 'Regular updates throughout design, permits, and construction. You always know where things stand.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <div>
                      <strong className="text-primary">{title}</strong>
                      <span className="text-gray-600"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src={processImg} alt="Garage apartment construction progress" className="rounded-lg shadow-lg w-full h-56 object-cover" />
              <img src={designImg} alt="Design consultation session" className="rounded-lg shadow-lg w-full h-56 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>Common Questions About Our Process</h2>
        {[
          { q: 'Do you handle the permits yourself?', a: 'Yes. We prepare and submit all permit applications, respond to city comments, and manage the process through to permit issuance. You don\'t have to deal with city offices.' },
          { q: 'What does "cost-plus" mean?', a: 'Cost-plus billing means we charge you our actual costs — materials, labor, subcontractors — plus a fixed percentage for overhead and profit. You see every receipt. There are no hidden markups.' },
          { q: 'Do I need to be home during construction?', a: 'No. We\'ll have a key or access code and will work while you\'re living your normal life. You can check in any time you want, and we\'ll give you regular updates regardless.' },
          { q: 'What if something unexpected comes up during construction?', a: 'We tell you immediately and explain your options before spending any additional money. No surprise bills. If something unexpected comes up — and it sometimes does — you make the decision on how to handle it.' },
          { q: 'What warranty do you provide?', a: 'We provide a one-year workmanship warranty on all our projects. Manufacturer warranties on equipment and materials apply separately. We\'ll walk you through the full warranty package at completion.' },
        ].map(({ q, a }) => (
          <div key={q} className="border-b border-gray-200 py-4">
            <h3 className="font-semibold text-primary mb-2">{q}</h3>
            <p className="text-gray-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </section>

      <section className="bg-accent text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Start Your Garage Apartment Project
          </h2>
          <p className="text-white/90 mb-8 text-lg">Step 1 starts with a conversation. Tell us about your property and your goals.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold uppercase tracking-wide px-10">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
