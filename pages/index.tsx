import { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import Header from '../components/Header';
import SiteLayout from '../layouts/layout';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home | Netflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
        {/* Modal */}
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
