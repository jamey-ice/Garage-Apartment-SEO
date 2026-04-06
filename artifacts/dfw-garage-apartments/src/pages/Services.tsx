import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';
import { Button } from '@/components/ui/button';

import conversionImg from '@assets/2228_Hurley_Patry_Family_Garage_Apartment-29_1775501313347.jpg';
import aboveGarageImg from '@assets/2253_6th_Ave-20_1775501313348.jpg';
import detachedImg from '@assets/Bethany_-_8_27_211937Fairmount-30_1775501331346.jpg';
import guestHouseImg from '@assets/2223_Mistletoe-25_1775501313346.jpg';

const SERVICES = [
  {
    title: "Garage Conversions",
    slug: "garage-conversions",
    img: conversionImg,
    cost: "$40,000–$100,000",
    time: "2–4 months",
    description: "Turn your existing attached or detached garage into fully livable, climate-controlled space. One of the fastest and most cost-effective ways to add square footage to your property. We handle insulation, plumbing, electrical, and finish-out — making it feel like a seamless part of your home.",
    bestFor: "Homeowners who want to add living space without losing their existing structure footprint.",
  },
  {
    title: "Above-Garage Apartments",
    slug: "above-garage-apartments",
    img: aboveGarageImg,
    cost: "$80,000–$200,000",
    time: "4–7 months",
    description: "Build a full apartment above your existing or new garage — separate entrance, full kitchen and bath, designed for independent living. Because the garage already provides the foundation and structural support, costs are often lower than a fully detached build.",
    bestFor: "Homeowners who want to keep their garage and add a complete independent living unit above it.",
  },
  {
    title: "Detached ADUs",
    slug: "detached-adus",
    img: detachedImg,
    cost: "$100,000–$300,000+",
    time: "5–9 months",
    description: "A standalone structure on your property — designed from scratch, built from the ground up, and completely separate from your main home. Because it's a new build, you have total control over the design: layout, size, placement, and finishes. The most flexible option for homeowners who want true independent living space.",
    bestFor: "Homeowners with available lot space who want a purpose-built, fully independent structure.",
  },
  {
    title: "Guest Houses",
    slug: "guest-houses",
    img: guestHouseImg,
    cost: "$80,000–$250,000",
    time: "4–8 months",
    description: "Whether it's for aging parents, visiting family, or long-term guests — a guest house adds flexibility and lasting value to your property. We design them to complement your primary home's architecture, with the same luxury finishes and attention to detail that define every 6th Ave Homes project.",
    bestFor: "Homeowners planning for multigenerational living, frequent guests, or long-term family stays.",
  }
];

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-background pt-32 pb-0">
      <SEOHead
        title="Garage Apartment Services in DFW | Conversions, ADUs, Guest Houses"
        description="Full-service garage apartment and ADU construction in Dallas–Fort Worth. Garage conversions, above-garage apartments, detached ADUs, and guest houses — one team, start to finish."
      />

      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'Services' }]} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">What We Build</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">Garage Apartment Services in Dallas–Fort Worth</h1>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">
            Every property is different, and every homeowner's goals are unique. That's why we offer four distinct types of garage apartment builds — each designed, permitted, and constructed by one team.
          </p>
        </motion.div>

        <div className="space-y-24 mb-24">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <div className="relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover shadow-2xl"
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2">
                    <p className="text-xs uppercase tracking-widest font-bold text-accent">Typical Cost</p>
                    <p className="font-serif font-bold text-lg">{service.cost}</p>
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <span className="text-xs uppercase tracking-widest font-bold text-accent block mb-3">0{idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-6">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted p-4">
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1">Typical Timeline</p>
                    <p className="font-serif font-bold text-foreground text-lg">{service.time}</p>
                  </div>
                  <div className="bg-muted p-4">
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1">Typical Cost</p>
                    <p className="font-serif font-bold text-foreground text-lg">{service.cost}</p>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-4 mb-8">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">Best For</p>
                  <p className="text-muted-foreground font-sans text-sm">{service.bestFor}</p>
                </div>

                <Link href={`/contact?service=${service.slug}`}>
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-5 uppercase tracking-widest font-bold flex items-center gap-2 group">
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Side by Side</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">How the Options Compare</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-bold uppercase tracking-wide text-xs w-40">Feature</th>
                  <th className="p-4 font-bold text-center uppercase tracking-wide text-xs">Garage Conversion</th>
                  <th className="p-4 font-bold text-center uppercase tracking-wide text-xs">Above-Garage</th>
                  <th className="p-4 font-bold text-center uppercase tracking-wide text-xs">Detached ADU</th>
                  <th className="p-4 font-bold text-center uppercase tracking-wide text-xs">Guest House</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Cost Range', values: ['$40K–$100K', '$80K–$200K', '$100K–$300K+', '$80K–$250K+'] },
                  { label: 'Timeline', values: ['3–5 months', '4–7 months', '5–9 months', '3–9 months'] },
                  { label: 'Keep Garage?', values: ['No', 'Yes', 'N/A', 'Depends'] },
                  { label: 'Best For', values: ['Budget & speed', 'Space + garage', 'Full flexibility', 'Family use'] },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-card'}>
                    <td className="p-4 font-bold text-foreground border-r border-border">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="p-4 text-center text-muted-foreground border-r border-border last:border-r-0">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card p-10 md:p-16 mb-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Not Sure Which Is Right?</h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
            The right option depends on your property, your goals, and your budget. During our free site consultation, we'll walk your property, check local zoning, and give you an honest recommendation — even if that recommendation is "not yet."
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-10 py-6 text-sm uppercase tracking-widest font-bold">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </div>

      <CTABanner
        variant="navy"
        title="One Team. Design, Permits, Construction."
        subtitle="You shouldn't have to hire five different companies to build a garage apartment. We handle it all."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}
