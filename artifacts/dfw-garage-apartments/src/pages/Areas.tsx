import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CityCard } from '@/components/CityCard';
import { CTABanner } from '@/components/CTABanner';

import fwImg from '@assets/2253_6th_Ave-35_1775501331344.jpg';
import dalImg from '@assets/4205_Glenwood-33_Emily_Jolliff_1775501331345.jpg';
import weathImg from '@assets/301_rustic_view-8-6-20-14_1775501313346.jpg';
import burlImg from '@assets/Bethany_-_8_27_211937Fairmount-30_1775501331346.jpg';

export default function Areas() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cities = [
    { name: "Fort Worth", img: fwImg },
    { name: "Dallas", img: dalImg },
    { name: "Weatherford", img: weathImg },
    { name: "Burleson", img: burlImg },
    { name: "Cleburne", img: fwImg },
    { name: "Granbury", img: weathImg },
    { name: "Aledo", img: dalImg },
    { name: "Benbrook", img: burlImg }
  ];

  return (
    <div className="bg-background pt-32 pb-0">
      <SEOHead 
        title="Areas We Serve in DFW" 
        description="DFW Garage Apartments serves Fort Worth, Dallas, Weatherford, Aledo, and surrounding cities with luxury ADU construction."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'Service Areas' }]} />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">Where We Build</h1>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">
            We are proud to serve the greater Dallas-Fort Worth metroplex. We understand the specific zoning laws, historic district requirements, and permitting processes for these municipalities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {cities.map((city, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <CityCard 
                cityName={city.name}
                imageSrc={city.img}
                link={`/contact?city=${city.name.toLowerCase()}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <CTABanner 
        variant="navy"
        title="Don't see your city listed?"
        subtitle="We frequently take on special projects in surrounding areas. Reach out to see if we can help."
        buttonText="Contact Us"
      />
    </div>
  );
}
