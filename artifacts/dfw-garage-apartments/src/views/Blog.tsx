import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { BookOpen, ArrowRight } from 'lucide-react';

const UPCOMING_TOPICS = [
  'How to finance a garage apartment in DFW (2026)',
  'The fastest cities to get an ADU permit in Dallas–Fort Worth',
  'Garage conversion vs. detached ADU: which makes more financial sense?',
  'How much does a garage apartment add to your property value?',
  'Zoning changes coming to Fort Worth in 2026 — what homeowners need to know',
  'Garage apartment rental income: real numbers from DFW projects',
];

export default function Blog() {
  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title="Garage Apartment Blog — DFW ADU News, Tips & Guides"
        description="Expert articles on garage apartments and ADUs in Dallas–Fort Worth. Costs, zoning, permits, financing, and project stories from the DFW Garage Apartments team."
        canonical="/blog"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dfwgarageapartments.com/blog" }
          ]
        }}
      />

      <div className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Blog' }]} />
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Insights & Guides</span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            The DFW Garage Apartment Blog
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Practical articles on costs, zoning, permits, and financing — from the team that builds garage apartments across Dallas–Fort Worth.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="bg-card rounded-2xl p-8 border border-border mb-12 text-center">
          <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-serif font-bold text-primary text-2xl mb-3">Articles Coming Soon</h2>
          <p className="text-muted-foreground font-sans mb-6 max-w-md mx-auto">
            We're writing in-depth guides on every aspect of building a garage apartment in DFW. Check back soon — or explore our existing free resources in the meantime.
          </p>
          <Link href="/resources">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide">
              Read Our Free Guides <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="font-serif font-bold text-primary text-xl mb-5">Topics We're Covering</h2>
          <ul className="space-y-3">
            {UPCOMING_TOPICS.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-sans text-muted-foreground py-3 border-b border-border last:border-0">
                <span className="text-accent font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary rounded-2xl p-8 text-white text-center">
          <h2 className="font-serif font-bold text-2xl mb-3">Ready to discuss your project?</h2>
          <p className="text-white/70 font-sans mb-6">
            Don't wait for the blog — schedule a free consultation and get answers specific to your property.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
