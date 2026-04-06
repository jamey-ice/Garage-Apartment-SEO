import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';
import { Button } from '@/components/ui/button';

const teamImg = '/images/1408_Lipscomb_Walkthrough-13_1775501313346.jpg';
const workingImg = '/images/04.08.22_6AHomes__3937ThistleLane_(41_of_44)_1775501313345.jpg';
const designImg = '/images/6thAveHomes_InteriorDesigners_8.13.2020-4_1775501313345.jpg';

const DIFFERENTIATORS = [
  "One team from start to finish — design, permits, construction",
  "Strong focus on design: spaces with soul, not cookie-cutter boxes",
  "Clear and simple process — no runarounds, no middlemen",
  "Deep local expertise across Fort Worth, Dallas, and DFW suburbs",
  "Cost-plus pricing transparency — the number we give you, we stand behind",
  "120+ five-star Google reviews",
];

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="bg-background pt-32 pb-0">
      <SEOHead
        title="About Us | Powered by 6th Ave Homes | DFW Garage Apartments"
        description="DFW Garage Apartments is powered by 6th Ave Homes — a Fort Worth-based real estate, design, and construction company helping homeowners since 2016."
      />

      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'About Us' }]} />

        {/* StoryBrand: Mini Customer Story → Your Story → What Makes Us Different */}

        {/* Mini Customer Story */}
        <div className="max-w-3xl mb-24">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-4">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8">Powered by 6th Ave Homes</h1>

            <div className="bg-card border-l-4 border-accent p-8 mb-10">
              <p className="text-xl font-sans leading-relaxed text-foreground">
                You want to add a garage apartment to your property, but the process feels complicated and you're not sure where to start. You deserve a team that gets it — one that handles design, permitting, and construction so you don't have to manage five different companies. That's why we created DFW Garage Apartments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Your Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <img src={teamImg} alt="The DFW Garage Apartments team at a completed project" className="w-full h-auto object-cover shadow-2xl" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Your Story</h2>

            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              DFW Garage Apartments is powered by 6th Ave Homes, a Fort Worth-based real estate, design, and construction company founded by Jamey Ice and Jimmy Williams in 2016.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              What started with flipping historic homes in the Fairmount neighborhood has grown into a full one-stop-shop — brokerage, design, construction, and lending — serving homeowners across Dallas–Fort Worth. We've helped thousands of families find and create homes that feel like them.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              We built DFW Garage Apartments because we kept getting the same call: homeowners who wanted to add space to their property but didn't know where to start, who to hire, or how to navigate the process. We knew we could help — because we already had the design team, the construction team, and the local expertise under one roof.
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              This site exists to make the process simpler. Whether you're exploring the idea or ready to break ground, we're here to help you figure out what makes sense for your property.
            </p>

            <div className="pt-4">
              <img src="/logos/logo-coral-navy.png" alt="6th Ave Homes" className="h-10 mb-4" />
              <p className="text-sm text-muted-foreground font-sans">
                The full resources, experience, and team of 6th Ave Homes — one of Fort Worth's most respected design-build companies — focused entirely on your garage apartment project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What Makes Us Different */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">What Makes Us Different</h2>
            <ul className="space-y-5">
              {DIFFERENTIATORS.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground font-sans text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-sm uppercase tracking-widest font-bold" data-testid="btn-about-cta">
                  Work With Our Team
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img src={workingImg} alt="Our construction team on-site" className="w-full aspect-[4/3] object-cover shadow-2xl" />
            <img src={designImg} alt="Our design team at work" className="w-full aspect-[4/3] object-cover shadow-2xl" />
          </motion.div>
        </div>
      </div>

      <CTABanner
        variant="cream"
        title="Ready to meet the team?"
        subtitle="Let's sit down and discuss the potential sitting right in your backyard."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
