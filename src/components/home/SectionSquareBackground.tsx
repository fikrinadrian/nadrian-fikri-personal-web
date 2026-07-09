import { motion } from 'framer-motion';

import { viewport } from '@/components/home/motion';

type SquareBackground = {
  size: number;
  left: string;
  top: string;
  rotate: number;
  opacity: number;
  filled?: boolean;
};

const squareBackgrounds: SquareBackground[][] = [
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
];

export default function SectionSquareBackground({
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
