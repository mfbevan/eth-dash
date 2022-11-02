import Head from "next/head";

export const Metadata = () => (
  <Head>
    <title>Ethereum Dashboards</title>
    <meta name="description" content="All of your favourite Ethereum Dashboards in one place." />
    <link rel="icon" href="/favicon.ico" />
    {/* Twitter Metadata */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@mfbevan" />
    <meta
      name="twitter:description"
      content="All of your favourite Ethereum Dashboards in one place."
    />
    <meta name="twitter:creator" content="@mfbevan" />
    <meta name="twitter:title" content="ethdash.xyz" />
    <meta name="og:image" content="https://www.ethdash.xyz/eth-dash.png" />
    <meta name="og:image:width" content="1233" />
    <meta name="og:image:height" content="1233" />
  </Head>
);
