import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import "../styles/slick-carousel/slick/slick.css";
import "../styles/slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>öndë digital - custom software development company in Australia</title>
        <link rel="icon" href="images/onde digital1.svg" type="image/png"></link>
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      <Script
        src="https://kit.fontawesome.com/e30259c958.js"
        crossOrigin="anonymous"
      />
    </>
  );
}

export default MyApp;
