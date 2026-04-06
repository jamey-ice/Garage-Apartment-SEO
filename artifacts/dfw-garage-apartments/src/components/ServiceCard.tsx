import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({ imageSrc, title, description, link }: ServiceCardProps) {
  return (
    <Card className="group overflow-hidden rounded-none border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <CardContent className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground font-sans text-base mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        <Link href={link} className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-accent transition-colors mt-auto">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
