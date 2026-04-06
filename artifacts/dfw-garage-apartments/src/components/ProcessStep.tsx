import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center relative group">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-primary mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
        {icon}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-2 border-white">
          {number}
        </div>
      </div>
      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground font-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
}
