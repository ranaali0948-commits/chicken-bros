import type { HTMLAttributes } from 'react';
export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={`bg-charcoal-800 border border-charcoal-700 rounded-2xl ${className}`} {...props} />; }
