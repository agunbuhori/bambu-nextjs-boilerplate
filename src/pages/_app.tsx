/**
 * By Agun Buhori
 */
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthGuard from '@/layouts/AuthGuard';
import { persistor, store } from '@/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </PersistGate>
  </Provider>
);

export default MyApp;
