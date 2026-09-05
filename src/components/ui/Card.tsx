import type { HTMLAttributes } from 'react';
export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={`bg-surface border border-border rounded-2xl ${className}`} {...props} />; }
