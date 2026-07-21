import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiGrid, FiMonitor, FiZap } from 'react-icons/fi';

import styles from '@/styles/ThemeTransition.module.css';

export type PortfolioTheme = 'classic' | 'pixel' | 'cyberpunk';

type TransitionPhase = 'covering' | 'revealing';

type TransitionState = {
  phase: TransitionPhase;
  targetTheme: PortfolioTheme;
  href: string;
};

type ThemeTransitionContextValue = {
  startThemeTransition: (targetTheme: PortfolioTheme, href: string) => void;
};

const ThemeTransitionContext = React.createContext<
  ThemeTransitionContextValue | undefined
>(undefined);

function splitRoute(asPath: string) {
  const suffixIndex = asPath.search(/[?#]/);

  if (suffixIndex === -1) {
    return { pathname: asPath, suffix: '' };
  }

  return {
    pathname: asPath.slice(0, suffixIndex),
    suffix: asPath.slice(suffixIndex),
  };
}

export function getThemePath(targetTheme: PortfolioTheme, asPath: string) {
  const { pathname, suffix } = splitRoute(asPath);
  const isPixelRoute =
    pathname === '/pixel-art' || pathname.startsWith('/pixel-art/');
  const isCyberpunkRoute =
    pathname === '/cyberpunk' || pathname.startsWith('/cyberpunk/');

  if (targetTheme === 'classic') {
    if (isCyberpunkRoute) return `/${suffix}`;
    if (!isPixelRoute) return asPath;

    const classicPath = pathname.slice('/pixel-art'.length);
    return `${classicPath || '/'}${suffix}`;
  }

  if (targetTheme === 'cyberpunk') {
    if (isCyberpunkRoute) return asPath;
    return `/cyberpunk${suffix}`;
  }

  if (isPixelRoute) return asPath;

  if (isCyberpunkRoute) return `/pixel-art${suffix}`;

  const hasPixelEquivalent =
    pathname === '/' ||
    pathname === '/projects' ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/');

  if (!hasPixelEquivalent) {
    return `/pixel-art${suffix}`;
  }

  return `${pathname === '/' ? '/pixel-art' : `/pixel-art${pathname}`}${suffix}`;
}

export function useThemeTransition() {
  return React.useContext(ThemeTransitionContext);
}

export default function ThemeTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [transition, setTransition] = React.useState<TransitionState | null>(
    null,
  );
  const navigationStarted = React.useRef(false);

  React.useEffect(() => {
    if (!transition) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [transition]);

  const startThemeTransition = React.useCallback(
    (targetTheme: PortfolioTheme, href: string) => {
      if (transition) return;

      if (shouldReduceMotion) {
        void router.push(href);
        return;
      }

      setTransition({ phase: 'covering', targetTheme, href });
    },
    [router, shouldReduceMotion, transition],
  );

  const handleAnimationComplete = React.useCallback(() => {
    if (!transition) return;

    if (transition.phase === 'covering' && !navigationStarted.current) {
      navigationStarted.current = true;

      void router
        .push(transition.href)
        .catch(() => undefined)
        .finally(() => {
          navigationStarted.current = false;
          setTransition((current) =>
            current ? { ...current, phase: 'revealing' } : null,
          );
        });

      return;
    }

    if (transition.phase === 'revealing') {
      setTransition(null);
    }
  }, [router, transition]);

  const contextValue = React.useMemo(
    () => ({ startThemeTransition }),
    [startThemeTransition],
  );

  const TargetIcon =
    transition?.targetTheme === 'pixel'
      ? FiGrid
      : transition?.targetTheme === 'cyberpunk'
        ? FiZap
        : FiMonitor;
  const targetLabel =
    transition?.targetTheme === 'pixel'
      ? 'PIXEL ART'
      : transition?.targetTheme === 'cyberpunk'
        ? 'CYBERPUNK'
        : 'CLASSIC UI';

  return (
    <ThemeTransitionContext.Provider value={contextValue}>
      {children}
      {transition ? (
        <motion.div
          className={`${styles.overlay} ${
            transition.targetTheme === 'pixel'
              ? styles.overlayPixel
              : transition.targetTheme === 'cyberpunk'
                ? styles.overlayCyberpunk
                : styles.overlayClassic
          }`}
          data-theme-transition={transition.phase}
          role='status'
          aria-live='polite'
          aria-label={`Switching to ${targetLabel}`}
          initial={{ y: '100%' }}
          animate={{ y: transition.phase === 'covering' ? '0%' : '-100%' }}
          transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={handleAnimationComplete}
        >
          <div className={styles.decoration} aria-hidden='true' />
          <div className={styles.transitionPanel}>
            <motion.span
              className={styles.transitionIcon}
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.14, duration: 0.22 }}
              aria-hidden='true'
            >
              <TargetIcon />
            </motion.span>
            <p>SWITCHING INTERFACE</p>
            <strong>{targetLabel}</strong>
            <div className={styles.progress} aria-hidden='true'>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.08, duration: 0.28, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </ThemeTransitionContext.Provider>
  );
}
