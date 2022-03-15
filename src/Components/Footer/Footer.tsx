import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ICONS_PATH } from "../../constants/settings";

const Footer = () => {
  return (
    <Box as="footer" background="#365164" py="90px">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Box mb="70px">
              <NextLink href="/" passHref>
                <Link>
                  <Image
                    src={`${ICONS_PATH}/logo.svg`}
                    alt="logo Quanto"
                    w="167px"
                    h="18px"
                  />
                </Link>
              </NextLink>
            </Box>
            <Box
              color="#FFF"
              fontSize="20px"
              fontWeight="900"
              fontFamily="Blender Pro"
              letterSpacing="-0.00240557px"
              mb="10px"
            >
              Ваш надежный партнер
            </Box>
            <Text
              color="#FFF"
              fontStyle="italic"
              maxW="256px"
              fontSize="12px"
              lineHeight="135%"
              letterSpacing="-0.00240557px"
              mb="5"
              whiteSpace="pre-wrap"
            >
              {
                "Мы являемся гарантом качества в области оказания услуг нефтегазовой отрасли. \nНам доверяют самое важное"
              }
            </Text>
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
          </Box>
          <Box textAlign="right" color="#FFF">
            <Box
              textTransform="uppercase"
              fontSize="18px"
              letterSpacing="-0.00240557px"
              lineHeight="134%"
              fontWeight="900"
            >
              Адрес
            </Box>
            <Box as="address" whiteSpace="pre-line" mb={"28px"}>
              {`Узбекистан, Ташкент, \nЯккасарайский район, ул. Нукусская, 29`}
            </Box>
            <Box
              textTransform="uppercase"
              fontSize="18px"
              letterSpacing="-0.00240557px"
              lineHeight="134%"
              fontWeight="900"
            >
              email
            </Box>
            <Box mb={"28px"}>
              <Link href="mailto:info@quantoservicing.com">
                info@quantoservicing.com
              </Link>
            </Box>
            <Box
              textTransform="uppercase"
              fontSize="18px"
              letterSpacing="-0.00240557px"
              lineHeight="134%"
              fontWeight="900"
            >
              Контактный номер телефона
            </Box>
            <Link href="tel:+99878-140-55-00">+99878-140-55-00</Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
