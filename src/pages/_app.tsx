import { AppProps } from 'next/app';

import '@/styles/globals.css';

import ThemeTransitionProvider from '@/components/layout/ThemeTransition';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeTransitionProvider>
      <Component {...pageProps} />
    </ThemeTransitionProvider>
  );
}

export default MyApp;
