import clsxm from '@/lib/clsxm';

import { getLift, getPress } from '@/components/home/motion';
import MotionUnstyledLink from '@/components/home/MotionUnstyledLink';

import type { ProfileAction } from '@/content/profile';

const actionClasses = {
  primary:
    'border-primary-300/70 bg-primary-300 text-zinc-950 shadow-2xl shadow-primary-400/20 hover:bg-primary-200 focus-visible:ring-primary-400',
  secondary:
    'border-white/15 text-white hover:border-white/35 hover:bg-white/10 focus-visible:ring-white/40',
} satisfies Record<ProfileAction['variant'], string>;

type ProfileActionLinkProps = ProfileAction & {
  shouldReduceMotion: boolean;
};

export default function ProfileActionLink({
  href,
  icon: Icon,
  label,
  shouldReduceMotion,
  variant,
}: ProfileActionLinkProps) {
  return (
    <MotionUnstyledLink
      href={href}
      openNewTab={href.startsWith('http')}
      className={clsxm(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded border px-5 py-3 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring',
        actionClasses[variant],
      )}
      whileHover={getLift(shouldReduceMotion)}
      whileTap={getPress(shouldReduceMotion)}
    >
      <Icon aria-hidden='true' />
      {label}
    </MotionUnstyledLink>
  );
}
