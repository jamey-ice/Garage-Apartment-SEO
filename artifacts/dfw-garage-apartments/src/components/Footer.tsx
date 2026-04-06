import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "DFW Garage Apartments",
    "description": "Garage apartment and ADU design, permitting, and construction company serving the Dallas-Fort Worth area. Powered by 6th Ave Homes.",
    "url": "https://dfwgarageapartments.com",
    "telephone": "+1-817-631-9803",
    "email": "info@6thavehomes.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "908 Bryan Ave",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "postalCode": "76104",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 32.7234, "longitude": -97.3352 },
    "areaServed": ["Fort Worth", "Dallas", "Arlington", "Plano", "Frisco", "Denton", "McKinney", "Southlake"],
    "priceRange": "$$$$",
    "foundingDate": "2016",
    "openingHours": "Mo-Fr 08:00-17:00",
    "parentOrganization": {
      "@type": "Organization",
      "name": "6th Ave Homes",
      "url": "https://6thavehomes.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/6AHomes/",
      "https://www.instagram.com/6thavehomes/",
      "https://www.linkedin.com/company/6th-ave-homes"
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <footer className="bg-primary text-white pt-20 pb-10" data-testid="footer">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Column 1: Brand + Contact */}
            <div>
              <img src="/logos/logo-white.png" alt="DFW Garage Apartments" className="h-12 w-auto mb-4" />
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Powered by</p>
              <p className="font-serif font-bold text-lg text-white mb-6">6th Ave Homes</p>
              <ul className="space-y-3 text-white/80 text-sm font-sans mb-6">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>908 Bryan Ave<br />Fort Worth, TX 76104</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+18176319803" className="hover:text-white transition-colors">(817) 631-9803</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href="mailto:info@6thavehomes.com" className="hover:text-white transition-colors text-xs">info@6thavehomes.com</a>
                </li>
              </ul>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/6AHomes/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="6th Ave Homes on Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/6thavehomes/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="6th Ave Homes on Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/company/6th-ave-homes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="6th Ave Homes on LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="font-serif font-bold text-base mb-5 uppercase tracking-widest text-white/60">Services</h3>
              <ul className="space-y-3 text-white/80 font-sans text-sm">
                <li><Link href="/services/garage-conversions" className="hover:text-accent transition-colors">Garage Conversions</Link></li>
                <li><Link href="/services/above-garage-apartments" className="hover:text-accent transition-colors">Above-Garage Apartments</Link></li>
                <li><Link href="/services/detached-adus" className="hover:text-accent transition-colors">Detached ADUs</Link></li>
                <li><Link href="/services/guest-houses" className="hover:text-accent transition-colors">Guest Houses</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors text-white/50">View All Services &rarr;</Link></li>
              </ul>
            </div>

            {/* Column 3: Areas */}
            <div>
              <h3 className="font-serif font-bold text-base mb-5 uppercase tracking-widest text-white/60">Areas We Serve</h3>
              <ul className="space-y-3 text-white/80 font-sans text-sm grid grid-cols-2 gap-x-2">
                <li><Link href="/areas/fort-worth" className="hover:text-accent transition-colors">Fort Worth</Link></li>
                <li><Link href="/areas/dallas" className="hover:text-accent transition-colors">Dallas</Link></li>
                <li><Link href="/areas/arlington" className="hover:text-accent transition-colors">Arlington</Link></li>
                <li><Link href="/areas/plano" className="hover:text-accent transition-colors">Plano</Link></li>
                <li><Link href="/areas/frisco" className="hover:text-accent transition-colors">Frisco</Link></li>
                <li><Link href="/areas/denton" className="hover:text-accent transition-colors">Denton</Link></li>
                <li><Link href="/areas/mckinney" className="hover:text-accent transition-colors">McKinney</Link></li>
                <li><Link href="/areas/southlake" className="hover:text-accent transition-colors">Southlake</Link></li>
                <li className="col-span-2"><Link href="/areas" className="hover:text-accent transition-colors text-white/50">+ More &rarr;</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className="font-serif font-bold text-base mb-5 uppercase tracking-widest text-white/60">Resources</h3>
              <ul className="space-y-3 text-white/80 font-sans text-sm">
                <li><Link href="/cost-calculator" className="hover:text-accent transition-colors">Cost Calculator</Link></li>
                <li><Link href="/resources/cost-guide" className="hover:text-accent transition-colors">Cost Guide</Link></li>
                <li><Link href="/resources/zoning-guide" className="hover:text-accent transition-colors">Zoning Guide</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors">Project Gallery</Link></li>
                <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                <li><Link href="/resources" className="hover:text-accent transition-colors text-white/50">All Resources &rarr;</Link></li>
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs mb-3 font-sans">Serving DFW homeowners since 2016.</p>
                <Link href="/contact" className="text-accent text-sm font-bold uppercase tracking-wide hover:underline">Schedule a Consultation &rarr;</Link>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
            <p>&copy; {currentYear} DFW Garage Apartments. All rights reserved. Powered by 6th Ave Homes.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
