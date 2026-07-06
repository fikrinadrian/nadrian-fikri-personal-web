import * as React from 'react';
import { FiCheck } from 'react-icons/fi';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

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

export default function Header() {
  const selectedAccent = React.useSyncExternalStore<AccentColor>(
    subscribeAccentColor,
    getStoredAccentColor,
    () => 'emerald',
  );
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const settingsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    applyAccentColor(selectedAccent);
  }, [selectedAccent]);

  React.useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsSettingsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
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

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/85 backdrop-blur-xl'>
      <div className='layout flex h-16 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='text-sm font-semibold tracking-[0.18em] text-white transition-colors duration-300 hover:text-primary-300'
        >
          NADRIAN
        </UnstyledLink>
        <div className='flex items-center gap-3 sm:gap-6'>
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
          <div ref={settingsRef} className='relative'>
            <button
              type='button'
              className='flex h-9 w-9 items-center justify-center rounded-full  text-zinc-400 transition-colors duration-300 hover:border-primary-300/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary-400'
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
        </div>
      </div>
    </header>
  );
}
