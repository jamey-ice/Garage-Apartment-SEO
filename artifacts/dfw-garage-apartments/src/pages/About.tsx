import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';

import teamImg from '@assets/1408_Lipscomb_Walkthrough-13_1775501313346.jpg';
import workingImg from '@assets/04.08.22_6AHomes__3937ThistleLane_(41_of_44)_1775501313345.jpg';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-background pt-32 pb-0">
      <SEOHead 
        title="About Us | DFW Garage Apartments" 
        description="Learn about DFW Garage Apartments, powered by 6th Ave Homes. We are Fort Worth's premier custom builder for ADUs and property expansions."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'About Us' }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">Built on a foundation of trust.</h1>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-6">
              DFW Garage Apartments was born out of a growing need in the Metroplex: homeowners wanted to maximize their property value, but couldn't find a contractor specializing specifically in accessory dwelling units.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
              General contractors treated them as side projects. Standard homebuilders considered them too small. We saw an opportunity to bring luxury custom home standards to the ADU space.
            </p>
            
            <div className="p-8 bg-card border-l-4 border-accent">
              <img src="/logos/logo-coral-navy.png" alt="6th Ave Homes" className="h-8 mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2 text-primary">Powered by 6th Ave Homes</h3>
              <p className="font-sans text-sm text-muted-foreground">
                We operate with the full backing, resources, and experienced team of 6th Ave Homes, one of Fort Worth's most respected custom luxury home builders. You get the specialized focus of an ADU company with the stability and craftsmanship of a major builder.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={teamImg} alt="The DFW Garage Apartments Team" className="w-full h-auto object-cover shadow-2xl" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 flex-col-reverse lg:flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <img src={workingImg} alt="Our construction team at work" className="w-full h-auto object-cover shadow-2xl" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Promise</h2>
            <ul className="space-y-8">
              <li>
                <h4 className="font-serif text-2xl font-bold text-foreground mb-2">No Hidden Costs</h4>
                <p className="text-muted-foreground font-sans">We provide detailed, transparent bids. When we give you a number, we stand by it.</p>
              </li>
              <li>
                <h4 className="font-serif text-2xl font-bold text-foreground mb-2">Design-Forward</h4>
                <p className="text-muted-foreground font-sans">A garage apartment shouldn't look like an afterthought. It should elevate your entire property's aesthetic.</p>
              </li>
              <li>
                <h4 className="font-serif text-2xl font-bold text-foreground mb-2">Expert Navigation</h4>
                <p className="text-muted-foreground font-sans">City permitting for ADUs can be a nightmare. We handle the red tape, the zoning boards, and the inspectors so you don't have to.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <CTABanner 
        variant="cream"
        title="Ready to meet the team?"
        subtitle="Let's sit down and discuss the potential sitting right in your backyard."
        buttonText="Schedule a Meeting"
      />
    </div>
  );
}
