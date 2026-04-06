import React from 'react';
import { MapPin, Maximize, Bed } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  city: string;
  sqft?: number;
  bedrooms?: number;
  description: string;
}

export function ProjectCard({ imageSrc, title, city, sqft, bedrooms, description }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden rounded-none border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {city}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground font-sans text-sm mb-5 line-clamp-2">
          {description}
        </p>
        
        {(sqft || bedrooms) && (
          <div className="flex items-center gap-4 pt-4 border-t border-border/50 text-sm text-foreground/80 font-sans font-medium">
            {sqft && (
              <div className="flex items-center gap-1.5">
                <Maximize className="w-4 h-4 text-accent" />
                <span>{sqft} Sq Ft</span>
              </div>
            )}
            {bedrooms && (
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-accent" />
                <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
