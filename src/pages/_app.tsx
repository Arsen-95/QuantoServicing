import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "../styles/Fonts";
import "../styles/styles.css";

const theme = extendTheme({
  fonts: {
    body: "Museo Sans Cyrl",
    heading: "Cera Pro",
  },
  components: {
    Container: {
      baseStyle: {
        px: 10,
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
        lineHeight: "75px",
        height: "120px !important",
        transition: "all 0.3s",
        color: "#365164 !important",
      },
      ".swiper-slide": {
        fontSize: "20px",
        height: "auto",
        color: "#8C949D",
        transition: "all 0.7s !important",
      },
      ".swiper-wrapper": {},
      "@media (max-width: 767px)": {
        ".years-vertical-slider .swiper-slide.swiper-slide-active": {
          fontSize: "44px",
        },
      },
      "@media (max-width: 991px)": {
        ".years-vertical-slider .swiper-slide.swiper-slide-active": {
          fontSize: "60px",
        },
      },
      h5: {
        fontFamily: "Blender Pro",
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
