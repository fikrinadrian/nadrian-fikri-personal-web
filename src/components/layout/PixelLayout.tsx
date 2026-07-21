import * as React from 'react';

import styles from '@/styles/PixelPortfolio.module.css';

import PixelHeader from '@/components/layout/PixelHeader';

export default function PixelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-[#080a0f] text-zinc-100'>
      <a className={styles['skip-to-content']} href='#main-content'>
        Skip to content
      </a>
      <PixelHeader />
      {children}
    </div>
  );
}
