import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CTABannerProps {
  variant?: 'navy' | 'coral' | 'cream';
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTABanner({ 
  variant = 'navy', 
  title, 
  subtitle, 
  buttonText = 'Schedule a Consultation',
  buttonLink = '/contact' 
}: CTABannerProps) {
  const bgClass = {
    navy: 'bg-primary text-white',
    coral: 'bg-accent text-white',
    cream: 'bg-muted text-foreground'
  }[variant];

  const btnClass = {
    navy: 'bg-accent text-white hover:bg-accent/90',
    coral: 'bg-white text-accent hover:bg-gray-100',
    cream: 'bg-primary text-white hover:bg-primary/90'
  }[variant];

  return (
    <section className={`${bgClass} py-20 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
           
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-10 font-sans opacity-90 leading-relaxed`}>
            {subtitle}
          </p>
          <Link href={buttonLink}>
            <Button size="lg" className={`${btnClass} rounded-none px-8 py-6 text-base uppercase tracking-widest font-bold group`}>
              {buttonText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
