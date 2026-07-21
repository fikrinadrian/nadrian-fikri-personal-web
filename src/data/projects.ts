export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  description: string;
  details: string;
  highlights: string[];
  preview: 'dashboard' | 'aura' | 'moxie';
  url?: string;
};

export const projects: Project[] = [
  {
    id: 'internal-company-dashboard',
    number: '01',
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
    number: '02',
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
    number: '03',
    title: 'Moxie Lab Digital',
    client: 'Moxie Lab Digital',
    category: 'Agency Landing Page',
    description:
      'A bold landing page for a full-service digital and social media marketing agency.',
    details:
      'The page communicates Moxie’s services, featured clients, selected campaigns, and contact information through a brand-led, visual experience.',
    highlights: ['Agency profile', 'Services & clients', 'Selected works'],
    preview: 'moxie',
    url: 'https://moxielab.id/',
  },
];
