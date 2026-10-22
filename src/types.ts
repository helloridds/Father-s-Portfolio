export type NavTab = 
  | 'about'
  | 'expertise-and-paperwork'
  | 'documentation-services'
  | 'track-record'
  | 'client-reviews'
  | 'contact-and-chamber'
  | 'schedule-consultation';

export interface InstrumentItem {
  id: string;
  category: 'real-estate' | 'succession' | 'corporate' | 'notarial';
  categoryLabel: string;
  badge: string;
  badgeType: 'primary' | 'secondary' | 'neutral';
  turnaround: string;
  title: string;
  description: string;
  keywords: string;
  clientRequirements?: string[];
  advocateSafeguards?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  domain: string;
  quote: string;
  rating: number;
}

export interface ChamberLocation {
  name: string;
  address: string;
  hours: string;
  badge: string;
  accessNotes: string[];
}
