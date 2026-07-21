import styles from '@/styles/PixelPortfolio.module.css';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/pixel-art#about', label: 'Profile', hideOnMobile: true },
  { href: '/pixel-art/projects', label: 'Quests' },
  { href: '/pixel-art#experience', label: 'XP', hideOnMobile: true },
  { href: '/pixel-art#skills', label: 'Inventory', hideOnMobile: true },
  { href: '/pixel-art/blog', label: 'Journal' },
];

export default function PixelHeader() {
  return (
    <header className={styles['pixel-header']}>
      <div className={`layout ${styles['pixel-header-inner']}`}>
        <UnstyledLink href='/pixel-art' className={styles['pixel-logo']}>
          <span aria-hidden='true'>FN</span>
          <strong>FIKRI.DEV</strong>
        </UnstyledLink>
        <nav aria-label='Pixel art navigation'>
          <ul className={styles['pixel-nav-list']}>
            {links.map(({ href, label, hideOnMobile }) => (
              <li
                key={`${href}${label}`}
                className={hideOnMobile ? 'hidden md:block' : undefined}
              >
                <UnstyledLink href={href} className={styles['pixel-nav-link']}>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <li>
              <UnstyledLink href='/' className={styles['pixel-nav-cta']}>
                CLASSIC UI
              </UnstyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
