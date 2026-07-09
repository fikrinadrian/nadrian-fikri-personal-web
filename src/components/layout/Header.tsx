import * as React from 'react';
import { FiCheck, FiMenu, FiX } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import { type NavigationItem, navigationItems } from '@/content/profile';

const accentColors = [
  {
    name: 'emerald',
    label: 'Emerald',
    swatchClassName: 'bg-emerald-300',
  },
  {
    name: 'pink',
    label: 'Pink',
    swatchClassName: 'bg-pink-300',
  },
] as const;

type AccentColor = (typeof accentColors)[number]['name'];

const accentStorageKey = 'accent-color';
const accentChangeEvent = 'accent-color-change';
const defaultActiveHref = navigationItems[0]?.href ?? '#profile';

function getStoredAccentColor(): AccentColor {
  if (typeof window === 'undefined') {
    return 'emerald';
  }

  const storedAccent = window.localStorage.getItem(accentStorageKey);

  return accentColors.some(({ name }) => name === storedAccent)
    ? (storedAccent as AccentColor)
    : 'emerald';
}

function subscribeAccentColor(onStoreChange: () => void) {
  function handleStorageChange(event: StorageEvent) {
    if (event.key === accentStorageKey) {
      onStoreChange();
    }
  }

  window.addEventListener('storage', handleStorageChange);
  window.addEventListener(accentChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener(accentChangeEvent, onStoreChange);
  };
}

function applyAccentColor(accentColor: AccentColor) {
  document.documentElement.classList.remove(
    ...accentColors.map(({ name }) => name),
  );
  document.documentElement.classList.add(accentColor);
}

function isNavigationHref(hash: string): hash is NavigationItem['href'] {
  return navigationItems.some(({ href }) => href === hash);
}

function getActiveHrefFromLocation() {
  if (typeof window === 'undefined') {
    return defaultActiveHref;
  }

  return isNavigationHref(window.location.hash)
    ? window.location.hash
    : defaultActiveHref;
}

function NavigationLinks({
  activeHref,
  onNavigate,
  variant,
}: {
  activeHref: NavigationItem['href'];
  onNavigate: (href: NavigationItem['href']) => void;
  variant: 'desktop' | 'mobile';
}) {
  return (
    <ul
      className={clsxm(
        variant === 'desktop'
          ? 'flex items-center justify-between gap-2 text-sm font-medium'
          : 'grid gap-1 py-3 text-sm font-medium',
      )}
    >
      {navigationItems.map(({ href, label }) => {
        const isActive = href === activeHref;

        return (
          <li key={`${href}${label}`}>
            <UnstyledLink
              href={href}
              className={clsxm(
                'block rounded px-3 py-2 transition-colors duration-300 focus:outline-none focus-visible:ring focus-visible:ring-primary-400',
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-400 hover:bg-white/7 hover:text-white',
                variant === 'mobile' && 'min-h-11',
              )}
              aria-current={isActive ? 'location' : undefined}
              onClick={() => onNavigate(href)}
            >
              {label}
            </UnstyledLink>
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  const selectedAccent = React.useSyncExternalStore<AccentColor>(
    subscribeAccentColor,
    getStoredAccentColor,
    () => 'emerald',
  );
  const mobileNavId = React.useId();
  const [activeHref, setActiveHref] =
    React.useState<NavigationItem['href']>(defaultActiveHref);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);
  const settingsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    applyAccentColor(selectedAccent);
  }, [selectedAccent]);

  React.useEffect(() => {
    function syncHash() {
      setActiveHref(getActiveHrefFromLocation());
    }

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  React.useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsSettingsOpen(false);

        return;
      }

      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsSettingsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSettingsOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleAccentChange(accentColor: AccentColor) {
    window.localStorage.setItem(accentStorageKey, accentColor);
    window.dispatchEvent(new Event(accentChangeEvent));
    setIsSettingsOpen(false);
  }

  function handleNavigation(href: NavigationItem['href']) {
    setActiveHref(href);
    setIsMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className='sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/90 backdrop-blur-xl'
    >
      <div className='layout flex h-16 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='rounded py-2 text-sm font-semibold tracking-[0.18em] text-white transition-colors duration-300 hover:text-primary-300 focus:outline-none focus-visible:ring focus-visible:ring-primary-400'
        >
          NADRIAN
        </UnstyledLink>
        <div className='flex items-center gap-3 sm:gap-6'>
          <nav className='hidden md:block' aria-label='Primary navigation'>
            <NavigationLinks
              activeHref={activeHref}
              onNavigate={handleNavigation}
              variant='desktop'
            />
          </nav>
          <div ref={settingsRef} className='relative'>
            <button
              type='button'
              className='flex h-10 w-10 items-center justify-center rounded border border-white/10 text-zinc-400 transition-colors duration-300 hover:border-primary-300/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-400'
              aria-label='Accent color settings'
              aria-expanded={isSettingsOpen}
              onClick={() => setIsSettingsOpen((isOpen) => !isOpen)}
            >
              <span
                className='h-4 w-4 rounded-full bg-primary-300'
                aria-hidden='true'
              />
            </button>

            {isSettingsOpen ? (
              <div className='absolute right-0 top-12 w-48 rounded border border-white/10 bg-[#0d1118] p-2 shadow-2xl shadow-black/40'>
                {accentColors.map((accentColor) => {
                  const isSelected = accentColor.name === selectedAccent;

                  return (
                    <button
                      key={accentColor.name}
                      type='button'
                      className='flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm text-zinc-300 transition-colors duration-300 hover:bg-white/10 hover:text-white'
                      onClick={() => handleAccentChange(accentColor.name)}
                    >
                      <span className='inline-flex items-center gap-3'>
                        <span
                          className={`h-4 w-4 rounded-full ${accentColor.swatchClassName}`}
                        />
                        {accentColor.label}
                      </span>
                      {isSelected ? (
                        <FiCheck
                          className='text-primary-300'
                          aria-hidden='true'
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded border border-white/10 text-zinc-400 transition-colors duration-300 hover:border-primary-300/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-400 md:hidden'
            aria-label='Toggle navigation menu'
            aria-controls={mobileNavId}
            aria-expanded={isMenuOpen}
            onClick={() => {
              setIsMenuOpen((isOpen) => !isOpen);
              setIsSettingsOpen(false);
            }}
          >
            {isMenuOpen ? (
              <FiX aria-hidden='true' />
            ) : (
              <FiMenu aria-hidden='true' />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          id={mobileNavId}
          className='border-t border-white/10 bg-[#080a0f]/95 md:hidden'
        >
          <nav className='layout' aria-label='Primary navigation'>
            <NavigationLinks
              activeHref={activeHref}
              onNavigate={handleNavigation}
              variant='mobile'
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
