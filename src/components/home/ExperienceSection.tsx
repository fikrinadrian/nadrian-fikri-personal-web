import { motion } from 'framer-motion';

import { getLift, getRevealMotion } from '@/components/home/motion';
import SectionSquareBackground from '@/components/home/SectionSquareBackground';

import { experiences } from '@/content/profile';

export default function ExperienceSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <section
      id='experience'
      className='relative scroll-mt-20 overflow-hidden border-b border-white/10 py-20'
    >
      <SectionSquareBackground
        variant={2}
        shouldReduceMotion={shouldReduceMotion}
      />
      <div className='layout relative z-10'>
        <motion.div
          className='max-w-2xl'
          {...getRevealMotion(shouldReduceMotion)}
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
              className='rounded border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-white/25'
              {...getRevealMotion(shouldReduceMotion, index * 0.09)}
              whileHover={getLift(shouldReduceMotion)}
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
  );
}
