import Head from 'next/head';
import React from 'react';
import styles from './layout.module.css';

const SiteLayout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={`styles.main`}>{children}</main>
    </>
  );
};

export default SiteLayout;
