import { motion } from 'framer-motion';

import { getRevealMotion } from '@/components/home/motion';
import SectionSquareBackground from '@/components/home/SectionSquareBackground';

import { education } from '@/content/profile';

export default function EducationSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <section className='relative overflow-hidden border-b border-white/10 py-20'>
      <SectionSquareBackground
        variant={4}
        shouldReduceMotion={shouldReduceMotion}
      />
      <div className='layout relative z-10 grid gap-6 lg:grid-cols-2'>
        {education.map((item, index) => (
          <motion.article
            key={item.school}
            className='rounded border border-white/10 bg-white/[0.035] p-6'
            {...getRevealMotion(shouldReduceMotion, index * 0.09)}
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
  );
}
