export type ServiceCategory = 'brows' | 'skin' | 'body';

export interface Service {
  title: string;
  subtitle: string;
  category: ServiceCategory;
  description: string;
  details: {
    title: string;
    items: string[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  image: string;
  ctaLabel: string;
}
