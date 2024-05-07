import '../styles/globals.css';
import { FavProvider } from '../contexts/FavContext';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <FavProvider>
        <Component {...pageProps} />
      </FavProvider>
    </ThemeProvider>
  );
}

export default MyApp;
