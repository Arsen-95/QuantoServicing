import { Box, Flex } from "@chakra-ui/react";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { IMAGES_PATH, ICONS_PATH } from "../../../constants/settings";
import { useRouter } from "next/router";

const images = {
  "/": `${IMAGES_PATH}/mainTitle.png`,
  "/about": `${IMAGES_PATH}/aboutTitle.png`,
  "/cervices": `${IMAGES_PATH}/cervices.png`,
  "/news": `${IMAGES_PATH}/newsTitle.png`,
  "/documents": `${IMAGES_PATH}/documentsTitle.png`,
  "/gti": `${IMAGES_PATH}/gtiTitle.png`,
  "/gis": `${IMAGES_PATH}/gisTitle.png`,
  "/pvr": `${IMAGES_PATH}/pvr.png`,
};

export const MainLayout: React.FC<any> = memo(({ background, children }) => {
  const [isSticky, setSticky] = useState(false);
  const { pathname } = useRouter();
  console.log(pathname);

  const handleScroll = useCallback((event: any) => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 485) {
      console.log("true");
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex flexDir={"column"} minHeight="100%">
      <Header pt="36px" />
      <Box
        h="82px"
        pos="fixed"
        right="0"
        left="0"
        zIndex="25"
        top={isSticky ? 0 : "-114px"}
        bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #C4C4C4 url(${
          images[pathname as keyof typeof images]
        }) no-repeat`}
        bgPos="bottom"
      >
        <Header pt="20px" />
      </Box>
      <Box
        as="main"
        flex="1 0 auto"
        h={"100%"}
        background={background ? `${background}` : "#FFF"}
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
});

MainLayout.displayName = "";
