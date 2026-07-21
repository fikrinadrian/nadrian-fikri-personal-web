import { motion, useReducedMotion } from 'framer-motion';
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

const MotionUnstyledLink = motion.create(UnstyledLink);

const enterTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

const viewport = { once: true, amount: 0.2 };

type SquareBackground = {
  size: number;
  left: string;
  top: string;
  rotate: number;
  opacity: number;
  filled?: boolean;
};

const squareBackgrounds = [
  [
    { size: 96, left: '72%', top: '16%', rotate: 8, opacity: 0.16 },
    {
      size: 34,
      left: '61%',
      top: '58%',
      rotate: -14,
      opacity: 0.34,
      filled: true,
    },
    { size: 18, left: '91%', top: '72%', rotate: 24, opacity: 0.42 },
  ],
  [
    { size: 54, left: '6%', top: '22%', rotate: -10, opacity: 0.2 },
    {
      size: 22,
      left: '20%',
      top: '66%',
      rotate: 18,
      opacity: 0.36,
      filled: true,
    },
    { size: 72, left: '86%', top: '38%', rotate: 5, opacity: 0.14 },
  ],
  [
    {
      size: 28,
      left: '10%',
      top: '18%',
      rotate: 12,
      opacity: 0.34,
      filled: true,
    },
    { size: 86, left: '76%', top: '14%', rotate: -18, opacity: 0.16 },
    { size: 42, left: '88%', top: '68%', rotate: 10, opacity: 0.22 },
  ],
  [
    { size: 80, left: '8%', top: '64%', rotate: 9, opacity: 0.15 },
    {
      size: 24,
      left: '69%',
      top: '18%',
      rotate: -16,
      opacity: 0.38,
      filled: true,
    },
    { size: 36, left: '82%', top: '54%', rotate: 28, opacity: 0.25 },
  ],
  [
    { size: 64, left: '14%', top: '22%', rotate: -8, opacity: 0.18 },
    { size: 30, left: '48%', top: '68%', rotate: 15, opacity: 0.3 },
    {
      size: 20,
      left: '90%',
      top: '26%',
      rotate: -24,
      opacity: 0.4,
      filled: true,
    },
  ],
  [
    {
      size: 26,
      left: '8%',
      top: '30%',
      rotate: 24,
      opacity: 0.34,
      filled: true,
    },
    { size: 92, left: '78%', top: '18%', rotate: -8, opacity: 0.16 },
    { size: 44, left: '62%', top: '70%', rotate: 14, opacity: 0.22 },
  ],
] satisfies SquareBackground[][];

function getPageMotion(shouldReduceMotion: boolean) {
  return {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: enterTransition,
  };
}

function getRevealMotion(
  shouldReduceMotion: boolean,
  delay = 0,
  distance = 24,
) {
  return {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { ...enterTransition, delay },
  };
}

function SectionSquareBackground({
  variant,
  shouldReduceMotion,
}: {
  variant: number;
  shouldReduceMotion: boolean;
}) {
  const squares = squareBackgrounds[variant % squareBackgrounds.length];

  return (
    <div
      className='pointer-events-none absolute inset-0 overflow-hidden'
      aria-hidden='true'
    >
      {squares.map((square, index) => (
        <motion.span
          key={`${square.left}-${square.top}-${square.size}`}
          className={`absolute rounded-xs border ${
            square.filled
              ? 'border-primary-300/15 bg-primary-300/10'
              : 'border-primary-300/25 bg-white/1.5'
          }`}
          style={{
            width: square.size,
            height: square.size,
            left: square.left,
            top: square.top,
          }}
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, rotate: square.rotate - 10, scale: 0.86 }
          }
          whileInView={{
            opacity: square.opacity,
            rotate: square.rotate,
            scale: 1,
          }}
          viewport={viewport}
          transition={{
            duration: 0.8,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const liftSmall = shouldReduceMotion ? undefined : { y: -2 };
  const liftMedium = shouldReduceMotion ? undefined : { y: -4 };
  const press = shouldReduceMotion ? undefined : { scale: 0.98 };

  return (
    <Layout>
      <Seo />

      <motion.main
        className='relative overflow-hidden'
        {...getPageMotion(Boolean(shouldReduceMotion))}
      >
        <div className='ambient-grid pointer-events-none absolute inset-x-0 top-0 h-170 opacity-50' />

        <section className='relative overflow-hidden border-b border-white/10'>
          <SectionSquareBackground
            variant={0}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
          />
          <div className='layout relative z-10 flex min-h-[calc(100vh-64px)] flex-col justify-center gap-12 py-20 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center'>
            <motion.div
              className='max-w-3xl'
              {...getRevealMotion(Boolean(shouldReduceMotion))}
            >
              <p className='text-sm font-medium uppercase tracking-[0.32em] text-primary-300'>
                Software Engineer
              </p>
              <h1 className='mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl'>
                Fikri Nadrian
              </h1>
              <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg'>
                I build and scale modern web applications across the React
                ecosystem, with full-stack delivery using Next.js, React.js, Go,
                Node.js, and relational databases.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <MotionUnstyledLink
                  href='mailto:fikrinadrian@gmail.com'
                  className='inline-flex items-center justify-center gap-2 rounded border border-primary-300/70 bg-primary-300 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-2xl shadow-primary-400/20 hover:bg-primary-200'
                  whileHover={liftSmall}
                  whileTap={press}
                >
                  <FiMail />
                  Contact me
                </MotionUnstyledLink>
                <MotionUnstyledLink
                  href='https://linkedin.com/in/fikrinadrian'
                  className='inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/35 hover:bg-white/10'
                  whileHover={liftSmall}
                  whileTap={press}
                >
                  <FiLinkedin />
                  LinkedIn
                </MotionUnstyledLink>
              </div>

              <div className='mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400'>
                <span className='inline-flex items-center gap-2'>
                  <FiMapPin className='text-primary-300' />
                  Bogor, Indonesia
                </span>
                <span className='hidden h-1 w-1 rounded-full bg-zinc-600 sm:block' />
                <span>Open to high-impact product engineering work</span>
              </div>
            </motion.div>

            <motion.aside
              className='rounded border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 backdrop-blur'
              {...getRevealMotion(Boolean(shouldReduceMotion), 0.12)}
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
                  <div className='flex h-14 w-14 items-center justify-center rounded border border-primary-300/30 bg-primary-300/10 text-lg font-semibold text-primary-200'>
                    AN
                  </div>
                </div>

                <div className='mt-6 grid gap-4'>
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      className='rounded border border-white/10 bg-white/3 p-4 hover:border-primary-300/30'
                      whileHover={liftSmall}
                    >
                      <p className='text-2xl font-semibold text-white'>
                        {stat.value}
                      </p>
                      <p className='mt-1 text-sm text-zinc-400'>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className='relative overflow-hidden border-b border-white/10 py-20'>
          <SectionSquareBackground
            variant={1}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
          />
          <div className='layout relative z-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]'>
            <motion.div {...getRevealMotion(Boolean(shouldReduceMotion))}>
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
                Profile
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-white'>
                Engineering range with product discipline.
              </h2>
            </motion.div>
            <motion.div
              className='grid gap-4 sm:grid-cols-2'
              {...getRevealMotion(Boolean(shouldReduceMotion), 0.09)}
            >
              {highlights.map((highlight) => (
                <motion.article
                  key={highlight}
                  className='rounded border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-zinc-300 hover:border-primary-300/35 hover:bg-white/5.5'
                  whileHover={liftMedium}
                >
                  {highlight}
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id='experience'
          className='relative scroll-mt-20 overflow-hidden border-b border-white/10 py-20'
        >
          <SectionSquareBackground
            variant={2}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
          />
          <div className='layout relative z-10'>
            <motion.div
              className='max-w-2xl'
              {...getRevealMotion(Boolean(shouldReduceMotion))}
            >
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
                Experience
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-white'>
                From field precision to production systems.
              </h2>
            </motion.div>

            <div className='mt-10 grid gap-5'>
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.company}
                  className='rounded border border-white/10 bg-white/[0.035] p-6 hover:border-white/25'
                  {...getRevealMotion(
                    Boolean(shouldReduceMotion),
                    index * 0.09,
                  )}
                  whileHover={liftSmall}
                >
                  <h3 className='text-xl font-semibold text-white'>
                    {experience.company}
                  </h3>
                  <div className='mt-6 grid gap-6'>
                    {experience.roles.map((role) => (
                      <div
                        key={`${experience.company}-${role.title}`}
                        className='border-l border-primary-300/30 pl-5'
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
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id='skills'
          className='relative scroll-mt-20 overflow-hidden border-b border-white/10 py-20'
        >
          <SectionSquareBackground
            variant={3}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
          />
          <div className='layout relative z-10'>
            <motion.div
              className='max-w-2xl'
              {...getRevealMotion(Boolean(shouldReduceMotion))}
            >
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
                Skills
              </p>
              <h2 className='mt-3 text-3xl font-semibold text-white'>
                Tools and habits used to ship reliable software.
              </h2>
            </motion.div>

            <div className='mt-10 grid gap-4 md:grid-cols-2'>
              {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.article
                    key={group.title}
                    className='rounded border border-white/10 bg-white/[0.035] p-5 hover:border-primary-300/35'
                    {...getRevealMotion(
                      Boolean(shouldReduceMotion),
                      index * 0.08,
                    )}
                    whileHover={liftMedium}
                  >
                    <div className='flex items-center gap-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded border border-primary-300/25 bg-primary-300/10 text-primary-200'>
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
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className='relative overflow-hidden border-b border-white/10 py-20'>
          <SectionSquareBackground
            variant={4}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
          />
          <div className='layout relative z-10 grid gap-6 lg:grid-cols-2'>
            {education.map((item, index) => (
              <motion.article
                key={item.school}
                className='rounded border border-white/10 bg-white/[0.035] p-6'
                {...getRevealMotion(Boolean(shouldReduceMotion), index * 0.09)}
              >
                <p className='text-sm text-primary-300'>{item.period}</p>
                <h2 className='mt-3 text-xl font-semibold text-white'>
                  {item.school}
                </h2>
                <p className='mt-1 text-sm font-medium text-zinc-300'>
                  {item.program}
                </p>
                <p className='mt-4 text-sm leading-7 text-zinc-400'>
                  {item.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id='contact'
          className='relative scroll-mt-20 overflow-hidden py-20'
        >
          <SectionSquareBackground
            variant={5}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
          />
          <div className='layout relative z-10'>
            <motion.div
              className='rounded border border-white/10 bg-white/4 p-8 sm:p-10'
              {...getRevealMotion(Boolean(shouldReduceMotion))}
            >
              <p className='text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
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
                  <MotionUnstyledLink
                    href='mailto:fikrinadrian@gmail.com'
                    className='inline-flex items-center justify-center gap-2 rounded border border-primary-300/70 bg-primary-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-primary-200'
                    whileHover={liftSmall}
                    whileTap={press}
                  >
                    <FiMail />
                    Email
                  </MotionUnstyledLink>
                  <MotionUnstyledLink
                    href='https://linkedin.com/in/fikrinadrian'
                    className='inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/35 hover:bg-white/10'
                    whileHover={liftSmall}
                    whileTap={press}
                  >
                    <FiLinkedin />
                    LinkedIn
                  </MotionUnstyledLink>
                  <MotionUnstyledLink
                    href='https://github.com/fikrinadrian'
                    className='inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-white/35 hover:bg-white/10'
                    whileHover={liftSmall}
                    whileTap={press}
                  >
                    <FiGithub />
                    GitHub
                  </MotionUnstyledLink>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className='border-t border-white/10 py-8'>
          <div className='layout flex flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row'>
            <p>&copy; {new Date().getFullYear()} Fikri Nadrian.</p>
            <MotionUnstyledLink
              href='mailto:fikrinadrian@gmail.com'
              className='inline-flex items-center gap-1 text-zinc-400 hover:text-white'
              whileHover={liftSmall}
              whileTap={press}
            >
              fikrinadrian@gmail.com
              <FiArrowUpRight />
            </MotionUnstyledLink>
          </div>
        </footer>
      </motion.main>
    </Layout>
  );
}
