import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiCheck, FiGrid, FiMonitor, FiZap } from 'react-icons/fi';

import styles from '@/styles/PixelPortfolio.module.css';

import {
  getThemePath,
  PortfolioTheme,
  useThemeTransition,
} from '@/components/layout/ThemeTransition';
import UnstyledLink from '@/components/links/UnstyledLink';

type ThemeSwitcherProps = {
  currentTheme: PortfolioTheme;
};

const themes = [
  {
    id: 'classic' as const,
    label: 'Classic UI',
    description: 'Modern dark portfolio',
    icon: FiMonitor,
  },
  {
    id: 'pixel' as const,
    label: 'Pixel Art',
    description: '8-bit adventure mode',
    icon: FiGrid,
  },
  {
    id: 'cyberpunk' as const,
    label: 'Cyberpunk',
    description: 'Neon parallax future',
    icon: FiZap,
  },
];

export default function ThemeSwitcher({ currentTheme }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const themeTransition = useThemeTransition();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuId = React.useId();
  const shouldReduceMotion = useReducedMotion();
  const isPixel = currentTheme === 'pixel';
  const isCyberpunk = currentTheme === 'cyberpunk';
  const activeTheme = themes.find((theme) => theme.id === currentTheme)!;

  React.useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const focusMenuItem = (position: 'first' | 'last') => {
    requestAnimationFrame(() => {
      const items =
        containerRef.current?.querySelectorAll<HTMLAnchorElement>(
          '[role="menuitem"]',
        );
      const target =
        position === 'first' ? items?.[0] : items?.[items.length - 1];
      target?.focus();
    });
  };

  const handleTriggerKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      focusMenuItem(event.key === 'ArrowDown' ? 'first' : 'last');
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      containerRef.current?.querySelectorAll<HTMLAnchorElement>(
        '[role="menuitem"]',
      ) ?? [],
    );
    const currentIndex = items.indexOf(
      document.activeElement as HTMLAnchorElement,
    );

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + items.length) % items.length;
      items[nextIndex]?.focus();
    }

    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      items[event.key === 'Home' ? 0 : items.length - 1]?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className={isPixel ? styles['pixel-theme-switcher'] : 'relative'}
    >
      <button
        ref={triggerRef}
        type='button'
        className={
          isPixel
            ? styles['pixel-theme-button']
            : isCyberpunk
              ? 'group inline-flex h-11 w-11 items-center justify-center border border-[#65f7ff]/55 bg-[#65f7ff]/8 text-base text-[#65f7ff] transition-colors duration-200 hover:border-[#ff4fd8] hover:bg-[#ff4fd8]/10 hover:text-[#ff9aeb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65f7ff]'
              : 'group inline-flex h-11 w-11 items-center justify-center rounded border border-primary-300/45 bg-primary-300/5 text-base text-primary-300 transition-colors duration-200 hover:border-primary-200 hover:bg-primary-300/10 hover:text-primary-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300'
        }
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup='menu'
        aria-label={`Current theme: ${activeTheme.label}. Change theme`}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
      >
        <motion.span
          className={isPixel ? styles['pixel-theme-trigger-icon'] : 'flex'}
          animate={{ rotate: isOpen ? 12 : 0, scale: isOpen ? 1.12 : 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          aria-hidden='true'
        >
          <activeTheme.icon />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={menuId}
            role='menu'
            aria-label='Choose portfolio theme'
            className={
              isPixel
                ? styles['pixel-theme-menu']
                : `absolute top-[calc(100%+12px)] right-0 z-120 w-64 border p-2 text-left shadow-2xl shadow-black/50 ${
                    isCyberpunk
                      ? 'border-[#65f7ff]/30 bg-[#090a12]'
                      : 'rounded border-white/10 bg-[#0d1118]'
                  }`
            }
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -5, scale: 0.98 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            onKeyDown={handleMenuKeyDown}
          >
            <p
              className={
                isPixel
                  ? styles['pixel-theme-menu-label']
                  : `px-3 pt-2 pb-2 text-[10px] font-semibold tracking-[0.18em] uppercase ${
                      isCyberpunk ? 'text-[#65f7ff]/60' : 'text-zinc-500'
                    }`
              }
            >
              Choose interface
            </p>
            <div
              className={isPixel ? styles['pixel-theme-options'] : 'grid gap-1'}
            >
              {themes.map((theme) => {
                const Icon = theme.icon;
                const isActive = theme.id === currentTheme;
                const href = getThemePath(theme.id, router.asPath);

                return (
                  <UnstyledLink
                    key={theme.id}
                    href={href}
                    role='menuitem'
                    aria-current={isActive ? 'page' : undefined}
                    className={
                      isPixel
                        ? `${styles['pixel-theme-option']} ${
                            isActive ? styles['pixel-theme-option-active'] : ''
                          }`
                        : `grid min-h-16 grid-cols-[36px_1fr_18px] items-center gap-3 px-3 py-2.5 transition-colors duration-150 focus-visible:outline-2 ${
                            isCyberpunk
                              ? 'focus-visible:outline-[#65f7ff]'
                              : 'rounded focus-visible:outline-primary-300'
                          } ${
                            isActive
                              ? isCyberpunk
                                ? 'bg-[#65f7ff]/10 text-white'
                                : 'bg-primary-300/10 text-white'
                              : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                          }`
                    }
                    onClick={(event) => {
                      setIsOpen(false);

                      if (isActive) {
                        event.preventDefault();
                        return;
                      }

                      event.preventDefault();
                      if (themeTransition) {
                        themeTransition.startThemeTransition(theme.id, href);
                      } else {
                        void router.push(href);
                      }
                    }}
                  >
                    <span
                      className={
                        isPixel
                          ? styles['pixel-theme-option-icon']
                          : `grid h-9 w-9 place-items-center border ${
                              isCyberpunk ? '' : 'rounded'
                            } ${
                              isActive
                                ? isCyberpunk
                                  ? 'border-[#65f7ff]/55 bg-[#65f7ff]/10 text-[#65f7ff]'
                                  : 'border-primary-300/45 bg-primary-300/10 text-primary-300'
                                : 'border-white/10 bg-white/5 text-zinc-400'
                            }`
                      }
                    >
                      <Icon aria-hidden='true' />
                    </span>
                    <span
                      className={
                        isPixel ? styles['pixel-theme-option-copy'] : 'min-w-0'
                      }
                    >
                      <strong
                        className={
                          isPixel ? undefined : 'block text-xs font-semibold'
                        }
                      >
                        {theme.label}
                      </strong>
                      <small
                        className={
                          isPixel
                            ? undefined
                            : 'mt-0.5 block text-[11px] text-zinc-500'
                        }
                      >
                        {theme.description}
                      </small>
                    </span>
                    {isActive ? (
                      <FiCheck
                        className={
                          isPixel
                            ? styles['pixel-theme-check']
                            : isCyberpunk
                              ? 'text-[#65f7ff]'
                              : 'text-primary-300'
                        }
                        aria-label='Current theme'
                      />
                    ) : null}
                  </UnstyledLink>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
