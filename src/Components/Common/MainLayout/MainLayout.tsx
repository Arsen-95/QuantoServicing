import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { IMAGES_PATH } from "../../../constants/settings";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { breadCrumbs } from "constants/breadCrumb";

const images = {
  "/": `${IMAGES_PATH}/mainTitle.png`,
  "/about": `${IMAGES_PATH}/aboutTitle.png`,
  "/cervices": `${IMAGES_PATH}/cervices.png`,
  "/news": `${IMAGES_PATH}/newsTitle.png`,
  "/documents": `${IMAGES_PATH}/documentsTitle.png`,
  "/gti": `${IMAGES_PATH}/gtiTitle.png`,
  "/gis": `${IMAGES_PATH}/gisTitle.png`,
  "/pvr": `${IMAGES_PATH}/pvrTitle.png`,
  "/navItem": "#FFF",
};

export const MainLayout: React.FC<any> = memo(({ background, children }) => {
  const [isSticky, setSticky] = useState(false);
  const { pathname } = useRouter();
  const scrollLimit = pathname === "/" ? 485 : 435;

  const [isLargerThan1400] = useMediaQuery("(min-width: 1400px)");

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= scrollLimit) {
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
        visibility={isSticky ? "visible" : "hidden"}
        h={breadCrumbs[pathname as keyof typeof breadCrumbs] ? "132px" : "80px"}
        pos="fixed"
        right="0"
        left="0"
        zIndex="200"
        top="0"
        bg={
          images[pathname as keyof typeof images]
            ? `url(${images[pathname as keyof typeof images]}) no-repeat`
            : "#FFF"
        }
        bgSize={isLargerThan1400 ? "cover" : "auto"}
        bgPos="bottom "
      >
        <Box transition="all 0.3s" opacity={isSticky ? 1 : 0}>
          <Header pt="20px" />
        </Box>

        {breadCrumbs[pathname as keyof typeof breadCrumbs] && (
          <Box
            pos="absolute"
            top={"82px"}
            w="100%"
            background={isSticky ? "#365164" : "none"}
          >
            <Container
              m="auto"
              transition="0.3s background"
              opacity={isSticky ? 1 : 0}
              h="50px"
              pt="15px"
            >
              <Breadcrumb>
                {breadCrumbs[pathname as keyof typeof breadCrumbs]?.map(
                  ([page, href]: any) => (
                    <BreadcrumbItem
                      color="rgba(255, 255, 255, 0.6)"
                      _last={{
                        color: "#FFF",
                      }}
                      key="page"
                    >
                      <NextLink href={href} passHref>
                        <BreadcrumbLink
                          fontFamily="Museo Sans Cyrl"
                          fontStyle="normal"
                          fontWeight="400"
                          fontSize="14px"
                          lineHeight="134.5%"
                          letterSpacing="-0.00240557px"
                        >
                          {page}
                        </BreadcrumbLink>
                      </NextLink>
                    </BreadcrumbItem>
                  )
                )}
              </Breadcrumb>
            </Container>
          </Box>
        )}
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
