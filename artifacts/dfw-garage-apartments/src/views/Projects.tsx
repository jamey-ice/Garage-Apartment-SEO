import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';
import { MapPin, Square, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

type FilterType = 'all' | 'garage-conversion' | 'above-garage' | 'detached-adu' | 'guest-house';

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'garage-conversion', label: 'Garage Conversions' },
  { id: 'above-garage', label: 'Above-Garage' },
  { id: 'detached-adu', label: 'Detached ADUs' },
  { id: 'guest-house', label: 'Guest Houses' },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.projectType === filter);

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
        <div className="container mx-auto px-4 md:px-6">
          <BreadcrumbNav items={[{ label: 'Projects' }]} />
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Our Work</span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Garage Apartment Projects in Dallas–Fort Worth
          </h1>
          <p className="text-white/80 text-lg max-w-xl font-sans">
            Completed garage conversions, above-garage apartments, detached ADUs, and guest houses — all built by one team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border ${
                filter === f.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map(project => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={project.heroImage}
                  alt={`${project.city} ${project.projectTypeLabel} by DFW Garage Apartments`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-1">
                    {project.projectTypeLabel}
                  </span>
                  <h2 className="font-serif font-bold text-white text-xl leading-snug">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-5 mb-3 text-xs text-muted-foreground font-sans">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  {project.neighborhood}, {project.city}
                </span>
                <span className="flex items-center gap-1.5">
                  <Square className="w-3.5 h-3.5 text-accent" />
                  {project.size.toLocaleString()} sq ft
                </span>
              </div>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
                {project.excerpt}
              </p>

              <span className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                View Project <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* More Coming CTA */}
        <div className="bg-card border border-border p-8 md:p-10 text-center max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-primary text-2xl mb-3">More Projects Being Added</h2>
          <p className="text-muted-foreground font-sans mb-6 text-sm leading-relaxed">
            We complete new garage apartment and ADU projects across DFW every month. Check back regularly — or better yet, start planning yours today.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-4 text-xs uppercase tracking-widest font-bold">
              Start Your Project
            </Button>
          </Link>
        </div>

      </div>

      <CTABanner
        variant="navy"
        title="Ready to Build Your Garage Apartment?"
        subtitle="One team handles design, permits, and construction — from first conversation to final walkthrough."
        buttonText="Schedule a Free Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
