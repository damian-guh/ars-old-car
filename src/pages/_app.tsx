import type { AppProps } from 'next/app';
import Head from 'next/head';
import { APP_NAME, APP_DESC } from 'utils/constants';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name='description' content={APP_DESC} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
