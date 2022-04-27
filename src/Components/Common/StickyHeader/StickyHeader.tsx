import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Header } from "../Header";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";

export const StickyHeader = () => {
  const images = {
    "/": `${IMAGES_PATH}/mainTitle.png`,
    "/about": `${IMAGES_PATH}/aboutTitle.png`,
    "/services": `${IMAGES_PATH}/servicesTitle.png`,
    "/news": `${IMAGES_PATH}/newsTitle.png`,
    "/documents": `${IMAGES_PATH}/documentsTitle.png`,
    "/gti": `${IMAGES_PATH}/gtiTitle.png`,
    "/gis": `${IMAGES_PATH}/gisTitle.png`,
    "/pvr": `${IMAGES_PATH}/pvrTitle.png`,
    "/navItem": "#FFF",
  };
  const breadCrumbs = useBreadCrumbs();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
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
      bgPos="0 99%"
    >
      <Box transition="all 0.3s" opacity={isSticky ? 1 : 0}>
        <Header pt="20px" />
      </Box>

      {breadCrumbs[pathname as keyof typeof breadCrumbs] && (
        <Box
          pos="absolute"
          top={"82px"}
          w="100%"
          background={
            isSticky
              ? "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
              : "none"
          }
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
                    key={Math.random()}
                  >
                    <NextLink href={href} passHref>
                      <BreadcrumbLink
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
  );
};
