import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building2, ArrowUpDown, Home, Users, CheckCircle2, MapPin, Phone, Mail, Star } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'garage-conversion', title: 'Garage Conversion', icon: Home },
  { id: 'above-garage-apartment', title: 'Above-Garage Apartment', icon: Building2 },
  { id: 'detached-adu', title: 'Detached ADU', icon: ArrowUpDown },
  { id: 'not-sure', title: 'Not Sure Yet', icon: Users },
];

const USE_CASES = [
  'Rental Income',
  'Family / Aging Parents',
  'Guest Space',
  'Home Office',
  'Not Sure Yet',
];

const TIMELINES = [
  'ASAP',
  '1–3 months',
  '3–6 months',
  'Just Exploring',
];

const CITIES = [
  'Fort Worth',
  'Dallas',
  'Arlington',
  'Plano',
  'Frisco',
  'Denton',
  'McKinney',
  'Southlake',
  'Other',
];

const faqs = [
  {
    question: "How much does a garage apartment cost in DFW?",
    answer: "It depends on the type. Garage conversions typically run $40,000–$100,000. Above-garage apartments are $80,000–$200,000. Detached ADUs and guest houses range from $80,000–$300,000+. We give you a realistic budget range after a free site consultation."
  },
  {
    question: "How long does the process take?",
    answer: "Design and permitting take 4–12 weeks depending on the city. Construction takes 3–6 months. Plan on 5–9 months total from first consultation to final walkthrough. We'll give you a specific timeline once we know your city and project type."
  },
  {
    question: "Do you handle the permits?",
    answer: "Yes — completely. Every city in DFW has different rules, and we know them. We prepare and submit all permit applications, respond to city comments, and handle inspections. You don't have to manage any of it."
  },
  {
    question: "Can I finance a garage apartment?",
    answer: "Yes. Many clients use HELOCs, cash-out refinances, or renovation loans. Because DFW Garage Apartments is powered by 6th Ave Homes — which includes a lending arm — we can connect you with financing options designed specifically for this type of project."
  }
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    projectType: '',
    city: '',
    useCase: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const update = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const slideVariants = {
    enter: { x: 40, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -40, opacity: 0 },
  };

  return (
    <div className="bg-background pt-32 pb-24">
      <SEOHead
        title="Schedule a Free Garage Apartment Consultation"
        description="Ready to build a garage apartment in DFW? Tell us about your property and we'll help you figure out the next step. Free consultation — no obligation."
        canonical="/contact"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://dfwgarageapartments.com/contact" }
          ]
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'Contact Us' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column — Form */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">Start Your Garage Apartment Project</h1>
            <p className="text-lg text-muted-foreground font-sans mb-10 leading-relaxed">
              Tell us a little about your property and what you're thinking. We'll reach out to schedule a conversation and help you figure out the next step — no pressure, no obligation.
            </p>

            <div className="bg-white shadow-xl border border-border/50 relative overflow-hidden">

              {/* Progress Bar */}
              {!isSuccess && (
                <div className="h-1 bg-muted">
                  <div
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              )}

              {/* Step labels */}
              {!isSuccess && (
                <div className="flex border-b border-border">
                  {['Project Type', 'Your Details', 'Contact Info'].map((label, i) => (
                    <div key={i} className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider transition-colors ${step === i + 1 ? 'text-accent bg-accent/5' : step > i + 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                      <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] mr-1.5 ${step === i + 1 ? 'bg-accent text-white' : step > i + 1 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>{i + 1}</span>
                      <span className="hidden sm:inline">{label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-8 md:p-10">
                {isSuccess ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <div className="w-20 h-20 bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-4">We're on it.</h3>
                    <p className="text-muted-foreground font-sans mb-8 leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. A member of our team will review your project details and contact you within one business day.
                    </p>
                    <div className="bg-muted p-6 text-left border-l-4 border-accent">
                      <h4 className="font-bold text-foreground mb-2 font-serif text-lg">What happens next?</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground font-sans">
                        <li>We'll review your property on satellite mapping</li>
                        <li>We'll call to discuss high-level feasibility and budget</li>
                        <li>We'll schedule your free on-site consultation</li>
                      </ol>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative min-h-[380px]">
                    <AnimatePresence mode="wait">

                      {/* STEP 1: Project Type */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-2xl font-bold text-foreground">What kind of project are you thinking about?</h3>
                          <p className="text-muted-foreground text-sm font-sans">Select one to get started — no commitment required.</p>
                          <div className="grid grid-cols-2 gap-3">
                            {PROJECT_TYPES.map((type) => (
                              <button
                                key={type.id}
                                type="button"
                                onClick={() => update('projectType', type.id)}
                                className={`border-2 p-5 transition-all duration-200 flex flex-col items-center text-center gap-3 hover:border-accent hover:bg-accent/5 focus:outline-none ${formData.projectType === type.id ? 'border-accent bg-accent/5' : 'border-border'}`}
                                data-testid={`btn-type-${type.id}`}
                              >
                                <type.icon className={`w-7 h-7 ${formData.projectType === type.id ? 'text-accent' : 'text-primary'}`} />
                                <span className="font-bold font-sans text-sm leading-tight">{type.title}</span>
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-end pt-4">
                            <Button
                              type="button"
                              onClick={() => setStep(2)}
                              disabled={!formData.projectType}
                              className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-5 text-xs uppercase tracking-widest font-bold"
                              data-testid="btn-step1-next"
                            >
                              Next Step →
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2: Property Details */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-2xl font-bold text-foreground">Tell us a little more</h3>

                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-foreground font-bold text-sm">What city is your property in?</Label>
                            <select
                              id="city"
                              value={formData.city}
                              onChange={(e) => update('city', e.target.value)}
                              className="w-full border border-border px-4 py-3 text-sm font-sans bg-background focus:outline-none focus:border-accent appearance-none"
                              data-testid="select-city"
                            >
                              <option value="">Select your city…</option>
                              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-foreground font-bold text-sm">What do you want to use the space for?</Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {USE_CASES.map(uc => (
                                <button
                                  key={uc}
                                  type="button"
                                  onClick={() => update('useCase', uc)}
                                  className={`text-left border px-4 py-3 text-sm font-medium transition-all font-sans ${formData.useCase === uc ? 'border-accent bg-accent/10 text-accent' : 'border-border hover:border-primary'}`}
                                  data-testid={`btn-usecase-${uc.toLowerCase().replace(/\//g, '-').replace(/\s/g, '-')}`}
                                >
                                  {uc}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-foreground font-bold text-sm">When are you hoping to get started?</Label>
                            <div className="grid grid-cols-2 gap-2">
                              {TIMELINES.map(t => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => update('timeline', t)}
                                  className={`border px-4 py-3 text-sm font-medium transition-all font-sans text-center ${formData.timeline === t ? 'border-accent bg-accent/10 text-accent' : 'border-border hover:border-primary'}`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" onClick={() => setStep(1)} className="rounded-none px-6 py-5 text-xs uppercase tracking-widest font-bold">← Back</Button>
                            <Button
                              type="button"
                              onClick={() => setStep(3)}
                              disabled={!formData.city || !formData.useCase || !formData.timeline}
                              className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-5 text-xs uppercase tracking-widest font-bold"
                              data-testid="btn-step2-next"
                            >
                              Next Step →
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3: Contact Info */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <h3 className="font-serif text-2xl font-bold text-foreground">Where should we send your project info?</h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <Label htmlFor="name" className="font-bold text-sm">Full Name *</Label>
                              <Input id="name" required value={formData.name} onChange={(e) => update('name', e.target.value)} className="rounded-none border-border focus-visible:ring-accent" />
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor="phone" className="font-bold text-sm">Phone Number *</Label>
                              <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => update('phone', e.target.value)} className="rounded-none border-border focus-visible:ring-accent" />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="email" className="font-bold text-sm">Email Address *</Label>
                            <Input id="email" type="email" required value={formData.email} onChange={(e) => update('email', e.target.value)} className="rounded-none border-border focus-visible:ring-accent" />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="address" className="font-bold text-sm">Property Address <span className="text-muted-foreground font-normal">(optional)</span></Label>
                            <Input id="address" value={formData.address} onChange={(e) => update('address', e.target.value)} placeholder="e.g. 1234 Oak St, Fort Worth, TX" className="rounded-none border-border focus-visible:ring-accent" />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="message" className="font-bold text-sm">Anything else you want us to know? <span className="text-muted-foreground font-normal">(optional)</span></Label>
                            <Textarea id="message" rows={3} value={formData.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us anything specific about your property or goals…" className="rounded-none border-border focus-visible:ring-accent resize-none" />
                          </div>

                          <p className="text-xs text-muted-foreground font-sans">Or call us at <a href="tel:+18176319803" className="text-primary font-bold hover:underline">(817) 631-9803</a>. We're based in Fort Worth and serve the entire DFW metro.</p>

                          <div className="flex justify-between pt-2">
                            <Button type="button" variant="outline" onClick={() => setStep(2)} disabled={isSubmitting} className="rounded-none px-6 py-5 text-xs uppercase tracking-widest font-bold">← Back</Button>
                            <Button
                              type="submit"
                              disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                              className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-5 text-xs uppercase tracking-widest font-bold"
                              data-testid="btn-submit"
                            >
                              {isSubmitting ? 'Sending…' : 'Get My Free Consultation'}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-10">

            {/* Contact Info */}
            <div className="bg-primary text-white p-8">
              <h3 className="font-serif text-xl font-bold mb-6 border-b border-white/20 pb-4">Contact Info</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-sans text-sm mb-0.5">Office Location</strong>
                    <span className="text-white/70 text-sm">2228 6th Avenue<br />Fort Worth, TX 76110</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-sans text-sm mb-0.5">Phone</strong>
                    <a href="tel:+18176319803" className="text-white/70 text-sm hover:text-accent transition-colors">(817) 631-9803</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-sans text-sm mb-0.5">Email</strong>
                    <a href="mailto:info@6thavehomes.com" className="text-white/70 text-sm hover:text-accent transition-colors break-all">info@6thavehomes.com</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Proof */}
            <div className="bg-card p-6 border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                <span className="font-bold text-sm text-foreground ml-1">4.9</span>
                <span className="text-muted-foreground text-sm">· 120+ Google Reviews</span>
              </div>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed italic">
                "They handled everything — permits, zoning, construction. We just showed up for the final walkthrough. Truly one team from start to finish."
              </p>
              <p className="text-xs font-bold text-foreground mt-3">— Marcus H., Fort Worth</p>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-5">Common Questions</h3>
              <FAQAccordion items={faqs} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
