import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { ServiceCard } from '@/components/ServiceCard';
import { CTABanner } from '@/components/CTABanner';

import exteriorNew from '@assets/2253_6th_Ave-25_1775501331344.jpg';
import conversion from '@assets/2223_Mistletoe-6_1775501313346.jpg';
import attached from '@assets/Bethany_-_8_19_21BellaireDrDB-15_1775501331346.jpg';
import custom from '@assets/Amber_Shumake_-_6th_Ave_Monthly_Design_10.28.21_00747_1775501331346.jpg';

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-background pt-32 pb-0">
      <SEOHead 
        title="Garage Apartment & ADU Services" 
        description="Explore our specialized construction services: New Garage Apartments, Conversions, Attached ADUs, and Custom Designs in DFW."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'Services' }]} />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">Our Expertise</h1>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">
            We specialize exclusively in accessory dwelling units. This narrow focus means we navigate complex zoning laws, engineering challenges, and space optimization better than any general contractor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <ServiceCard 
            imageSrc={exteriorNew}
            title="New Detached Garage Apartments"
            description="We demolish your old, dilapidated garage and build a brand new, structurally sound garage with a luxury living space above it. This is our most popular offering, maximizing both parking and living square footage."
            link="/contact?service=new"
          />
          <ServiceCard 
            imageSrc={conversion}
            title="Garage Conversions"
            description="Transform your existing attached or detached garage into a climate-controlled, beautiful living space. We handle insulation, plumbing, electrical, and finish out to make it feel like a seamless part of your home."
            link="/contact?service=conversion"
          />
          <ServiceCard 
            imageSrc={attached}
            title="Attached ADUs (Additions)"
            description="Expand your home's footprint with a seamless addition. Whether it's a mother-in-law suite or an expanded master wing, we ensure the roofline, exterior, and interior details match perfectly."
            link="/contact?service=attached"
          />
          <ServiceCard 
            imageSrc={custom}
            title="Custom Design-Build"
            description="Have a unique piece of property or a specific vision? Our in-house architectural designers will work with you to conceptualize and build a bespoke accessory structure tailored exactly to your needs."
            link="/contact?service=custom"
          />
        </div>
      </div>

      <CTABanner 
        variant="coral"
        title="Not sure which option is right for your property?"
        subtitle="Let our experts evaluate your lot, check local zoning, and give you professional recommendations."
        buttonText="Schedule a Consultation"
      />
    </div>
  );
}
