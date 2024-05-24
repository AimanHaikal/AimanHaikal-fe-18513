// _app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./context/appContext";
import Layout from "./layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppProvider>
        {/* Make sure this wraps your entire application */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
