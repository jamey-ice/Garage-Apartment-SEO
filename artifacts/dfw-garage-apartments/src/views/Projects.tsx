import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { Camera, ArrowRight } from 'lucide-react';

const PROJECT_TYPES = [
  { label: 'Garage Conversions', count: '12+', href: '/services/garage-conversions' },
  { label: 'Above-Garage Apartments', count: '8+', href: '/services/above-garage-apartments' },
  { label: 'Detached ADUs', count: '15+', href: '/services/detached-adus' },
  { label: 'Guest Houses', count: '10+', href: '/services/guest-houses' },
];

const CITIES = [
  'Fort Worth', 'Dallas', 'Arlington', 'Plano', 'Frisco', 'Denton',
];

export default function Projects() {
  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title="Garage Apartment Project Gallery — DFW Builds by 6th Ave Homes"
        description="See completed garage apartment and ADU projects across Dallas–Fort Worth. Garage conversions, above-garage apartments, detached ADUs, and guest houses — built by 6th Ave Homes."
        canonical="/projects"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://dfwgarageapartments.com/projects" }
          ]
        }}
      />

      <div className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Projects' }]} />
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Our Work</span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Completed Garage Apartment Projects
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            45+ completed builds across DFW — garage conversions, above-garage apartments, detached ADUs, and guest houses.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-card rounded-2xl p-10 border border-border mb-12 text-center">
          <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-serif font-bold text-primary text-2xl mb-3">Full Gallery Coming Soon</h2>
          <p className="text-muted-foreground font-sans mb-6 max-w-lg mx-auto">
            We're building out our project showcase — with full photography, project details, and cost breakdowns for completed builds across DFW. Check back soon.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide">
              Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="font-serif font-bold text-primary text-xl mb-4">Projects By Type</h2>
            <ul className="space-y-3">
              {PROJECT_TYPES.map((t, i) => (
                <li key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <Link href={t.href} className="text-sm font-sans text-primary hover:text-accent transition-colors font-medium">
                    {t.label}
                  </Link>
                  <span className="text-xs text-accent font-bold bg-accent/10 px-2.5 py-1 rounded-full">{t.count} builds</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif font-bold text-primary text-xl mb-4">Cities We've Built In</h2>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city, i) => (
                <Link
                  key={i}
                  href={`/areas/${city.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-sans bg-card border border-border text-primary px-3 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/2228_Hurley_Patry_Family_Garage_Apartment-107_1775501313348.jpg"
            alt="Completed garage apartment project in Fort Worth, TX"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <p className="font-serif font-bold text-2xl mb-2">45+ Completed Builds</p>
              <p className="text-white/80 font-sans text-sm mb-4">Across 8 DFW cities since 2016</p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
