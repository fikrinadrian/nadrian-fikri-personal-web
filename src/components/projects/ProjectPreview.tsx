import {
  FiBarChart2,
  FiGrid,
  FiMessageSquare,
  FiTrendingUp,
} from 'react-icons/fi';

import { Project } from '@/data/projects';

type ProjectPreviewProps = {
  variant: Project['preview'];
};

export default function ProjectPreview({ variant }: ProjectPreviewProps) {
  return (
    <div
      className='relative aspect-[16/10] overflow-hidden rounded border border-white/10 bg-[#0b0e14]'
      aria-hidden='true'
    >
      <div className='flex h-8 items-center gap-1.5 border-b border-white/10 bg-black/25 px-3'>
        <span className='h-1.5 w-1.5 rounded-full bg-red-300/70' />
        <span className='h-1.5 w-1.5 rounded-full bg-amber-300/70' />
        <span className='h-1.5 w-1.5 rounded-full bg-emerald-300/70' />
        <span className='ml-2 h-2 w-2/5 rounded-full bg-white/8' />
      </div>

      {variant === 'reku' && <RekuPreview />}
      {variant === 'dashboard' && <DashboardPreview />}
      {variant === 'aura' && <AuraPreview />}
      {variant === 'moxie' && <MoxiePreview />}
    </div>
  );
}

function RekuPreview() {
  return (
    <div className='relative h-[calc(100%-2rem)] overflow-hidden bg-[#07111f] px-[8%] py-[6%]'>
      <div className='absolute -right-[8%] -top-[35%] h-[120%] w-[55%] rounded-full bg-blue-500/15 blur-3xl' />
      <div className='relative z-10 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[8px] font-black text-white'>
            R
          </span>
          <span className='text-[9px] font-bold tracking-wide text-white'>
            REKU
          </span>
        </div>
        <div className='flex gap-1.5'>
          {[1, 2, 3].map((item) => (
            <span key={item} className='h-1 w-5 rounded-full bg-white/15' />
          ))}
        </div>
      </div>

      <div className='relative z-10 mt-[9%] grid grid-cols-[0.76fr_1.24fr] gap-[7%]'>
        <div>
          <p className='text-[6px] font-semibold uppercase tracking-[0.2em] text-blue-300'>
            Invest with confidence
          </p>
          <div className='mt-2 h-2.5 w-full rounded-full bg-white/85' />
          <div className='mt-1.5 h-2.5 w-4/5 rounded-full bg-white/85' />
          <div className='mt-3 h-1 w-full rounded-full bg-white/12' />
          <div className='mt-1.5 h-1 w-2/3 rounded-full bg-white/12' />
          <div className='mt-4 h-5 w-16 rounded-full bg-blue-500' />
        </div>

        <div className='rounded-lg border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='h-1 w-10 rounded-full bg-white/15' />
              <div className='mt-2 h-2 w-14 rounded-full bg-white/70' />
            </div>
            <span className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-[9px] text-emerald-300'>
              <FiTrendingUp />
            </span>
          </div>
          <div className='mt-4 flex h-12 items-end gap-1'>
            {[35, 48, 42, 68, 58, 76, 92, 82].map((height) => (
              <span
                key={height}
                className='flex-1 rounded-t-sm bg-blue-400/45'
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className='mt-3 grid grid-cols-3 gap-1.5'>
            {['BTC', 'US', 'ETF'].map((asset) => (
              <span
                key={asset}
                className='rounded bg-white/5 py-1 text-center text-[5px] font-semibold text-zinc-400'
              >
                {asset}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className='flex h-[calc(100%-2rem)]'>
      <div className='flex w-[22%] flex-col gap-3 border-r border-white/8 bg-white/2 p-3'>
        <div className='mb-2 flex items-center gap-2'>
          <span className='flex h-6 w-6 items-center justify-center rounded bg-primary-300/15 text-[8px] font-bold text-primary-200'>
            ID
          </span>
          <span className='h-1.5 flex-1 rounded-full bg-white/15' />
        </div>
        {[FiGrid, FiBarChart2, FiMessageSquare].map((Icon, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 rounded p-1.5 ${
              index === 0
                ? 'bg-primary-300/12 text-primary-200'
                : 'text-zinc-600'
            }`}
          >
            <Icon className='text-[9px]' />
            <span className='h-1 w-3/5 rounded-full bg-current opacity-30' />
          </div>
        ))}
      </div>
      <div className='flex-1 p-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='h-1.5 w-16 rounded-full bg-white/25' />
            <div className='mt-2 h-1 w-24 rounded-full bg-white/8' />
          </div>
          <div className='h-6 w-6 rounded-full border border-primary-300/20 bg-primary-300/10' />
        </div>
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {[62, 42, 76].map((height, index) => (
            <div
              key={height}
              className='rounded border border-white/8 bg-white/3 p-2'
            >
              <div className='h-1 w-2/3 rounded-full bg-white/10' />
              <div className='mt-2 h-2 w-1/2 rounded-full bg-white/25' />
              <div className='mt-3 flex h-8 items-end gap-1'>
                {[0.45, 0.8, 0.6, 1].map((scale, barIndex) => (
                  <span
                    key={barIndex}
                    className='flex-1 rounded-t-sm bg-primary-300/35'
                    style={{ height: `${height * scale}%` }}
                  />
                ))}
              </div>
              <span className='sr-only'>Metric {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuraPreview() {
  return (
    <div className='relative flex h-[calc(100%-2rem)] items-center overflow-hidden bg-[#07141a] px-[9%]'>
      <div className='absolute -right-[12%] -top-[45%] h-[130%] w-[55%] rounded-full bg-cyan-400/10 blur-3xl' />
      <div className='relative z-10 w-[56%]'>
        <div className='flex items-center gap-2'>
          <span className='flex h-6 w-6 items-center justify-center rounded bg-cyan-300 text-[8px] font-black text-slate-950'>
            A
          </span>
          <span className='h-1.5 w-20 rounded-full bg-white/25' />
        </div>
        <p className='mt-5 text-[7px] font-semibold uppercase tracking-[0.24em] text-cyan-300/80'>
          Technology authentication
        </p>
        <div className='mt-2 h-3 w-full rounded-full bg-white/80' />
        <div className='mt-2 h-3 w-4/5 rounded-full bg-white/80' />
        <div className='mt-3 h-1 w-3/4 rounded-full bg-white/12' />
        <div className='mt-1.5 h-1 w-2/3 rounded-full bg-white/12' />
        <div className='mt-4 h-5 w-16 rounded-sm bg-cyan-300/90' />
      </div>
      <div className='relative ml-auto flex h-[70%] w-[32%] items-center justify-center'>
        <div className='absolute h-24 w-24 rotate-45 rounded-2xl border border-cyan-300/20' />
        <div className='absolute h-16 w-16 rotate-12 rounded-xl border border-cyan-300/30 bg-cyan-300/5' />
        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300/15 text-xs font-black text-cyan-200'>
          200+
        </div>
      </div>
    </div>
  );
}

function MoxiePreview() {
  return (
    <div className='relative h-[calc(100%-2rem)] overflow-hidden bg-[#f1ff6a] p-[7%] text-[#171717]'>
      <div className='absolute -bottom-12 -right-8 h-32 w-32 rotate-12 rounded-[2rem] bg-fuchsia-500/90' />
      <div className='absolute right-[12%] top-[14%] h-12 w-12 rotate-12 rounded-xl bg-blue-600' />
      <div className='relative z-10 flex items-center justify-between'>
        <span className='text-[10px] font-black tracking-tight'>MOXIE.</span>
        <div className='flex gap-1.5'>
          {[1, 2, 3].map((item) => (
            <span key={item} className='h-1 w-5 rounded-full bg-black/25' />
          ))}
        </div>
      </div>
      <div className='relative z-10 mt-[13%] max-w-[72%]'>
        <p className='text-[6px] font-bold uppercase tracking-[0.18em]'>
          Digital marketing solutions
        </p>
        <p className='mt-2 text-[clamp(13px,2.1vw,25px)] font-black leading-[0.9] tracking-[-0.05em]'>
          MAKE YOUR BRAND IMPOSSIBLE TO IGNORE.
        </p>
        <div className='mt-4 flex gap-2'>
          <span className='rounded-full bg-black px-3 py-1 text-[6px] font-bold text-white'>
            Our works
          </span>
          <span className='rounded-full border border-black/30 px-3 py-1 text-[6px] font-bold'>
            Services
          </span>
        </div>
      </div>
    </div>
  );
}
