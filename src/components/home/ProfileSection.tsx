import { motion } from 'framer-motion';

import { getLift, getRevealMotion } from '@/components/home/motion';
import SectionSquareBackground from '@/components/home/SectionSquareBackground';

import { highlights } from '@/content/profile';

export default function ProfileSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <section
      id='profile'
      className='relative scroll-mt-20 overflow-hidden border-b border-white/10 py-20'
    >
      <SectionSquareBackground
        variant={1}
        shouldReduceMotion={shouldReduceMotion}
      />
      <div className='layout relative z-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]'>
        <motion.div {...getRevealMotion(shouldReduceMotion)}>
          <p className='text-sm font-medium uppercase tracking-[0.28em] text-primary-300'>
            Profile
          </p>
          <h2 className='mt-3 text-3xl font-semibold text-white'>
            Engineering range with product discipline.
          </h2>
        </motion.div>
        <motion.div
          className='grid gap-4 sm:grid-cols-2'
          {...getRevealMotion(shouldReduceMotion, 0.09)}
        >
          {highlights.map((highlight) => (
            <motion.article
              key={highlight}
              className='rounded border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-zinc-300 transition-colors duration-300 hover:border-primary-300/35 hover:bg-white/5.5'
              whileHover={getLift(shouldReduceMotion, -4)}
            >
              {highlight}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
