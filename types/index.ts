export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating?: number;
  photo?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Credential {
  id: string;
  label: string;
}

export interface Differential {
  id: string;
  icon: string;
  title: string;
}

export interface Formation {
  id: string;
  text: string;
}
