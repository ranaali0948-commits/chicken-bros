export interface Review { id: number; name: string; rating: number; text: string; date: string; source: string; isSample?: boolean }
// Add only verified customer reviews here. The UI shows a neutral empty state while this array is empty.
export const reviews: Review[] = [];
