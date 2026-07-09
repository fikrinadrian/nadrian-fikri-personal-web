import { FiArrowUpRight } from 'react-icons/fi';

import { getLift, getPress } from '@/components/home/motion';
import MotionUnstyledLink from '@/components/home/MotionUnstyledLink';

import { profile } from '@/content/profile';

export default function SiteFooter({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) {
  return (
    <footer className='border-t border-white/10 py-8'>
      <div className='layout flex flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row'>
        <p>
          &copy; {new Date().getFullYear()} {profile.displayName}.
        </p>
        <MotionUnstyledLink
          href={`mailto:${profile.email}`}
          openNewTab={false}
          className='inline-flex items-center gap-1 text-zinc-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-400'
          whileHover={getLift(shouldReduceMotion)}
          whileTap={getPress(shouldReduceMotion)}
        >
          {profile.email}
          <FiArrowUpRight aria-hidden='true' />
        </MotionUnstyledLink>
      </div>
    </footer>
  );
}
