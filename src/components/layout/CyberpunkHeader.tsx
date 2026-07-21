import { FiCpu } from 'react-icons/fi';

import styles from '@/styles/CyberpunkPortfolio.module.css';

import ThemeSwitcher from '@/components/layout/ThemeSwitcher';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/cyberpunk#profile', label: 'Profile', hideOnMobile: true },
  { href: '/cyberpunk#work', label: 'Work' },
  { href: '/cyberpunk#experience', label: 'Timeline', hideOnMobile: true },
  { href: '/cyberpunk#contact', label: 'Connect' },
];

export default function CyberpunkHeader() {
  return (
    <header className={styles.header}>
      <div className={`layout ${styles.headerInner}`}>
        <UnstyledLink href='/cyberpunk' className={styles.logo}>
          <span className={styles.logoMark} aria-hidden='true'>
            <FiCpu />
          </span>
          <span>
            NF<span className={styles.logoSuffix}>.SYS</span>
          </span>
        </UnstyledLink>

        <nav aria-label='Cyberpunk portfolio navigation'>
          <ul className={styles.navList}>
            {links.map(({ href, label, hideOnMobile }) => (
              <li
                key={`${href}${label}`}
                className={hideOnMobile ? 'hidden md:block' : undefined}
              >
                <UnstyledLink href={href} className={styles.navLink}>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <li>
              <ThemeSwitcher currentTheme='cyberpunk' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
