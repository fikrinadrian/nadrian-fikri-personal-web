import { motion } from 'framer-motion';

import { getRevealMotion } from '@/components/home/motion';
import ProfileActionLink from '@/components/home/ProfileActionLink';
import SectionSquareBackground from '@/components/home/SectionSquareBackground';

import { contactActions } from '@/content/profile';

export default function ContactSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <section
      id='contact'
      className='relative scroll-mt-20 overflow-hidden py-20'
    >
      <SectionSquareBackground
        variant={5}
        shouldReduceMotion={shouldReduceMotion}
      />
      <div className='layout relative z-10'>
        <motion.div
          className='rounded border border-white/10 bg-white/4 p-8 sm:p-10'
          {...getRevealMotion(shouldReduceMotion)}
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
                Available for conversations around frontend, full-stack product
                engineering, API implementation, and scalable web application
                delivery.
              </p>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row'>
              {contactActions.map((action) => (
                <ProfileActionLink
                  key={action.href}
                  {...action}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
