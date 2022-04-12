import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "../styles/Fonts";
import "../styles/styles.css";
import { appWithTranslation } from "next-i18next";

const theme = extendTheme({
  fonts: {
    body: "Museo Sans Cyrl",
    heading: "Cera Pro",
  },
  components: {
    Container: {
      baseStyle: {
        "@media (min-width: 300px)": {
          px: "20px",
        },
        "@media (min-width: 481px)": {
          px: "20px",
        },
        "@media (min-width: 767px)": {
          px: "40px",
        },
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
        fontSize: "24px",
        height: "auto",
        color: "#8C949D",
        transition: "all 0.7s !important",
      },

      "@media (max-width: 991px)": {
        ".years-vertical-slider .swiper-slide.swiper-slide-active": {
          fontSize: "60px",
        },
        ".swiper-slide": {
          fontSize: "20px",
          height: "auto",
          color: "#8C949D",
          transition: "all 0.7s !important",
        },
      },
      "@media (max-width: 767px)": {
        ".years-vertical-slider .swiper-slide.swiper-slide-active": {
          fontSize: "44px",
          lineHeight: "1.3",
        },
        ".swiper-slide": {
          fontSize: "16px",
          lineHeight: "2",
          height: "auto",
          color: "#8C949D",
          transition: "all 0.7s !important",
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

export default appWithTranslation(MyApp);
