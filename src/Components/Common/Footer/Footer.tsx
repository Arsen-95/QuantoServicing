import { Box, Button, Container, Flex, Image, Link } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";

import { ICONS_PATH } from "../../../constants/settings";
import { Navigation } from "../Navigation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer">
      <Box bg="#000000" pos="relative">
        <Container>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            py={["70px", "70px", "100px"]}
            flexDir={["column", "column", "row"]}
          >
            <NextLink href="/" passHref>
              <Link py="10px" mb={["50px", "50px", "0"]}>
                <Image w="210px" src={`${ICONS_PATH}/logo.svg`} alt="Logo" />
              </Link>
            </NextLink>
            <Box textAlign={["center", "center", "right"]} color="#FFF">
              <Box
                fontSize="18px"
                letterSpacing="-0.00240557px"
                lineHeight="134%"
                fontWeight="600"
                mb="5px"
              >
                {t("footer:address")}
              </Box>
              <Box
                as="address"
                whiteSpace="pre-line"
                mb={"28px"}
                fontFamily="Arial"
                fontStyle="italic"
                fontSize="12px"
                lineHeight="134.5%"
                letterSpacing="-0.00240557px"
                opacity="0.9"
              >
                {t("footer:firmAddress")}
              </Box>
              <Box
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
                  fontSize="12px"
                  lineHeight="134.5%"
                  letterSpacing="-0.00240557px"
                  opacity="0.9"
                >
                  info@quantoservicing.com
                </Link>
              </Box>
              <Box
                fontSize="18px"
                letterSpacing="-0.00240557px"
                lineHeight="134%"
                fontWeight="600"
                mb="5px"
              >
                {t("footer:tel")}
              </Box>
              <Link
                href="tel:+99878-140-55-00"
                as="address"
                whiteSpace="pre-line"
                fontFamily="Arial"
                fontStyle="italic"
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
      <Box background="#282828">
        <Container>
          <Flex py="30px" justifyContent="space-between" alignItems="center">
            <Box
              as="button"
              cursor="pointer"
              h="37px"
              w="37px"
              background={`url(${ICONS_PATH}/arrowTop.svg) no-repeat center`}
              border="1px solid #B7B7B7"
              _hover={{
                bg: `#393A47 url(${ICONS_PATH}/arrowTop.svg) no-repeat center`,
              }}
              transition="all 0.3s"
              onClick={() =>
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            ></Box>
            <Box display={["none", "none", "none", "block"]}>
              <Navigation flexDir="row" lang={false} color="#FFF" />
            </Box>
            <Flex
              flexDir="column"
              fontFamily="Arial"
              fontSize="12px"
              lineHeight="134.5%"
              letterSpacing="-0.00240557px"
              textDecorationLine="underline"
              color="#898989"
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
