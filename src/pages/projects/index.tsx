import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiBriefcase, FiMail } from 'react-icons/fi';

import { projects } from '@/data/projects';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ProjectCard from '@/components/projects/ProjectCard';
import Seo from '@/components/Seo';

const enterTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();
  const revealMotion = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: enterTransition,
  };

  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description='Selected freelance web projects by Fikri Nadrian, including internal product interfaces and public company landing pages.'
      />

      <main className='relative overflow-hidden'>
        <div className='ambient-grid pointer-events-none absolute inset-x-0 top-0 h-150 opacity-50' />

        <section className='relative border-b border-white/10 py-16 sm:py-24'>
          <motion.div className='layout' {...revealMotion}>
            <p className='inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
              <FiBriefcase />
              Selected Projects
            </p>
            <div className='mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end'>
              <h1 className='max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl'>
                Freelance work built for real businesses.
              </h1>
              <p className='max-w-xl text-base leading-8 text-zinc-300'>
                A selection of client projects across internal products, company
                profiles, and digital agency experiences.
              </p>
            </div>

            <div className='mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-xl sm:gap-8'>
              <ProjectStat value='03' label='Freelance projects' />
              <ProjectStat value='02' label='Public launches' />
              <ProjectStat value='01' label='Private product' />
            </div>
          </motion.div>
        </section>

        <section className='relative py-14 sm:py-20'>
          <div className='layout grid gap-5 sm:gap-7'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ ...enterTransition, delay: index * 0.06 }}
              >
                <ProjectCard project={project} detailed />
              </motion.div>
            ))}
          </div>
        </section>

        <section className='border-t border-white/10 py-14 sm:py-20'>
          <div className='layout'>
            <div className='rounded border border-primary-300/20 bg-primary-300/8 p-7 sm:p-10'>
              <p className='text-sm font-medium uppercase tracking-[0.24em] text-primary-300'>
                Have a project in mind?
              </p>
              <div className='mt-4 flex flex-col justify-between gap-7 lg:flex-row lg:items-end'>
                <div>
                  <h2 className='max-w-2xl text-2xl font-semibold text-white sm:text-3xl'>
                    Let&apos;s turn the brief into a clear, reliable web
                    experience.
                  </h2>
                  <p className='mt-3 max-w-xl text-sm leading-7 text-zinc-400'>
                    Available for landing pages, frontend implementation, and
                    full-stack product work.
                  </p>
                </div>
                <UnstyledLink
                  href='mailto:fikrinadrian@gmail.com'
                  className='inline-flex shrink-0 items-center justify-center gap-2 rounded border border-primary-300 bg-primary-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-primary-200'
                >
                  <FiMail />
                  Start a conversation
                  <FiArrowUpRight />
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ProjectStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className='text-2xl font-semibold text-white sm:text-3xl'>{value}</p>
      <p className='mt-1 text-xs leading-5 text-zinc-500 sm:text-sm'>{label}</p>
    </div>
  );
}
