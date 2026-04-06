import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const SERVICES = [
  { label: 'Garage Conversions', href: '/services/garage-conversions' },
  { label: 'Above-Garage Apartments', href: '/services/above-garage-apartments' },
  { label: 'Detached ADUs', href: '/services/detached-adus' },
  { label: 'Guest Houses', href: '/services/guest-houses' },
];

const AREAS = [
  { label: 'Fort Worth', href: '/areas/fort-worth' },
  { label: 'Dallas', href: '/areas/dallas' },
  { label: 'Arlington', href: '/areas/arlington' },
  { label: 'Plano', href: '/areas/plano' },
  { label: 'Frisco', href: '/areas/frisco' },
  { label: 'Denton', href: '/areas/denton' },
  { label: 'McKinney', href: '/areas/mckinney' },
  { label: 'Southlake', href: '/areas/southlake' },
];

const RESOURCES = [
  { label: 'Cost Guide', href: '/resources/cost-guide' },
  { label: 'Zoning Guide', href: '/resources/zoning-guide' },
  { label: 'Texas ADU Laws', href: '/resources/texas-adu-laws' },
  { label: 'Financing Options', href: '/resources/financing-options' },
  { label: 'All Resources', href: '/resources' },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 mt-0 w-56 bg-white text-foreground shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-accent transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
      <div className="py-2 flex flex-col">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="px-4 py-2.5 hover:bg-muted hover:text-accent transition-colors text-sm font-medium">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function NavBar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomepage = location === '/';
  const isTransparent = isHomepage && !scrolled && !mobileMenuOpen;

  const logoSrc = isTransparent ? '/logos/logo-coral-navy.png' : '/logos/logo-white.png';
  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isTransparent ? 'bg-transparent py-5' : 'bg-primary shadow-md py-3'
  }`;
  const linkClass = `font-medium hover:text-accent transition-colors text-sm uppercase tracking-wide ${
    isTransparent ? 'text-primary' : 'text-white'
  }`;

  return (
    <nav className={navClass} data-testid="navbar">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <img src={logoSrc} alt="DFW Garage Apartments" className="h-10 md:h-12 w-auto object-contain" />
          <div className="hidden sm:flex flex-col">
            <span className={`text-[9px] uppercase tracking-widest font-bold ${isTransparent ? 'text-primary/70' : 'text-white/60'}`}>Powered by</span>
            <span className={`text-xs font-semibold ${isTransparent ? 'text-primary' : 'text-white'}`}>6th Ave Homes</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link href="/" className={`${linkClass} ${location === '/' ? 'text-accent' : ''}`}>Home</Link>

          <div className="relative group">
            <Link href="/services" className={`${linkClass} flex items-center gap-1 py-2 ${location.startsWith('/services') ? 'text-accent' : ''}`}>
              Services <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <DropdownMenu items={SERVICES} />
          </div>

          <div className="relative group">
            <Link href="/areas" className={`${linkClass} flex items-center gap-1 py-2 ${location.startsWith('/areas') ? 'text-accent' : ''}`}>
              Areas We Serve <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <DropdownMenu items={AREAS} />
          </div>

          <div className="relative group">
            <Link href="/resources" className={`${linkClass} flex items-center gap-1 py-2 ${location.startsWith('/resources') ? 'text-accent' : ''}`}>
              Resources <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <DropdownMenu items={RESOURCES} />
          </div>

          <Link href="/about" className={`${linkClass} ${location === '/about' ? 'text-accent' : ''}`}>About</Link>

          <Link href="/contact" className={`${linkClass} ${location === '/contact' ? 'text-accent' : ''}`}>Contact</Link>

          <Link href="/contact">
            <Button
              className={`${isTransparent ? 'bg-primary text-white hover:bg-primary/90' : 'bg-accent text-white hover:bg-accent/90'} rounded-none px-6 py-4 text-xs uppercase tracking-widest font-bold`}
              data-testid="btn-nav-cta"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen
            ? <X className="w-6 h-6 text-white" />
            : <Menu className={`w-6 h-6 ${isTransparent ? 'text-primary' : 'text-white'}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-primary z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-1 text-white">
              <Link href="/" className="py-4 border-b border-white/10 font-medium text-lg">Home</Link>

              <button
                className="py-4 border-b border-white/10 font-medium text-lg flex justify-between items-center w-full text-left"
                onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'services' && (
                <div className="pl-4 pb-2">
                  {SERVICES.map(s => <Link key={s.href} href={s.href} className="block py-2 text-white/80 hover:text-white text-sm">{s.label}</Link>)}
                </div>
              )}

              <button
                className="py-4 border-b border-white/10 font-medium text-lg flex justify-between items-center w-full text-left"
                onClick={() => setMobileExpanded(mobileExpanded === 'areas' ? null : 'areas')}
              >
                Areas We Serve <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'areas' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'areas' && (
                <div className="pl-4 pb-2 grid grid-cols-2 gap-1">
                  {AREAS.map(a => <Link key={a.href} href={a.href} className="block py-2 text-white/80 hover:text-white text-sm">{a.label}</Link>)}
                </div>
              )}

              <button
                className="py-4 border-b border-white/10 font-medium text-lg flex justify-between items-center w-full text-left"
                onClick={() => setMobileExpanded(mobileExpanded === 'resources' ? null : 'resources')}
              >
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'resources' && (
                <div className="pl-4 pb-2">
                  {RESOURCES.map(r => <Link key={r.href} href={r.href} className="block py-2 text-white/80 hover:text-white text-sm">{r.label}</Link>)}
                </div>
              )}

              <Link href="/about" className="py-4 border-b border-white/10 font-medium text-lg">About</Link>
              <Link href="/contact" className="py-4 border-b border-white/10 font-medium text-lg">Contact</Link>
            </div>
            <div className="mt-auto pt-8">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-none py-6 text-sm uppercase tracking-widest font-bold">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
