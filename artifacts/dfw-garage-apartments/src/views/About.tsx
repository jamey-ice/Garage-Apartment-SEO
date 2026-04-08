import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, Star, MapPin, Calendar, Users } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const STATS = [
  { icon: Star, value: '120+', label: 'Five-Star Google Reviews' },
  { icon: Calendar, value: 'Since 2016', label: 'Building in Fort Worth & DFW' },
  { icon: MapPin, value: '8 Cities', label: 'Across Dallas–Fort Worth' },
  { icon: Users, value: '1 Team', label: 'Design, Permits, Construction' },
];

const DIFFERENTIATORS = [
  {
    title: 'One team from start to finish',
    body: 'Design, permits, and construction under one roof — no handoffs, no finger-pointing. You have one point of contact from first conversation to final walkthrough.',
  },
  {
    title: 'Design-first, not an afterthought',
    body: 'Our in-house design team (led by Kayla East, Texas Tech Interior Design) designs every project. Spaces with soul, not cookie-cutter boxes.',
  },
  {
    title: 'Construction built on transparency',
    body: 'We work cost-plus. You see exactly what we spend — materials, labor, subs — plus our overhead and profit. No hidden markups, no surprises.',
  },
  {
    title: 'Deep Fort Worth and DFW roots',
    body: 'We started on 6th Avenue in the Fairmount neighborhood and grew to serve homeowners across DFW. We know these neighborhoods, these permit offices, and these zoning rules.',
  },
  {
    title: 'Fort Worth Chamber Small Business of the Year',
    body: '6th Ave Homes was named both Emerging Small Business of the Year and Overall Small Business of the Year by the Fort Worth Chamber of Commerce.',
  },
  {
    title: "We've done this before",
    body: "Garage conversions, above-garage apartments, detached ADUs — we've built them all across Fort Worth, Dallas, Arlington, Mansfield, Burleson, Aledo, Denton, and more.",
  },
];

export default function About() {
  return (
    <div className="bg-background">
      <SEOHead
        title="About DFW Garage Apartments — Powered by 6th Ave Homes | Fort Worth"
        description="DFW Garage Apartments is powered by 6th Ave Homes — Fort Worth's award-winning design-build company founded by Jamey Ice and Jimmy Williams in 2016. One team for design, permits, and construction."
        canonical="/about"
        schemas={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dfwgarageapartments.com/' },
            { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://dfwgarageapartments.com/about' },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden min-h-[520px] flex flex-col justify-end">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <img
          src="/images/team-group-6th-ave-homes.webp"
          alt="The 6th Ave Homes team"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div className="relative z-20 max-w-5xl mx-auto w-full px-6 pt-8 pb-4">
          <BreadcrumbNav items={[{ label: 'About Us' }]} />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto w-full px-6 pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
              Built in Fort Worth.<br />
              Powered by 6th Ave Homes.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              DFW Garage Apartments is not a directory or a lead-gen site. It's a service built by 6th Ave Homes — Fort Worth's award-winning design-build company — to give homeowners one clear, trusted path to building a garage apartment in DFW.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-accent text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon className="w-5 h-5 opacity-70 mb-1" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">How We Got Here</span>
            <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
              We Started on 6th Avenue. We Grew Across DFW.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                In 2016, Jimmy Williams and Jamey Ice started flipping historic homes in Fort Worth's Fairmount neighborhood — one house at a time, learning by doing. Jimmy came from a construction background (his family built homes from the ground up; he laid bricks as a teenager before serving as a Fort Worth police officer). Jamey brought the vision, the marketing, and the entrepreneur's belief that the whole home-buying-and-building experience could be done better.
              </p>
              <p>
                They built 6th Ave Homes into a one-stop shop: buying, selling, design, and construction. The Fort Worth Chamber of Commerce named them Emerging Small Business of the Year — then Overall Small Business of the Year. Their team grew. Their reputation grew. And they kept getting the same call.
              </p>
              <p>
                Homeowners who wanted to add a garage apartment or ADU — but didn't know where to start, who to trust, or how to navigate the permit process. We already had the design team, the construction team, and the local expertise. DFW Garage Apartments was the natural next step.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/founders-jimmy-jamey.webp"
              alt="Jimmy Williams and Jamey Ice, Co-Founders of 6th Ave Homes"
              className="w-full h-auto object-cover shadow-2xl"
            />
            <p className="text-sm text-gray-400 mt-3 text-center">Jimmy Williams &amp; Jamey Ice — Co-Founders, 6th Ave Homes</p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-3">The Founders</span>
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: 'CervoNeueBold, serif' }}>
              Meet Jimmy &amp; Jamey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Jimmy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/headshot-jimmy-williams.webp"
                  alt="Jimmy Williams, Co-Founder of 6th Ave Homes"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'CervoNeueBold, serif' }}>Jimmy Williams</h3>
                <p className="text-accent font-bold text-sm uppercase tracking-wide mb-4">Co-Founder</p>
                <p className="text-gray-600 leading-relaxed">
                  Jimmy grew up around construction — laying bricks as a teenager and helping his father build properties from the ground up. Before co-founding 6th Ave Homes, he served as a Fort Worth police officer, developing the discipline and integrity that still define how the company operates. Jimmy and his wife Waverlee, with sons James and Hunter, call the Near Southside of Fort Worth home.
                </p>
              </div>
            </motion.div>

            {/* Jamey */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.15 } } }}
              className="bg-white shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/headshot-jamey-ice.webp"
                  alt="Jamey Ice, Co-Founder of 6th Ave Homes"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'CervoNeueBold, serif' }}>Jamey Ice</h3>
                <p className="text-accent font-bold text-sm uppercase tracking-wide mb-4">Co-Founder &amp; Marketing Director</p>
                <p className="text-gray-600 leading-relaxed">
                  Fort Worth native, serial entrepreneur, and Fort Worth Chamber of Commerce Small Business of the Year (Overall). Jamey co-developed The 4Eleven — a 20,000 sq ft mixed-use warehouse on South Main — and is the lead guitar player for country/rock band Green River Ordinance, whose debut hit #1 on the Billboard Folk Charts. His passion is making Fort Worth a more vibrant place to live.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Team Behind Your Project */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] overflow-hidden shadow-2xl"
          >
            <img
              src="/images/team-design-construction.webp"
              alt="6th Ave Homes design and construction team"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">The Full Team</span>
            <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
              The People Who Actually Build Your Project
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-5">
                <h3 className="font-bold text-primary text-lg mb-1">Lauren Bernhard Staats — Construction Director</h3>
                <p className="text-gray-600">Fort Worth native with a background in historic remodels and urban infill development. Lauren manages every construction project from permit pull to final walkthrough — she knows every subcontractor, every city inspector, every step of the process.</p>
              </div>
              <div className="border-l-4 border-accent pl-5">
                <h3 className="font-bold text-primary text-lg mb-1">Kayla East — Principal Designer</h3>
                <p className="text-gray-600">Interior Design degree + Architecture minor from Texas Tech. Kayla leads every design engagement, working directly with homeowners to create garage apartments that actually feel like a home — not a conversion afterthought.</p>
              </div>
              <div className="border-l-4 border-accent pl-5">
                <h3 className="font-bold text-primary text-lg mb-1">Our Construction Crews</h3>
                <p className="text-gray-600">We work with the same trusted subcontractors — plumbers, electricians, framers — on every project. No random subs from a list. People we've worked with for years who know our standards.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-3">Why Choose Us</span>
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'CervoNeueBold, serif' }}>
              What Makes Us Different
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-10 py-6 text-sm uppercase tracking-widest font-bold">
                Work With Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO / Expertise section */}
      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">Garage Apartment Experts in DFW</span>
              <h2 className="text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
                Your Property. Your Investment. Done Right.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Building a garage apartment in Dallas–Fort Worth is more complex than most people expect. Every city — Fort Worth, Dallas, Arlington, Mansfield, Burleson, Aledo, Denton, Southlake — has its own zoning rules, permit processes, and inspection requirements.
                </p>
                <p>
                  We've navigated this process dozens of times, across every major DFW city. We know which permit offices move fast and which take longer. We know which zoning districts allow ADUs by-right and which require a hearing. We know how to design a garage apartment that passes inspection, delights tenants, and holds its value.
                </p>
                <p>
                  That expertise lives in one team — available to you from the first conversation.
                </p>
              </div>
              <div className="mt-8">
                <img src="/logos/logo-coral-navy.png" alt="6th Ave Homes" className="h-10" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] overflow-hidden shadow-2xl"
            >
              <img
                src="/images/garage-apartment-interior-parkplace-2.webp"
                alt="Beautifully finished garage apartment interior by 6th Ave Homes"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        variant="cream"
        title="Ready to meet the team?"
        subtitle="Schedule a free consultation — we'll look at your specific property, run the numbers, and give you a straight answer about what's possible."
        buttonText="Schedule a Free Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
