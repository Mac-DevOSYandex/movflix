import '../styles/globals.css';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
// import 'tw-elements/dist/css/index.min.css';
// import 'tw-elements';
import SiteLayout from '../layouts/layout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default CustomApp;

// +++++++++++++++
// useEffect(() => {
//   import('tw-elements');
//   // import ('tw-elements/dist/css/index.min.css)';
// }, []);
