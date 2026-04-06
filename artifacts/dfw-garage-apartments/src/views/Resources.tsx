import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, DollarSign, MapPin, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';

const guides = [
  {
    icon: DollarSign,
    title: 'How Much Does a Garage Apartment Cost in DFW?',
    slug: 'cost-guide',
    desc: 'Real cost ranges for garage conversions, above-garage apartments, and detached ADUs — what drives the price and what you should budget for in 2026.',
    tags: ['Cost Guide', '2026'],
  },
  {
    icon: MapPin,
    title: 'ADU Zoning Guide: DFW City-by-City Rules',
    slug: 'zoning-guide',
    desc: 'Complete zoning guide for every major DFW city — lot requirements, setbacks, height limits, permit contacts, and owner-occupancy rules.',
    tags: ['Zoning', 'Fort Worth', 'Dallas', 'Plano', 'More'],
  },
  {
    icon: BookOpen,
    title: 'Texas ADU Laws: What Homeowners Need to Know',
    slug: 'texas-adu-laws',
    desc: 'How Texas state law affects ADU construction, what\'s changed recently, and what\'s coming from the Legislature.',
    tags: ['Texas Law', 'State Regulations'],
  },
  {
    icon: CreditCard,
    title: 'How to Finance a Garage Apartment in DFW',
    slug: 'financing-options',
    desc: 'Home equity loans, HELOCs, construction loans, and ADU-specific financing options — how they work and how to choose.',
    tags: ['Financing', 'HELOC', 'Home Equity'],
  },
];

export default function Resources() {
  return (
    <>
      <SEOHead
        title="Garage Apartment Resources for DFW Homeowners — Free Guides"
        description="Free guides on garage apartment costs, zoning laws, financing, and ADU rules in Dallas–Fort Worth. Make a smart decision before you build."
        canonical="/resources"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://dfwgarageapartments.com/resources" }
          ]
        }}
      />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Resources' }]} />
        </div>
      </div>

      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Free Guides</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Garage Apartment Resources for DFW Homeowners
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to make a smart decision about building a garage apartment in Dallas–Fort Worth — costs, zoning, laws, and financing explained plainly.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link key={guide.slug} href={`/resources/${guide.slug}`}>
                <div className="group border border-gray-100 rounded-xl p-6 hover:border-accent hover:shadow-md transition-all cursor-pointer bg-white">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                        {guide.title}
                      </h2>
                      <p className="text-gray-600 mb-3">{guide.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {guide.tags.map(tag => (
                          <span key={tag} className="text-xs bg-card text-primary font-medium px-2 py-1 rounded">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Common Questions Across All Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'How much does a garage apartment cost in DFW?', href: '/resources/cost-guide' },
              { q: 'What are the ADU zoning rules in Fort Worth?', href: '/resources/zoning-guide' },
              { q: 'Do I need owner-occupancy to rent an ADU?', href: '/resources/zoning-guide' },
              { q: 'How can I finance a garage apartment?', href: '/resources/financing-options' },
              { q: 'What\'s the Texas ADU law?', href: '/resources/texas-adu-laws' },
              { q: 'Is a garage apartment a good investment?', href: '/resources/cost-guide' },
            ].map(({ q, href }) => (
              <Link key={q} href={href}>
                <div className="bg-white rounded-lg p-4 hover:shadow-sm border border-gray-100 hover:border-accent transition-all cursor-pointer group">
                  <div className="flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">Q</span>
                    <span className="text-primary text-sm font-medium group-hover:text-accent transition-colors">{q}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Ready to Move Beyond the Research?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Schedule a free consultation — we'll look at your specific property and give you a realistic picture of what\'s possible.
          </p>
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
