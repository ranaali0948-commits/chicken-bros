import type { HTMLAttributes } from 'react';
export function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={`max-w-7xl mx-auto ${className}`} {...props} />; }
