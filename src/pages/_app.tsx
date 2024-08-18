import Sidebar from '../../components/experiment/Layout/Sidebar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}

export default MyApp;
