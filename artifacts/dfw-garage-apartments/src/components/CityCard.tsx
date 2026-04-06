import React from 'react';
import { Link } from 'wouter';
import { MapPin, ArrowRight } from 'lucide-react';

interface CityCardProps {
  cityName: string;
  imageSrc: string;
  link: string;
  stats?: { label: string; value: string }[];
}

export function CityCard({ cityName, imageSrc, link, stats }: CityCardProps) {
  return (
    <Link href={link} className="group block relative overflow-hidden h-80 rounded-none bg-primary">
      <img 
        src={imageSrc} 
        alt={`Garage apartments in ${cityName}`}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center gap-2 text-accent mb-2">
          <MapPin className="w-5 h-5" />
          <span className="font-sans font-bold tracking-widest uppercase text-sm text-white">Texas</span>
        </div>
        <h3 className="font-serif text-3xl font-bold text-white mb-2">{cityName}</h3>
        
        {stats && (
          <div className="flex gap-4 mt-4 mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {stats.map((stat, i) => (
              <div key={i} className="text-white">
                <div className="font-bold text-lg">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex items-center text-accent font-bold uppercase tracking-wider text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
          View Projects <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
