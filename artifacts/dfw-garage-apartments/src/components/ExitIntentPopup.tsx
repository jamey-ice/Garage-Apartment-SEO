import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const hasFired = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (sessionStorage.getItem('exitIntentShown') || sessionStorage.getItem('formSubmitted')) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasFired.current) {
        hasFired.current = true;
        sessionStorage.setItem('exitIntentShown', '1');
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sessionStorage.setItem('formSubmitted', '1');
    setSubmitted(true);
    const link = document.createElement('a');
    link.href = '/dfw-garage-apartment-guide.pdf';
    link.download = 'DFW-Garage-Apartment-Guide.pdf';
    link.click();
  };

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="hidden md:flex fixed inset-0 z-[100] items-center justify-center">
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative bg-white max-w-lg w-full mx-4 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-primary p-8 text-white">
          <p className="text-accent text-xs uppercase tracking-widest font-bold mb-2">Free Resource</p>
          <h2 className="font-serif font-bold text-2xl leading-tight">
            Before you go — grab our free guide.
          </h2>
        </div>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">You're in.</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Your guide is downloading now. Save it for whenever you're ready to start planning.
              </p>
              <Button
                onClick={handleClose}
                className="mt-6 bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-widest font-bold text-xs px-6"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <p className="font-serif text-lg font-bold text-foreground mb-2">
                "The DFW Garage Apartment Guide"
              </p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                What Every Homeowner Should Know Before Building — zoning basics, real cost ranges, timeline expectations, and the questions to ask before you hire anyone.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="border border-border px-4 py-3 font-sans text-sm focus:outline-none focus:border-accent bg-background w-full"
                />
                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-3 text-xs uppercase tracking-widest font-bold w-full"
                >
                  Download the Free Guide
                </Button>
              </form>
              <p className="text-xs text-muted-foreground font-sans mt-3 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
