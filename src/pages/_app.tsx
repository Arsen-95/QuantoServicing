import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "../styles/Fonts";

const theme = extendTheme({
  fonts: {
    // body: "Cera Pro",
    // heading: "Cera Pro",
  },
  components: {
    Container: {
      baseStyle: {
        px: 5,
        margin: "0 auto",
        maxW: "1320px",
      },
    },
  },
  styles: {
    global: {
      "body, html, #__next": {
        height: "100%",
        cursor: "default",
      },
      ".years-vertical-slider .swiper-slide.swiper-slide-active": {
        fontSize: "96px",
        lineHeight: "70px",
        height: "120px !important",
        transition: "all 0.3s",
      },
      ".swiper-slide": {
        height: "auto",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
