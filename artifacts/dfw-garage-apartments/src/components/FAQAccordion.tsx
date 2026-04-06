import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 py-2">
          <AccordionTrigger className="text-left font-serif text-xl hover:text-accent hover:no-underline transition-colors data-[state=open]:text-accent">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground font-sans text-base leading-relaxed pb-6 pt-2 pr-8">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
