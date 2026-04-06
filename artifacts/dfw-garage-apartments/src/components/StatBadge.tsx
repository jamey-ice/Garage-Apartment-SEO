import React from 'react';

interface StatBadgeProps {
  number: string;
  label: string;
  variant?: 'light' | 'dark';
}

export function StatBadge({ number, label, variant = 'light' }: StatBadgeProps) {
  const textColor = variant === 'light' ? 'text-primary' : 'text-white';
  const labelColor = variant === 'light' ? 'text-muted-foreground' : 'text-white/70';

  return (
    <div className="text-center">
      <div className={`font-serif text-5xl md:text-6xl font-bold ${textColor} mb-2`}>
        {number}
      </div>
      <div className={`font-sans text-sm uppercase tracking-widest font-bold ${labelColor}`}>
        {label}
      </div>
    </div>
  );
}
