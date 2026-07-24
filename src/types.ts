export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  targetClients: string[];
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  stats: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  logoText: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ValueItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  duration: string;
  keyOutputs: string[];
}
