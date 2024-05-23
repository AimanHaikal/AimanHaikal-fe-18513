// pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import { AssessmentProvider } from './context/assessmentContext'; // Import AssessmentProvider
import type { AppProps } from 'next/app';
import theme from './styles/theme';
import './styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <AssessmentProvider> {/* Wrap your application with AssessmentProvider */}
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/results">Results</a>
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>© 2024 Web Assessment</footer>
      </AssessmentProvider>
    </ChakraProvider>
  );
};

export default MyApp;
