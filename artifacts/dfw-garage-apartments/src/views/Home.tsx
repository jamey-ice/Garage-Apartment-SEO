import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building2, Home as HomeIcon, Users, DollarSign } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ProcessStep } from '@/components/ProcessStep';
import { CityCard } from '@/components/CityCard';
import { CTABanner } from '@/components/CTABanner';

const heroImg = '/images/lipscomb-garage-apartment-fort-worth.webp';
const exterior1 = '/images/college-ave-garage-apartment-fort-worth.webp';
const kitchen1 = '/images/fairmount-garage-apartment-fort-worth.webp';
const livingRoom = '/images/fort-worth-garage-apartment-exterior.webp';
const happyClients = '/images/client-sold-sign.webp';
const homeOffice = '/images/tanglewood-garage-apartment-exterior.webp';
const bedroom = '/images/rayburn-garage-apartment-exterior.webp';
const conversionImg = '/images/garage-apartment-interior-parkplace-1.webp';
const guestImg = '/images/garage-apartment-interior-mockingbird-1.webp';

const fwImg = '/images/college-ave-garage-apartment-fort-worth.webp';
const dalImg = '/images/fairmount-garage-apartment-fort-worth.webp';
const arlingtonImg = '/images/tanglewood-garage-apartment-exterior.webp';
const planoImg = '/images/lipscomb-above-garage-apartment.webp';
const friscoImg = '/images/rayburn-garage-apartment-exterior.webp';
const dentonImg = '/images/fort-worth-garage-apartment-exterior.webp';
const mckinneyImg = '/images/garage-apartment-interior-mockingbird-3.webp';
const southlakeImg = '/images/garage-apartment-interior-parkplace-2.webp';

const USE_CASES = [
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Rental Income",
    body: "DFW garage apartments typically rent for $1,200–$2,200/month. Most projects pay for themselves in 6–10 years.",
    img: exterior1,
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Aging Parents",
    body: "Keep family close without giving up privacy. An on-site in-law suite is more dignified — and often more affordable — than assisted living.",
    img: bedroom,
  },
  {
    icon: <HomeIcon className="w-7 h-7" />,
    title: "Home Office",
    body: "A detached workspace with no commute, no interruptions, and no lease. Purpose-built for how you actually work.",
    img: homeOffice,
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Guest Suite",
    body: "Give visiting family real privacy — not a pull-out couch. A comfortable, permanent space that makes longer stays actually work.",
    img: livingRoom,
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: "Short-Term Rental",
    body: "Platforms like Airbnb have transformed garage apartments into serious income streams. DFW's tourism and business travel make it especially strong.",
    img: kitchen1,
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Multigenerational Living",
    body: "Grown kids who want independence but aren't ready to move across town. A garage apartment solves this gracefully.",
    img: guestImg,
  },
];

const CITIES = [
  { name: "Fort Worth", slug: "fort-worth", img: fwImg },
  { name: "Dallas", slug: "dallas", img: dalImg },
  { name: "Arlington", slug: "arlington", img: arlingtonImg },
  { name: "Plano", slug: "plano", img: planoImg },
  { name: "Frisco", slug: "frisco", img: friscoImg },
  { name: "Denton", slug: "denton", img: dentonImg },
  { name: "McKinney", slug: "mckinney", img: mckinneyImg },
  { name: "Southlake", slug: "southlake", img: southlakeImg },
];

const TRUST_SIGNALS = [
  { label: "Powered by 6th Ave Homes" },
  { label: "One Team from Start to Finish" },
  { label: "Design + Construction + Lending" },
  { label: "Serving Dallas–Fort Worth Since 2016" },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const handleLeadMagnet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitted(true);
    const link = document.createElement('a');
    link.href = '/dfw-garage-apartment-guide.pdf';
    link.download = 'DFW-Garage-Apartment-Guide.pdf';
    link.click();
  };

  return (
    <div className="bg-background">
      <SEOHead
        title="Garage Apartment Builders in Dallas–Fort Worth"
        description="Design and build your garage apartment with one team. DFW Garage Apartments handles design, permitting, and construction for homeowners across Dallas–Fort Worth. Schedule a free consultation."
        canonical="/"
        ogImage="https://dfwgarageapartments.com/opengraph.jpg"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'GeneralContractor'],
            name: 'DFW Garage Apartments — Powered by 6th Ave Homes',
            alternateName: '6th Ave Homes',
            description: 'Design-build company specializing in garage apartments and ADUs across Dallas–Fort Worth. One team for design, permits, and construction.',
            url: 'https://dfwgarageapartments.com',
            telephone: '(817) 631-9803',
            email: 'info@6thavehomes.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '908 Bryan Ave',
              addressLocality: 'Fort Worth',
              addressRegion: 'TX',
              postalCode: '76104',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 32.7412,
              longitude: -97.3264,
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '120',
              bestRating: '5',
            },
            priceRange: '$$$$',
            areaServed: [
              { '@type': 'City', name: 'Fort Worth' },
              { '@type': 'City', name: 'Dallas' },
              { '@type': 'City', name: 'Plano' },
              { '@type': 'City', name: 'Frisco' },
              { '@type': 'City', name: 'Denton' },
              { '@type': 'City', name: 'McKinney' },
              { '@type': 'City', name: 'Arlington' },
              { '@type': 'City', name: 'Southlake' },
            ],
            sameAs: [
              'https://www.facebook.com/6AHomes',
              'https://www.instagram.com/6thavehomes',
              'https://www.linkedin.com/company/6th-ave-homes',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Garage Apartment Construction Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garage Conversion Apartments' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Above-Garage Apartments' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Detached ADUs' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Guest Houses' } },
              ],
            },
            foundingDate: '2016',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dfwgarageapartments.com/' },
            ],
          },
        ]}
      />

      {/* SECTION 1: HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Garage apartment blueprints and construction by DFW Garage Apartments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent"></div>
              <span className="uppercase tracking-widest text-xs font-bold text-accent">Dallas–Fort Worth</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-[1.05]">
              Garage Apartment Builders in Dallas–Fort Worth
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl font-sans mb-4 text-white/90 max-w-2xl leading-relaxed">
              Design and build your garage apartment with one team — from first conversation to final walkthrough.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base font-sans mb-10 text-white/75 max-w-xl leading-relaxed">
              You've been thinking about adding a garage apartment. Maybe it's for rental income, maybe it's for family, maybe you just want your property to work harder. Whatever the reason, you shouldn't have to hire five different people to make it happen.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-6 text-sm uppercase tracking-widest font-bold w-full sm:w-auto" data-testid="btn-hero-primary">
                  Schedule a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white/10 rounded-none px-8 py-6 text-sm uppercase tracking-widest font-bold w-full sm:w-auto" data-testid="btn-hero-secondary">
                  See Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="py-5 bg-primary border-b border-white/10" aria-label="Trust signals">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                {i > 0 && <div className="h-6 w-px bg-white/20 hidden md:block" />}
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Most Garage Apartment Projects Fall Apart Before They Start
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground font-sans leading-relaxed">
                <p>You've seen the potential. An empty garage. Unused backyard space. A property that could do more.</p>
                <p>But between zoning rules, design decisions, permit applications, finding a contractor, and figuring out what it'll actually cost — most homeowners get stuck before they ever break ground.</p>
                <p>It's not because the project is impossible. It's because the process is fragmented. You're told to hire an architect, then find a builder, then navigate permits on your own, then hope everyone communicates.</p>
                <p className="font-semibold text-foreground">That's the old way. We built a better one.</p>
              </div>
              <div className="mt-8">
                <Link href="/services">
                  <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-wider text-sm hover:text-accent flex items-center gap-2 group" data-testid="link-explore-services">
                    Explore How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative">
                <img src={exterior1} alt="Modern garage apartment in DFW" className="w-full h-full object-cover shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white p-7 shadow-xl max-w-xs hidden md:block">
                  <div className="font-serif text-xl font-bold text-primary mb-2">Built for Life.</div>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">Every project built with the same luxury materials and exacting standards as a multi-million dollar custom home.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUE PROPOSITION / SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">What We Build</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Garage Apartments Built for Real Life</h2>
            <p className="text-lg text-muted-foreground font-sans">From garage conversions to full detached ADUs, we design and build spaces that actually work — for your property, your goals, and your budget.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                img: conversionImg,
                title: "Garage Conversions",
                href: "/services/garage-conversions",
                body: "Turn your existing garage into a fully livable space. One of the fastest and most cost-effective ways to add square footage.",
              },
              {
                img: exterior1,
                title: "Above-Garage Apartments",
                href: "/services/above-garage-apartments",
                body: "Build a full apartment above your existing or new garage. Separate entrance, full kitchen and bath, designed for independence.",
              },
              {
                img: conversionImg,
                title: "Detached ADUs",
                href: "/services/detached-adus",
                body: "A standalone structure on your property — designed from scratch, built to code, and tailored to your lot.",
              },
              {
                img: guestImg,
                title: "Guest Houses",
                href: "/services/guest-houses",
                body: "Whether it's for aging parents, visiting family, or long-term guests — a guest house adds flexibility and value.",
              },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link href={svc.href} className="block" data-testid={`link-service-${i}`}>
                  <div className="relative overflow-hidden aspect-[3/4] mb-4">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-serif font-bold text-xl text-white mb-1">{svc.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">{svc.body}</p>
                  <span className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-5 text-xs uppercase tracking-widest font-bold" data-testid="btn-services-cta">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">From concept to keys.</h2>
            <p className="text-lg text-muted-foreground font-sans">We handle everything. Permitting, design, engineering, and construction — a seamless, stress-free experience from start to finish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-0.5 bg-border/40 z-0"></div>
            <ProcessStep number={1} icon={<HomeIcon className="w-8 h-8" />} title="Site Consultation" description="We visit your property, check local zoning, and give you an honest budget range — before you commit to anything." />
            <ProcessStep number={2} icon={<Building2 className="w-8 h-8" />} title="Design & Permitting" description="Our architectural team creates custom plans. We navigate the permit process on your behalf — every city, every step." />
            <ProcessStep number={3} icon={<CheckCircle2 className="w-8 h-8" />} title="Construction & Keys" description="Expert crews build your project efficiently, with weekly updates, until the final walkthrough and key handover." />
          </div>

          <div className="text-center mt-14">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-10 py-5 text-xs uppercase tracking-widest font-bold" data-testid="btn-process-cta">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY HOMEOWNERS BUILD */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">The Why</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Why Homeowners Build Garage Apartments</h2>
            <p className="text-lg text-muted-foreground font-sans">There's no single reason. But every reason leads back to the same thing: making your property work harder for you.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USE_CASES.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-video mb-5">
                  <img src={uc.img} alt={uc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-11 h-11 bg-accent/90 flex items-center justify-center text-white">
                    {uc.icon}
                  </div>
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{uc.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{uc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PROJECTS / SOCIAL PROOF */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={happyClients} alt="Happy clients with their new garage apartment" className="w-full h-[560px] object-cover shadow-2xl" />
            </motion.div>

            <div>
              <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Client Stories</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-10">Don't just take our word for it.</h2>

              <div className="grid gap-6 mb-10">
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
                <TestimonialCard
                  quote="We were nervous about the permits. They handled every single thing, communicated with us weekly, and delivered on time. We couldn't be happier."
                  name="Linda & Dave K."
                  city="Plano"
                />
              </div>

              <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { n: "45+", l: "Projects Built" },
                  { n: "8", l: "DFW Cities" },
                  { n: "98%", l: "Satisfaction Rate" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="font-serif font-bold text-3xl text-primary">{s.n}</div>
                    <div className="text-muted-foreground font-sans text-xs uppercase tracking-wide mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-10 py-5 text-xs uppercase tracking-widest font-bold" data-testid="btn-see-projects">
                See All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: AREAS WE SERVE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mb-12"
          >
            <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Service Area</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Garage Apartment Builders Across DFW</h2>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              Every city in Dallas–Fort Worth has different rules for garage apartments and ADUs. We know the zoning codes, permit requirements, and building regulations in each one — so your project doesn't get stuck in red tape.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {CITIES.map((city, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
              >
                <CityCard
                  cityName={city.name}
                  imageSrc={city.img}
                  link={`/areas/${city.slug}`}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/areas">
              <Button variant="link" className="text-primary font-bold uppercase tracking-wider text-sm hover:text-accent flex items-center gap-2 mx-auto group" data-testid="link-all-areas">
                View All Service Areas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: THE STAKES */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Don't Let Your Property Sit Underused</h2>
            <div className="space-y-5 text-lg text-white/80 font-sans leading-relaxed mb-10">
              <p>Every month you wait is a month of rental income you're not collecting. It's a year of your parents not having a comfortable place to stay when they visit. It's equity you're not building.</p>
              <p>The homeowners who move forward aren't the ones with the most money or the biggest lots. They're the ones who stop researching and start a conversation.</p>
              <p className="text-white font-semibold">The worst outcome isn't building a garage apartment that doesn't work out. It's never building one at all.</p>
            </div>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-12 py-6 text-sm uppercase tracking-widest font-bold" data-testid="btn-stakes-cta">
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10: LEAD MAGNET / CAPTURE */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Free Resource</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Free Guide: What Every DFW Homeowner Should Know Before Building a Garage Apartment
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                Zoning basics, real cost ranges, timeline expectations, and the questions to ask before you hire anyone. No fluff, no sales pitch — just the stuff we wish every homeowner knew before they started.
              </p>

              {emailSubmitted ? (
                <div className="bg-accent/10 border border-accent/30 p-8 text-center">
                  <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-3" />
                  <h3 className="font-serif font-bold text-xl text-foreground mb-2">You're in.</h3>
                  <p className="text-muted-foreground font-sans">Your guide is downloading now. Save it for whenever you're ready to start planning.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadMagnet} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 border border-border px-4 py-4 font-sans text-sm focus:outline-none focus:border-accent bg-background"
                    data-testid="input-lead-email"
                  />
                  <Button
                    type="submit"
                    className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-4 text-xs uppercase tracking-widest font-bold whitespace-nowrap"
                    data-testid="btn-download-guide"
                  >
                    Download the Free Guide
                  </Button>
                </form>
              )}

              <p className="text-xs text-muted-foreground font-sans mt-4">No spam. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
