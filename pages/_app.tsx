import Header from '@components/header';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@kami-ui/next-theme';
import { globalStyles } from '@styles/global';
import theme from '@styles/theme';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Header />
    <Component {...pageProps} />
    <ToastContainer position="bottom-left" theme="dark" />
  </ThemeProvider>
);

export default App;
