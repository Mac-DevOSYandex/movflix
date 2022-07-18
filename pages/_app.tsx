import '../styles/globals.css';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
// import 'tw-elements/dist/css/index.min.css';
// import 'tw-elements';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}

export default CustomApp;

// useEffect(() => {
//   import('tw-elements');
//   // import ('tw-elements/dist/css/index.min.css)';
// }, []);
