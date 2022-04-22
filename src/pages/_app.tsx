import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../styles/Fonts";
import "../styles/styles.css";
import { appWithTranslation } from "next-i18next";
import { theme } from "./app/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
