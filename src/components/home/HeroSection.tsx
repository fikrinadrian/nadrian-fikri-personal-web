import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

import { getLift, getRevealMotion } from '@/components/home/motion';
import ProfileActionLink from '@/components/home/ProfileActionLink';
import SectionSquareBackground from '@/components/home/SectionSquareBackground';

import { heroActions, profile, stats } from '@/content/profile';

export default function HeroSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <section className='relative overflow-hidden border-b border-white/10'>
      <SectionSquareBackground
        variant={0}
        shouldReduceMotion={shouldReduceMotion}
      />
      <div className='layout relative z-10 flex min-h-[calc(100vh-64px)] flex-col justify-center gap-12 py-20 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center'>
        <motion.div
          className='max-w-3xl'
          {...getRevealMotion(shouldReduceMotion)}
        >
          <p className='text-sm font-medium uppercase tracking-[0.32em] text-primary-300'>
            {profile.role}
          </p>
          <h1 className='mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl'>
            {profile.displayName}
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg'>
            {profile.summary}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            {heroActions.map((action) => (
              <ProfileActionLink
                key={action.href}
                {...action}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          <div className='mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400'>
            <span className='inline-flex items-center gap-2'>
              <FiMapPin className='text-primary-300' aria-hidden='true' />
              {profile.location}
            </span>
            <span className='hidden h-1 w-1 rounded-full bg-zinc-600 sm:block' />
            <span>{profile.availability}</span>
          </div>
        </motion.div>

        <motion.aside
          className='border-l border-primary-300/30 pl-6'
          {...getRevealMotion(shouldReduceMotion, 0.12)}
          aria-label='Profile overview'
        >
          <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-5'>
            <div>
              <p className='text-xs uppercase tracking-[0.28em] text-zinc-500'>
                Current Focus
              </p>
              <p className='mt-2 text-xl font-semibold text-white'>
                {profile.focus}
              </p>
            </div>
            <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded border border-primary-300/30 bg-primary-300/10 text-lg font-semibold text-primary-200'>
              {profile.initials}
            </div>
          </div>

          <div className='mt-6 grid gap-4'>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className='border-b border-white/10 pb-4 last:border-b-0 last:pb-0'
                whileHover={getLift(shouldReduceMotion)}
              >
                <p className='text-2xl font-semibold text-white'>
                  {stat.value}
                </p>
                <p className='mt-1 text-sm text-zinc-400'>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
