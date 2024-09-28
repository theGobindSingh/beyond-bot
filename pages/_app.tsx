import Footer from '@components/footer';
import Header from '@components/header';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@kami-ui/next-theme';
// eslint-disable-next-line import/no-extraneous-dependencies, node/no-extraneous-import
import { globalStyles } from '@styles/global';
import theme from '@styles/theme';
import { ReactLenis } from 'lenis/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <ReactLenis root options={{ duration: 1 }}>
      <Global styles={globalStyles} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ReactLenis>
  </ThemeProvider>
);

export default App;
