import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import store, { persistor } from '@/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.css';

import theme from '@/styles/theme';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
