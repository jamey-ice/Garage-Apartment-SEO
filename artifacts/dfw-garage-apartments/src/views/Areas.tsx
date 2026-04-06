import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CityCard } from '@/components/CityCard';
import { CTABanner } from '@/components/CTABanner';

const fwImg = '/images/2253_6th_Ave-35_1775501331344.jpg';
const dalImg = '/images/4205_Glenwood-33_Emily_Jolliff_1775501331345.jpg';
const arlingtonImg = '/images/2253_6th_Ave-38_1775501331344.jpg';
const planoImg = '/images/Bethany_-_8_27_211937Fairmount-30_1775501331346.jpg';
const friscoImg = '/images/2253_6th_Ave-42_1775501331345.jpg';
const dentonImg = '/images/301_rustic_view-8-6-20-14_1775501313346.jpg';
const mckinneyImg = '/images/2253_6th_Ave-52_1775501331345.jpg';
const southlakeImg = '/images/Bethany_-_8_19_21BellaireDrDB-15_1775501331346.jpg';

export default function Areas() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const cities = [
    {
      name: "Fort Worth",
      slug: "fort-worth",
      img: fwImg,
      blurb: "Historic neighborhoods, diverse zoning districts, and a city that's actively embracing ADU development."
    },
    {
      name: "Dallas",
      slug: "dallas",
      img: dalImg,
      blurb: "Strong rental demand and premium neighborhoods make Dallas one of the best ADU markets in Texas."
    },
    {
      name: "Arlington",
      slug: "arlington",
      img: arlingtonImg,
      blurb: "Mid-cities location with family-oriented neighborhoods and growing demand for multigenerational housing."
    },
    {
      name: "Plano",
      slug: "plano",
      img: planoImg,
      blurb: "Established suburbs, large lots, and high property values create strong ROI for garage apartment projects."
    },
    {
      name: "Frisco",
      slug: "frisco",
      img: friscoImg,
      blurb: "One of the fastest-growing cities in America — high demand, high incomes, high property appreciation."
    },
    {
      name: "Denton",
      slug: "denton",
      img: dentonImg,
      blurb: "University city with strong rental demand, central location, and a mix of historic and new development."
    },
    {
      name: "McKinney",
      slug: "mckinney",
      img: mckinneyImg,
      blurb: "Charming historic downtown surrounded by newer suburbs — perfect for ADUs that complement existing homes."
    },
    {
      name: "Southlake",
      slug: "southlake",
      img: southlakeImg,
      blurb: "Upscale community with large properties and homeowners looking for premium, design-forward ADU builds."
    }
  ];

  return (
    <div className="bg-background pt-32 pb-0">
      <SEOHead
        title="Garage Apartment Builders Across DFW — Areas We Serve"
        description="DFW Garage Apartments serves Fort Worth, Dallas, Arlington, Plano, Frisco, Denton, McKinney, Southlake and more. We know each city's zoning laws and permit requirements."
        canonical="/areas"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://dfwgarageapartments.com/areas" }
          ]
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'Areas We Serve' }]} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Serving DFW Since 2016</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">Garage Apartment Builders Across DFW</h1>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">
            Every city in Dallas–Fort Worth has different rules for garage apartments and ADUs. We know the zoning codes, permit requirements, and building regulations in each one — so your project doesn't get stuck in red tape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <CityCard
                cityName={city.name}
                imageSrc={city.img}
                blurb={city.blurb}
                link={`/areas/${city.slug}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Local authority content */}
        <div className="mb-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Why Local Expertise Matters</h2>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-6">
            Fort Worth allows ADUs by right in most residential zones, while Dallas has neighborhood-specific overlays. Plano caps ADU size at 1,100 sq ft; Denton at 800 sq ft or 75% of the primary dwelling. These aren't technicalities — they're the difference between a project that gets approved in 60 days and one that sits in limbo for a year.
          </p>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            We've built in all of these cities. We know the inspectors, the permit timelines, and the common pitfalls. That local knowledge is one of the most valuable things we bring to your project.
          </p>
        </div>
      </div>

      <CTABanner
        variant="navy"
        title="Don't see your city?"
        subtitle="We frequently take on projects in surrounding DFW communities. Reach out and let's talk."
        buttonText="Contact Us About Your City"
        buttonLink="/contact"
      />
    </div>
  );
}
