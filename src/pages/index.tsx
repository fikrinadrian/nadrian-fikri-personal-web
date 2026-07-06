import * as React from 'react';
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
} from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

const highlights = [
  'Transitioned from Frontend to Fullstack Developer with backend and system design ownership.',
  'Built full-stack products with Next.js, React.js, Go, Node.js, and relational databases.',
  'Delivered REST APIs, backend business logic, and database migrations for scalable features.',
  'Improved performance, stability, and maintainability across production applications.',
];

const experiences = [
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

const education = [
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

const skillGroups = [
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

const stats = [
  { value: '4+', label: 'Years shipping web apps' },
  { value: 'Fullstack', label: 'Frontend to backend scope' },
  { value: 'React + Go', label: 'Primary product stack' },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='page-enter relative overflow-hidden'>
        <div className='ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[680px] opacity-50' />

        <section className='relative border-b border-white/10'>
          <div className='layout flex min-h-[calc(100vh-64px)] flex-col justify-center gap-12 py-20 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center'>
            <div className='section-enter max-w-3xl'>
              <p className='text-sm font-medium uppercase tracking-[0.32em] text-emerald-300'>
                Software Engineer
              </p>
              <h1 className='mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl'>
                Ahmad Alfikri Nadrian
              </h1>
              <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg'>
                I build and scale modern web applications across the React
                ecosystem, with full-stack delivery using Next.js, React.js, Go,
                Node.js, and relational databases.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <UnstyledLink
                  href='mailto:ahmad.alfikrinadrian@gmail.com'
                  className='inline-flex items-center justify-center gap-2 rounded border border-emerald-300/70 bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_18px_60px_rgba(52,211,153,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200'
                >
                  <FiMail />
                  Contact me
                </UnstyledLink>
                <UnstyledLink
                  href='https://linkedin.com/in/nadrianfikri'
                  className='inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10'
                >
                  <FiLinkedin />
                  LinkedIn
                </UnstyledLink>
              </div>

              <div className='mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400'>
                <span className='inline-flex items-center gap-2'>
                  <FiMapPin className='text-emerald-300' />
                  Bogor, Indonesia
                </span>
                <span className='hidden h-1 w-1 rounded-full bg-zinc-600 sm:block' />
                <span>Open to high-impact product engineering work</span>
              </div>
            </div>

            <aside
              className='section-enter rounded border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 backdrop-blur'
              style={{ '--enter-delay': '120ms' } as React.CSSProperties}
              aria-label='Profile overview'
            >
              <div className='rounded border border-white/10 bg-[#0d1118] p-6'>
                <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-5'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.28em] text-zinc-500'>
                      Current Focus
                    </p>
                    <p className='mt-2 text-xl font-semibold text-white'>
                      Full-stack product delivery
                    </p>
                  </div>
                  <div className='flex h-14 w-14 items-center justify-center rounded border border-emerald-300/30 bg-emerald-300/10 text-lg font-semibold text-emerald-200'>
                    AN
                  </div>
                </div>

                <div className='mt-6 grid gap-4'>
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className='rounded border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30'
                    >
                      <p className='text-2xl font-semibold text-white'>
                        {stat.value}
                      </p>
                      <p className='mt-1 text-sm text-zinc-400'>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className='relative border-b border-white/10 py-20'>
          <div className='layout grid gap-8 lg:grid-cols-[0.72fr_1.28fr]'>
            <div className='section-enter'>
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-emerald-300'>
                Profile
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-white'>
                Engineering range with product discipline.
              </h2>
            </div>
            <div
              className='section-enter grid gap-4 sm:grid-cols-2'
              style={{ '--enter-delay': '90ms' } as React.CSSProperties}
            >
              {highlights.map((highlight) => (
                <article
                  key={highlight}
                  className='rounded border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.055]'
                >
                  {highlight}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='experience'
          className='scroll-mt-20 border-b border-white/10 py-20'
        >
          <div className='layout'>
            <div className='section-enter max-w-2xl'>
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-emerald-300'>
                Experience
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-white'>
                From field precision to production systems.
              </h2>
            </div>

            <div className='mt-10 grid gap-5'>
              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className='section-enter rounded border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-white/25'
                  style={
                    {
                      '--enter-delay': `${index * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <h3 className='text-xl font-semibold text-white'>
                    {experience.company}
                  </h3>
                  <div className='mt-6 grid gap-6'>
                    {experience.roles.map((role) => (
                      <div
                        key={`${experience.company}-${role.title}`}
                        className='border-l border-emerald-300/30 pl-5'
                      >
                        <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                          <h4 className='text-base font-semibold text-zinc-100'>
                            {role.title}
                          </h4>
                          <p className='text-sm text-zinc-500'>{role.period}</p>
                        </div>
                        <ul className='mt-4 grid gap-2 text-sm leading-7 text-zinc-400'>
                          {role.items.map((item) => (
                            <li key={item}>- {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='skills'
          className='scroll-mt-20 border-b border-white/10 py-20'
        >
          <div className='layout'>
            <div className='section-enter max-w-2xl'>
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-emerald-300'>
                Skills
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-white'>
                Tools and habits used to ship reliable software.
              </h2>
            </div>

            <div className='mt-10 grid gap-4 md:grid-cols-2'>
              {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className='section-enter rounded border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35'
                    style={
                      {
                        '--enter-delay': `${index * 80}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <div className='flex items-center gap-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded border border-emerald-300/25 bg-emerald-300/10 text-emerald-200'>
                        <Icon />
                      </span>
                      <h3 className='text-lg font-semibold text-white'>
                        {group.title}
                      </h3>
                    </div>
                    <div className='mt-5 flex flex-wrap gap-2'>
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className='rounded border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className='border-b border-white/10 py-20'>
          <div className='layout grid gap-6 lg:grid-cols-2'>
            {education.map((item, index) => (
              <article
                key={item.school}
                className='section-enter rounded border border-white/10 bg-white/[0.035] p-6'
                style={
                  { '--enter-delay': `${index * 90}ms` } as React.CSSProperties
                }
              >
                <p className='text-sm text-emerald-300'>{item.period}</p>
                <h2 className='mt-3 text-xl font-semibold text-white'>
                  {item.school}
                </h2>
                <p className='mt-1 text-sm font-medium text-zinc-300'>
                  {item.program}
                </p>
                <p className='mt-4 text-sm leading-7 text-zinc-400'>
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id='contact' className='scroll-mt-20 py-20'>
          <div className='layout'>
            <div className='section-enter rounded border border-white/10 bg-white/[0.04] p-8 sm:p-10'>
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-emerald-300'>
                Contact
              </p>
              <div className='mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end'>
                <div>
                  <h2 className='max-w-2xl text-3xl font-semibold text-white'>
                    Let&apos;s build performant, maintainable web products.
                  </h2>
                  <p className='mt-4 max-w-2xl text-sm leading-7 text-zinc-400'>
                    Available for conversations around frontend, full-stack
                    product engineering, API implementation, and scalable web
                    application delivery.
                  </p>
                </div>
                <div className='flex flex-col gap-3 sm:flex-row'>
                  <UnstyledLink
                    href='mailto:ahmad.alfikrinadrian@gmail.com'
                    className='inline-flex items-center justify-center gap-2 rounded border border-emerald-300/70 bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200'
                  >
                    <FiMail />
                    Email
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://linkedin.com/in/nadrianfikri'
                    className='inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10'
                  >
                    <FiLinkedin />
                    LinkedIn
                  </UnstyledLink>
                  <UnstyledLink
                    href='https://github.com/nadrianfikri'
                    className='inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10'
                  >
                    <FiGithub />
                    GitHub
                  </UnstyledLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className='border-t border-white/10 py-8'>
          <div className='layout flex flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row'>
            <p>&copy; {new Date().getFullYear()} Ahmad Alfikri Nadrian.</p>
            <UnstyledLink
              href='mailto:ahmad.alfikrinadrian@gmail.com'
              className='inline-flex items-center gap-1 text-zinc-400 transition duration-300 hover:text-white'
            >
              ahmad.alfikrinadrian@gmail.com
              <FiArrowUpRight />
            </UnstyledLink>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
