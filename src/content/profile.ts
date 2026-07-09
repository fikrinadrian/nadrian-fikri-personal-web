import type { IconType } from 'react-icons';
import {
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiServer,
} from 'react-icons/fi';

export type NavigationItem = {
  href: `#${string}`;
  label: string;
};

export type Profile = {
  name: string;
  displayName: string;
  initials: string;
  role: string;
  email: string;
  location: string;
  availability: string;
  focus: string;
  summary: string;
};

export type ProfileAction = {
  label: string;
  href: string;
  icon: IconType;
  variant: 'primary' | 'secondary';
};

export type StatItem = {
  value: string;
  label: string;
};

export type ExperienceRole = {
  title: string;
  period: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  roles: ExperienceRole[];
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  icon: IconType;
  skills: string[];
};

export type ProjectCaseStudy = {
  title: string;
  context: string;
  role: string;
  stack: string[];
  highlights: string[];
  result: string;
  href?: string;
};

export const profile: Profile = {
  name: 'Ahmad Alfikri Nadrian',
  displayName: 'Fikri Nadrian',
  initials: 'AN',
  role: 'Software Engineer',
  email: 'ahmad.alfikrinadrian@gmail.com',
  location: 'Bogor, Indonesia',
  availability: 'Open to high-impact product engineering work',
  focus: 'Full-stack product delivery',
  summary:
    'I build and scale modern web applications across the React ecosystem, with full-stack delivery using Next.js, React.js, Go, Node.js, and relational databases.',
};

export const navigationItems: NavigationItem[] = [
  { href: '#profile', label: 'Profile' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const heroActions: ProfileAction[] = [
  {
    label: 'Contact me',
    href: `mailto:${profile.email}`,
    icon: FiMail,
    variant: 'primary',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nadrianfikri',
    icon: FiLinkedin,
    variant: 'secondary',
  },
];

export const contactActions: ProfileAction[] = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: FiMail,
    variant: 'primary',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nadrianfikri',
    icon: FiLinkedin,
    variant: 'secondary',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nadrianfikri',
    icon: FiGithub,
    variant: 'secondary',
  },
];

export const highlights: string[] = [
  'Transitioned from Frontend to Fullstack Developer with backend and system design ownership.',
  'Built full-stack products with Next.js, React.js, Go, Node.js, and relational databases.',
  'Delivered REST APIs, backend business logic, and database migrations for scalable features.',
  'Improved performance, stability, and maintainability across production applications.',
];

export const stats: StatItem[] = [
  { value: '4+', label: 'Years shipping web apps' },
  { value: 'Fullstack', label: 'Frontend to backend scope' },
  { value: 'React + Go', label: 'Primary product stack' },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Reku.id',
    roles: [
      {
        title: 'Software Developer (Full Stack)',
        period: 'Dec 2025 - Present',
        items: [
          'Built and maintained full-stack applications using Next.js, Node.js, Go, and relational databases.',
          'Developed RESTful APIs, implemented business logic, and managed database schema migrations.',
          'Collaborated with Product, Design, and QA to deliver maintainable end-to-end product features.',
        ],
      },
      {
        title: 'Software Developer (Frontend)',
        period: 'Jan 2022 - Dec 2025',
        items: [
          'Developed frontend features using Next.js, React.js, and modern frontend technologies.',
          'Translated UI/UX designs into responsive, reusable components.',
          'Optimized performance, fixed production issues, and contributed to sprint planning, reviews, and releases.',
        ],
      },
    ],
  },
  {
    company: 'Surveying Projects',
    roles: [
      {
        title: 'Land and Cadastral Surveyor',
        period: 'Aug 2017 - Sep 2020',
        items: [
          'Worked with PT Alpha Focus Indonesia, PT Sarana Geospasial Terpadu, KJSKB Akhmad Syarbini dan Rekan, PT Marackeh Consultant, and PT Samudera Pondasi Persada.',
          'Handled geothermal, commercial construction, cadastral, documentation, benchmark, drilling coordinate, and AutoCAD drafting work.',
        ],
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: 'DumbWays Indonesia Teknologi',
    program: 'Full Stack Developer Bootcamp',
    period: 'Sep 2021 - Dec 2021',
    detail:
      'Completed an intensive JavaScript bootcamp covering full-stack web apps, REST APIs, databases, Git, debugging, and collaborative development.',
  },
  {
    school: 'SMK Adi Sanggoro Bogor',
    program: 'Mining and Geology',
    period: 'Jun 2014 - Jun 2017',
    detail:
      'Built the technical foundation that led into field surveying and later software engineering.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: FiCode,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Responsive UI'],
  },
  {
    title: 'Backend',
    icon: FiServer,
    skills: ['Node.js', 'Go (Golang)', 'REST APIs', 'Business Logic'],
  },
  {
    title: 'Data and Delivery',
    icon: FiDatabase,
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Git', 'CI/CD', 'Docker'],
  },
  {
    title: 'Working Style',
    icon: FiBriefcase,
    skills: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Adaptability',
      'Continuous Learning',
    ],
  },
];

export const projects: ProjectCaseStudy[] = [];
