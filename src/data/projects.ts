export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  description: string;
  details: string;
  highlights: string[];
  preview: 'reku' | 'dashboard' | 'aura' | 'moxie';
  url?: string;
};

export const projects: Project[] = [
  {
    id: 'reku-product-development',
    number: '01',
    title: 'Reku.id Product Development',
    client: 'Reku.id',
    category: 'Professional Product Work',
    description:
      'Ongoing product engineering work for an Indonesian crypto, US stocks, and ETF investment platform.',
    details:
      'Contributed to frontend product delivery from 2022 before expanding into full-stack ownership across web applications, APIs, business logic, and relational database changes.',
    highlights: [
      'Frontend: 2022–2025',
      'Full-stack: 2025–Present',
      'Product engineering',
    ],
    preview: 'reku',
    url: 'https://reku.id/',
  },
  {
    id: 'internal-company-dashboard',
    number: '02',
    title: 'Internal Company Dashboard',
    client: 'PT Redision Teknologi Indonesia',
    category: 'Internal Web Application',
    description:
      'A private dashboard interface created for a company’s internal use, with access limited to its team.',
    details:
      'Product screens and live access are intentionally not published because the work contains confidential internal business context.',
    highlights: ['Private client project', 'Restricted access', 'Internal use'],
    preview: 'dashboard',
  },
  {
    id: 'aura-teknologi',
    number: '03',
    title: 'Aura Teknologi',
    client: 'PT Aura Kreasi Teknologi',
    category: 'Company Landing Page',
    description:
      'A company profile for an international communication and authentication solutions provider.',
    details:
      'The landing page introduces the company, presents its communication and authentication services, showcases business partners, and provides a clear contact path.',
    highlights: ['Company profile', 'Service catalogue', 'Partners & contact'],
    preview: 'aura',
    url: 'https://aurateknologi.com/',
  },
  {
    id: 'moxie-lab',
    number: '04',
    title: 'Moxie Lab Digital',
    client: 'Moxie Lab Digital',
    category: 'Agency Landing Page',
    description:
      'A bold landing page for a full-service digital and social media marketing agency.',
    details:
      'The page communicates Moxie’s services, featured clients, Curated campaigns, and contact information through a brand-led, visual experience.',
    highlights: ['Agency profile', 'Services & clients', 'Curated works'],
    preview: 'moxie',
    url: 'https://moxielab.id/',
  },
];
