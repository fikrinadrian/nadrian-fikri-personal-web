import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-[#080a0f] text-zinc-100'>
      <Header />
      {children}
    </div>
  );
}
