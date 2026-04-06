import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  rating?: number;
}

export function TestimonialCard({ quote, name, city, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="rounded-none border-0 bg-white shadow-md p-8 h-full flex flex-col">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <CardContent className="p-0 flex-grow flex flex-col">
        <blockquote className="font-serif text-xl italic text-foreground mb-8 flex-grow leading-relaxed relative">
          <span className="text-6xl text-muted absolute -top-4 -left-4 -z-10 opacity-50 font-serif">"</span>
          "{quote}"
        </blockquote>
        <div className="mt-auto border-t border-border/50 pt-4">
          <p className="font-bold font-sans text-foreground text-lg">{name}</p>
          <p className="text-accent font-sans text-sm uppercase tracking-wider font-semibold">{city}, TX</p>
        </div>
      </CardContent>
    </Card>
  );
}
