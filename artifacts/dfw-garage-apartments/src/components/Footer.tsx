import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DFW Garage Apartments",
    "description": "Garage apartment and ADU construction company serving the Dallas-Fort Worth area",
    "url": "https://dfwgarageapartments.com",
    "telephone": "+1-817-555-0100",
    "address": { 
      "@type": "PostalAddress", 
      "streetAddress": "2228 6th Avenue", 
      "addressLocality": "Fort Worth", 
      "addressRegion": "TX", 
      "postalCode": "76110" 
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 32.7038, "longitude": -97.3344 },
    "areaServed": ["Fort Worth", "Dallas", "Weatherford", "Burleson", "Cleburne", "Granbury", "Aledo", "Benbrook"],
    "priceRange": "$$$$",
    "openingHours": "Mo-Fr 08:00-17:00"
  };

  useEffect(() => {
    let script = document.querySelector('#local-business-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'local-business-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return (
    <footer className="bg-primary text-white pt-20 pb-10" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div>
            <img src="/logos/logo-white.png" alt="DFW Garage Apartments" className="h-12 w-auto mb-6" />
            <p className="text-white/80 mb-6 font-sans text-sm leading-relaxed">
              DFW's premier custom builder for garage apartments, ADUs, and property expansions. Elevating your property's value and potential.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Powered by</span>
              <span className="font-serif font-bold text-lg">6th Ave Homes</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 tracking-wide border-b border-white/20 pb-3 inline-block">Our Services</h3>
            <ul className="space-y-4 text-white/80 font-sans">
              <li><Link href="/services" className="hover:text-accent transition-colors">New Garage Apartments</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Garage Conversions</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Attached ADUs</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Custom ADU Design</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Consultations & Planning</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 tracking-wide border-b border-white/20 pb-3 inline-block">Areas We Serve</h3>
            <ul className="space-y-4 text-white/80 font-sans grid grid-cols-2 gap-x-2 gap-y-4">
              <li><Link href="/areas" className="hover:text-accent transition-colors">Fort Worth</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Dallas</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Weatherford</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Burleson</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Cleburne</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Granbury</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Aledo</Link></li>
              <li><Link href="/areas" className="hover:text-accent transition-colors">Benbrook</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6 tracking-wide border-b border-white/20 pb-3 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-white/80 font-sans mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>2228 6th Avenue<br />Fort Worth, TX 76110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+18175550100" className="hover:text-white transition-colors">(817) 555-0100</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:hello@dfwgarageapartments.com" className="hover:text-white transition-colors">hello@dfwgarageapartments.com</a>
              </li>
            </ul>
            <Link href="/contact">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-none py-6 uppercase tracking-widest font-bold">
                Start Your Project
              </Button>
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 font-sans">
          <p>&copy; {currentYear} DFW Garage Apartments. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
