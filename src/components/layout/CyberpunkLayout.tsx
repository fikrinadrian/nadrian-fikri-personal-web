import * as React from 'react';

import styles from '@/styles/CyberpunkPortfolio.module.css';

import CyberpunkHeader from '@/components/layout/CyberpunkHeader';

export default function CyberpunkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href='#main-content'>
        Skip to content
      </a>
      <CyberpunkHeader />
      {children}
    </div>
  );
}
