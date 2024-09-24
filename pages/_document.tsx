import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <link
        rel="shortcut icon"
        href="/assets/images/favicon.png"
        type="image/x-icon"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
