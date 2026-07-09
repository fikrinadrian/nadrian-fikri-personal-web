import { motion } from 'framer-motion';

import { getLift, getRevealMotion } from '@/components/home/motion';
import SectionSquareBackground from '@/components/home/SectionSquareBackground';

import { skillGroups } from '@/content/profile';

export default function SkillsSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <section
      id='skills'
      className='relative scroll-mt-20 overflow-hidden border-b border-white/10 py-20'
    >
      <SectionSquareBackground
        variant={3}
        shouldReduceMotion={shouldReduceMotion}
      />
      <div className='layout relative z-10'>
        <motion.div
          className='max-w-2xl'
          {...getRevealMotion(shouldReduceMotion)}
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
                className='rounded border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-primary-300/35'
                {...getRevealMotion(shouldReduceMotion, index * 0.08)}
                whileHover={getLift(shouldReduceMotion, -4)}
              >
                <div className='flex items-center gap-3'>
                  <span className='flex h-10 w-10 items-center justify-center rounded border border-primary-300/25 bg-primary-300/10 text-primary-200'>
                    <Icon aria-hidden='true' />
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
  );
}
