import { Star } from 'lucide-react';
export function StarRating({ count }: { count: number }) { return <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className={i < count ? 'fill-primary text-primary' : 'text-border'} />)}</div>; }
