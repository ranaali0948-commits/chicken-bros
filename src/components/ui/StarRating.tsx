import { Star } from 'lucide-react';
export function StarRating({ count }: { count: number }) { return <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className={i < count ? 'fill-brand-500 text-brand-500' : 'text-charcoal-300'} />)}</div>; }
