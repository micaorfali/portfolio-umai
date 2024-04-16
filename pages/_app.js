import '../styles/globals.css';
import { FavProvider } from '../contexts/FavContext';

function MyApp({ Component, pageProps }) {
  return (
    <FavProvider>
      <Component {...pageProps} />
    </FavProvider>
  );
 }

export default MyApp;
