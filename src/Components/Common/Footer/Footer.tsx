import { Box, Container, Flex, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ICONS_PATH } from "../../../constants/settings";
import { Navigation } from "../Navigation";

export const Footer = () => {
  const { pathname } = useRouter();
  const color = pathname === "/newsItem" ? "#FFF" : "#FFF";

  return (
    <Box as="footer">
      <Box background="#365164" pos="relative">
        <Container>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            py={["70px", "70px", "100px"]}
            flexDir={["column", "column", "row"]}
          >
            <NextLink href="/" passHref>
              <Link py="10px" mb={["50px", "50px", "0"]}>
                <Image src={`${ICONS_PATH}/logo.svg`} alt="Logo" />
              </Link>
            </NextLink>
            <Box textAlign={["center", "center", "right"]} color="#FFF">
              <Box
                fontFamily="Museo Sans Cyrl"
                fontSize="18px"
                letterSpacing="-0.00240557px"
                lineHeight="134%"
                fontWeight="600"
                mb="5px"
              >
                Адрес
              </Box>
              <Box
                as="address"
                whiteSpace="pre-line"
                mb={"28px"}
                fontFamily="Arial"
                fontStyle="italic"
                fontWeight="400"
                fontSize="12px"
                lineHeight="134.5%"
                letterSpacing="-0.00240557px"
                opacity="0.9"
              >
                {`Узбекистан, Ташкент, \nМирабадский район, ул. Нукус, 29`}
              </Box>
              <Box
                fontFamily="Museo Sans Cyrl"
                fontSize="18px"
                letterSpacing="-0.00240557px"
                lineHeight="134%"
                fontWeight="600"
                mb="5px"
              >
                Email
              </Box>
              <Box mb={"28px"}>
                <Link
                  href="mailto:info@quantoservicing.com"
                  as="address"
                  whiteSpace="pre-line"
                  mb={"28px"}
                  fontFamily="Arial"
                  fontStyle="italic"
                  fontWeight="400"
                  fontSize="12px"
                  lineHeight="134.5%"
                  letterSpacing="-0.00240557px"
                  opacity="0.9"
                >
                  info@quantoservicing.com
                </Link>
              </Box>
              <Box
                fontFamily="Museo Sans Cyrl"
                fontSize="18px"
                letterSpacing="-0.00240557px"
                lineHeight="134%"
                fontWeight="600"
                mb="5px"
              >
                Контактный телефон
              </Box>
              <Link
                href="tel:+99878-140-55-00"
                as="address"
                whiteSpace="pre-line"
                fontFamily="Arial"
                fontStyle="italic"
                fontWeight="400"
                fontSize="12px"
                lineHeight="134.5%"
                letterSpacing="-0.00240557px"
                opacity="0.9"
              >
                +99878-140-55-00
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box background="#494949">
        <Container>
          <Flex py="30px" justifyContent="space-between" alignItems="center">
            <Box
              cursor="pointer"
              h="37px"
              w="37px"
              background={`#FFF url(${ICONS_PATH}/arrowTop.svg) no-repeat center`}
              color="#FFF"
              letterSpacing="-0.000932056px"
              fontSize="10"
              fontFamily="Blender PRo"
              textTransform="uppercase"
              onClick={() =>
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            ></Box>
            <Box display={["none", "none", "none", "block"]}>
              <Navigation flexDir="row" lang={false} color={color} />
            </Box>
            <Flex
              flexDir="column"
              fontFamily="Arial"
              fontStyle="normal"
              fontWeight="400"
              fontSize="12px"
              lineHeight="134.5%"
              letterSpacing="-0.00240557px"
              textDecorationLine="underline"
              color="rgba(255, 255, 255, 0.5)"
              opacity="0.9"
            >
              <Flex>
                <Link mr="10px">Privacy Notice</Link>
                <Link>Terms of Service</Link>
              </Flex>
              <Box>{`2016-${new Date().getFullYear()} © QUANTO SERVICING`}</Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
