import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

export function NavBar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = location === '/';
  const isTransparent = isHomepage && !scrolled && !mobileMenuOpen;
  
  const logoSrc = isTransparent 
    ? '/logos/logo-coral-navy.png' 
    : '/logos/logo-white.png';

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    isTransparent 
      ? 'bg-transparent text-navy py-4' 
      : 'bg-primary text-white py-3 shadow-md'
  }`;

  return (
    <nav className={navClass} data-testid="navbar">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <img src={logoSrc} alt="DFW Garage Apartments Logo" className="h-10 md:h-12 w-auto object-contain" />
          <div className="flex flex-col hidden sm:flex">
            <span className={`text-[10px] uppercase tracking-widest font-bold ${isTransparent ? 'text-primary' : 'text-white/80'}`}>Powered by</span>
            <span className={`text-xs font-semibold ${isTransparent ? 'text-primary' : 'text-white'}`}>6th Ave Homes</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`font-medium hover:text-accent transition-colors ${location === '/' ? 'text-accent' : ''}`}>Home</Link>
          
          <div className="relative group">
            <Link href="/services" className={`flex items-center gap-1 font-medium hover:text-accent transition-colors py-2 ${location.startsWith('/services') ? 'text-accent' : ''}`}>
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 mt-0 w-64 bg-white text-foreground shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-accent transform origin-top translate-y-2 group-hover:translate-y-0">
              <div className="py-2 flex flex-col">
                <Link href="/services" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">New Garage Apartments</Link>
                <Link href="/services" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Garage Conversions</Link>
                <Link href="/services" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Attached ADUs</Link>
                <Link href="/services" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Custom ADU Design</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/areas" className={`flex items-center gap-1 font-medium hover:text-accent transition-colors py-2 ${location.startsWith('/areas') ? 'text-accent' : ''}`}>
              Areas <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-white text-foreground shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-accent transform origin-top translate-y-2 group-hover:translate-y-0">
              <div className="py-2 grid grid-cols-1 gap-0">
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Fort Worth</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Dallas</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Weatherford</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Burleson</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Cleburne</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Granbury</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Aledo</Link>
                <Link href="/areas" className="px-4 py-2 hover:bg-muted hover:text-accent transition-colors">Benbrook</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className={`font-medium hover:text-accent transition-colors ${location === '/about' ? 'text-accent' : ''}`}>About</Link>
          
          <Link href="/contact">
            <Button className={`${isTransparent ? 'bg-primary text-white hover:bg-primary/90' : 'bg-accent text-white hover:bg-accent/90'} rounded-none px-6 py-5 uppercase tracking-wide font-bold`} data-testid="btn-nav-cta">
              Get a Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 z-50 text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-primary z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-white text-xl font-serif">
              <Link href="/" className="border-b border-white/10 pb-4">Home</Link>
              <Link href="/services" className="border-b border-white/10 pb-4">Services</Link>
              <Link href="/areas" className="border-b border-white/10 pb-4">Service Areas</Link>
              <Link href="/about" className="border-b border-white/10 pb-4">About Us</Link>
              <Link href="/contact" className="border-b border-white/10 pb-4">Contact</Link>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-none py-6 text-lg uppercase tracking-wide font-bold">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
