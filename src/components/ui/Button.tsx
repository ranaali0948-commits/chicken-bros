import type { ButtonHTMLAttributes } from 'react';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' };
export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const styles = variant === 'primary' ? 'bg-brand-500 hover:bg-brand-600 text-white hover:shadow-brand-500/30' : 'border border-white/30 hover:border-white/60 text-white hover:bg-white/5';
  return <button className={`${styles} font-semibold px-8 py-4 rounded-full transition-all duration-200 ${className}`} {...props} />;
}
