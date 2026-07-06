import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/85 backdrop-blur-xl'>
      <div className='layout flex h-16 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='text-sm font-semibold tracking-[0.18em] text-white transition-colors duration-300 hover:text-emerald-300'
        >
          NADRIAN
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between gap-3 text-xs font-medium text-zinc-400 sm:gap-6 sm:text-sm'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='transition-colors duration-300 hover:text-white'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
