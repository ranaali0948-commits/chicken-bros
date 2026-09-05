import type { ButtonHTMLAttributes } from 'react';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' };
export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const styles = variant === 'primary' ? 'bg-primary hover:bg-primary-hover text-heading' : 'border border-border bg-surface hover:border-accent text-heading';
  return <button className={`${styles} font-semibold px-8 py-4 rounded-full transition-all duration-200 ${className}`} {...props} />;
}
