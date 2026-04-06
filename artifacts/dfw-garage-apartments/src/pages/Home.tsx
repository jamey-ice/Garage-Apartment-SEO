import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Home as HomeIcon } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ProcessStep } from '@/components/ProcessStep';
import { StatBadge } from '@/components/StatBadge';
import { CTABanner } from '@/components/CTABanner';

// Import assets
import heroImg from '@assets/2228_Hurley_Patry_Family_Garage_Apartment-107_1775501313348.jpg';
import exterior1 from '@assets/2253_6th_Ave-20_1775501313348.jpg';
import kitchen1 from '@assets/2228_Hurley_Patry_Family_Garage_Apartment-40_1775501313347.jpg';
import livingRoom from '@assets/2228_Hurley_Patry_Family_Garage_Apartment-29_1775501313347.jpg';
import happyClients from '@assets/2228_Hurley_Patry_Family_Garage_Apartment-80_1775501313347.jpg';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-background">
      <SEOHead 
        title="DFW's Premier Garage Apartment Builder" 
        description="Build a luxury garage apartment or ADU in the Dallas-Fort Worth area. Powered by 6th Ave Homes, bringing custom home quality to your backyard."
        image={heroImg}
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Beautiful detached garage apartment built by DFW Garage Apartments" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-accent">Dallas - Fort Worth</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1]">
              Your Backyard.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Transformed.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-sans mb-10 text-white/90 max-w-2xl leading-relaxed">
              We bring luxury custom home craftsmanship to garage apartments and ADUs across DFW. More space. More income. More value.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-7 text-lg uppercase tracking-widest font-bold w-full sm:w-auto">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8 py-7 text-lg uppercase tracking-widest font-bold w-full sm:w-auto backdrop-blur-sm">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST / STATS SECTION */}
      <section className="py-16 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatBadge number="45+" label="Projects Built" variant="dark" />
            <StatBadge number="8" label="DFW Cities Served" variant="dark" />
            <StatBadge number="$127k" label="Avg Project Value" variant="dark" />
            <StatBadge number="98%" label="Client Satisfaction" variant="dark" />
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION / PROBLEM SOLVING */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Why build a garage apartment?
              </h2>
              <p className="text-lg text-muted-foreground font-sans mb-8 leading-relaxed">
                Whether you need a dedicated home office, a private suite for aging parents, or a rental unit to generate passive income, a garage apartment or ADU is the smartest way to unlock the hidden potential of your property.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Generate passive rental income",
                  "Create private space for guests or family",
                  "Build a quiet, detached home office",
                  "Significantly increase your property value"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-sans text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-wider text-base hover:text-accent flex items-center gap-2">
                  Explore Solutions <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <img src={exterior1} alt="Modern garage apartment" className="w-full h-full object-cover shadow-2xl" />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                  <div className="font-serif text-2xl font-bold text-primary mb-2">Built for Life.</div>
                  <p className="text-muted-foreground font-sans text-sm">Every project is built with the same luxury materials and exacting standards as a multi-million dollar custom home.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS (Cards) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <span className="uppercase tracking-widest text-sm font-bold text-accent block mb-3">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Recent Builds</h2>
            </motion.div>
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-6 py-5 uppercase tracking-widest font-bold">
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              imageSrc={exterior1}
              title="The Mistletoe Suite"
              city="Fort Worth"
              sqft={650}
              bedrooms={1}
              description="A stunning above-garage addition featuring a full kitchen, vaulted ceilings, and a private balcony overlooking the historic district."
            />
            <ProjectCard 
              imageSrc={kitchen1}
              title="Fairmount Guest House"
              city="Fort Worth"
              sqft={800}
              bedrooms={2}
              description="Complete detached ADU built from the ground up, designed to perfectly match the historic architecture of the main house."
            />
            <ProjectCard 
              imageSrc={livingRoom}
              title="Aledo Retreat"
              city="Aledo"
              sqft={1200}
              bedrooms={2}
              description="A sprawling luxury guest house featuring high-end finishes, a massive living area, and smart home integration throughout."
            />
          </div>
        </div>
      </section>

      {/* CTABanner between sections */}
      <CTABanner 
        variant="coral"
        title="Ready to unlock your property's potential?"
        subtitle="Schedule a free site visit and consultation with our design-build experts."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
      />

      {/* 5. THE PROCESS */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-widest text-sm font-bold text-accent block mb-3">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">From concept to keys.</h2>
            <p className="text-lg text-muted-foreground font-sans">We handle everything. Permitting, design, engineering, and construction—giving you a seamless, stress-free experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border/60 z-0"></div>
            
            <ProcessStep 
              number={1}
              icon={<HomeIcon className="w-10 h-10" />}
              title="Consultation & Site Visit"
              description="We visit your property to evaluate the space, discuss your goals, check local zoning, and provide a realistic budget range."
            />
            <ProcessStep 
              number={2}
              icon={<HomeIcon className="w-10 h-10" />}
              title="Design & Permitting"
              description="Our architectural team creates custom plans. We then navigate the complex city permit process on your behalf."
            />
            <ProcessStep 
              number={3}
              icon={<HomeIcon className="w-10 h-10" />}
              title="Construction"
              description="Our expert crews build your project efficiently, keeping you updated weekly until the final walkthrough and key handover."
            />
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={happyClients} alt="Happy clients in their new garage apartment" className="w-full h-[600px] object-cover shadow-2xl" />
            </motion.div>
            
            <div>
              <span className="uppercase tracking-widest text-sm font-bold text-accent block mb-3">Client Stories</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">Don't just take our word for it.</h2>
              
              <div className="grid gap-6">
                <TestimonialCard 
                  quote="The quality of work is incredible. They matched the brick and trim of our 1920s home perfectly. It doesn't look like an addition; it looks like it's always been here."
                  name="Sarah & James M."
                  city="Fort Worth"
                />
                <TestimonialCard 
                  quote="We hired them to build a rental unit above our garage. The process was completely hands-off for us, and we had our first tenant move in exactly when they said it would be finished."
                  name="Michael T."
                  city="Dallas"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <CTABanner 
        variant="navy"
        title="Start Your Project Today"
        subtitle="Take the first step toward transforming your property with DFW's most trusted ADU builder."
        buttonText="Contact Us Now"
      />
    </div>
  );
}
