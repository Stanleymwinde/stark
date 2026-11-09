export interface ProjectFeature {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  iconName: string;
}

export interface ProjectPlatform {
  id: string;
  name: string;
  baseCost: number;
  multiplier: number;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceInterest: string;
}
