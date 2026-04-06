import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Home, PenTool, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    projectType: '',
    city: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Formspree submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ Data
  const faqs = [
    {
      question: "How much does a garage apartment cost?",
      answer: "Costs vary widely based on size, finishes, and whether it's a conversion or a new build. Generally, conversions start around $60k-$80k, while new detached structures start at $120k and go up. We provide a detailed estimate after our initial site visit."
    },
    {
      question: "How long does the process take?",
      answer: "From design to completion, expect 4 to 8 months. Design and permitting typically take 1-3 months, and physical construction takes 3-5 months depending on the project scope."
    },
    {
      question: "Do I need special permits?",
      answer: "Yes, almost all ADU and garage apartment projects require city permits, and often historic or zoning board approvals. We handle this entire process for you."
    },
    {
      question: "Can I finance my project?",
      answer: "Yes! Many of our clients use HELOCs (Home Equity Lines of Credit), cash-out refinances, or specialized renovation loans. We can connect you with preferred lenders."
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  return (
    <div className="bg-background pt-32 pb-24">
      <SEOHead 
        title="Get a Free Quote | Contact Us" 
        description="Start your garage apartment or ADU project in DFW. Get a free quote and consultation from our expert design-build team."
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <BreadcrumbNav items={[{ label: 'Contact Us' }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Form */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">Let's build something great.</h1>
            <p className="text-lg text-muted-foreground font-sans mb-10">
              Fill out the details below to help us understand your vision. Our team will review and reach out within 24 hours to schedule a consultation.
            </p>

            <div className="bg-white p-8 md:p-10 shadow-xl border border-border/50 rounded-none relative overflow-hidden">
              
              {/* Progress Bar */}
              {!isSuccess && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                  <div 
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              )}

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-primary mb-4">Request Received!</h3>
                  <p className="text-muted-foreground font-sans mb-8 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. A member of our design team will review your project details and contact you shortly to discuss the next steps.
                  </p>
                  <div className="bg-card p-6 text-left border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-2 font-serif text-lg">What happens next?</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground font-sans">
                      <li>We'll review your property on satellite mapping</li>
                      <li>We'll call you to discuss high-level feasibility and budget</li>
                      <li>We'll schedule an on-site consultation</li>
                    </ol>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative min-h-[400px]">
                  <AnimatePresence mode="wait" custom={1}>
                    
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="font-serif text-2xl font-bold text-foreground">What type of project are you considering?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { id: 'new', title: 'New Detached ADU', icon: Home },
                            { id: 'conversion', title: 'Garage Conversion', icon: PenTool },
                            { id: 'attached', title: 'Attached Addition', icon: Home },
                            { id: 'custom', title: 'Custom Design', icon: PenTool }
                          ].map((type) => (
                            <div 
                              key={type.id}
                              onClick={() => updateForm('projectType', type.id)}
                              className={`cursor-pointer border-2 p-6 transition-all duration-200 flex flex-col items-center text-center gap-4 hover:border-accent hover:bg-accent/5 ${formData.projectType === type.id ? 'border-accent bg-accent/5' : 'border-border'}`}
                            >
                              <type.icon className={`w-8 h-8 ${formData.projectType === type.id ? 'text-accent' : 'text-primary'}`} />
                              <span className="font-bold font-sans">{type.title}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-end pt-6 mt-6 border-t border-border">
                          <Button 
                            type="button" 
                            onClick={nextStep} 
                            disabled={!formData.projectType}
                            className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 uppercase tracking-widest font-bold"
                          >
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Project Details</h3>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-foreground font-bold">Property City</Label>
                            <Input 
                              id="city" 
                              value={formData.city}
                              onChange={(e) => updateForm('city', e.target.value)}
                              placeholder="e.g. Fort Worth, Dallas..." 
                              className="rounded-none border-border focus-visible:ring-accent"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-foreground font-bold block mb-3">Estimated Budget</Label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              {['Under $75k', '$75k - $125k', '$125k - $200k', '$200k+'].map(budget => (
                                <div 
                                  key={budget}
                                  onClick={() => updateForm('budget', budget)}
                                  className={`cursor-pointer border text-center py-3 text-sm font-medium transition-all ${formData.budget === budget ? 'border-accent bg-accent/10 text-accent' : 'border-border hover:border-primary'}`}
                                >
                                  {budget}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between pt-6 mt-6 border-t border-border">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={prevStep} 
                            className="rounded-none px-8 py-6 font-bold"
                          >
                            Back
                          </Button>
                          <Button 
                            type="button" 
                            onClick={nextStep} 
                            disabled={!formData.city || !formData.budget}
                            className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 uppercase tracking-widest font-bold"
                          >
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Your Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground font-bold">Full Name</Label>
                            <Input 
                              id="name" 
                              required
                              value={formData.name}
                              onChange={(e) => updateForm('name', e.target.value)}
                              className="rounded-none border-border focus-visible:ring-accent"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-foreground font-bold">Phone Number</Label>
                            <Input 
                              id="phone" 
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => updateForm('phone', e.target.value)}
                              className="rounded-none border-border focus-visible:ring-accent"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground font-bold">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => updateForm('email', e.target.value)}
                            className="rounded-none border-border focus-visible:ring-accent"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-foreground font-bold">Additional Details (Optional)</Label>
                          <Textarea 
                            id="message" 
                            rows={4}
                            value={formData.message}
                            onChange={(e) => updateForm('message', e.target.value)}
                            placeholder="Tell us about your property or specific goals..."
                            className="rounded-none border-border focus-visible:ring-accent resize-none"
                          />
                        </div>

                        <div className="flex justify-between pt-6 mt-6 border-t border-border">
                          <Button 
                            type="button" 
                            variant="outline"
                            onClick={prevStep} 
                            disabled={isSubmitting}
                            className="rounded-none px-8 py-6 font-bold"
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                            className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-6 uppercase tracking-widest font-bold"
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit Request'}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Info & FAQs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Info Card */}
            <div className="bg-primary text-white p-8">
              <h3 className="font-serif text-2xl font-bold mb-6 border-b border-white/20 pb-4">Contact Info</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <strong className="block font-sans mb-1 text-white/90">Office Location</strong>
                    <span className="text-white/70">2228 6th Avenue<br />Fort Worth, TX 76110</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <strong className="block font-sans mb-1 text-white/90">Phone</strong>
                    <a href="tel:+18175550100" className="text-white/70 hover:text-accent transition-colors">(817) 555-0100</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <strong className="block font-sans mb-1 text-white/90">Email</strong>
                    <a href="mailto:hello@dfwgarageapartments.com" className="text-white/70 hover:text-accent transition-colors break-all">hello@dfwgarageapartments.com</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Common Questions</h3>
              <FAQAccordion items={faqs} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
