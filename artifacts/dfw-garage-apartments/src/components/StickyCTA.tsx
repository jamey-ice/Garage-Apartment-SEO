import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // Don't show on contact page
    if (location === '/contact') {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-3 flex md:hidden items-center gap-3 z-40 transform transition-transform duration-300">
      <Button asChild variant="outline" className="flex-1 rounded-none border-primary text-primary hover:bg-primary/5">
        <a href="tel:+18175550100">
          <Phone className="w-4 h-4 mr-2" />
          Call
        </a>
      </Button>
      <Button asChild className="flex-1 rounded-none bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider text-xs">
        <Link href="/contact">
          Get Quote
        </Link>
      </Button>
    </div>
  );
}
