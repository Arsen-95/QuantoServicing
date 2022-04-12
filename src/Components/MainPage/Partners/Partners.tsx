import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "next-i18next";
import Companies from "./Companies";

export const Partners = () => {
  const { t } = useTranslation("headers");

  return (
    <Box py={["40px", "100px"]}>
      <Box
        id="partners"
        position="relative"
        top={["-100px", "-100px", "-120px", "-140px"]}
      ></Box>
      <Container>
        <Box
          as="h5"
          fontFamily="Blender Pro"
          fontStyle="normal"
          fontWeight="900"
          fontSize={["35px", "50px", "50px", "75px"]}
          lineHeight="62px"
          letterSpacing="-2.50267px"
          textTransform="uppercase"
          color="#494949"
          mb={["20px", "20px", "20px", "35px"]}
          maxW="477"
        >
          {t("headers:partners")}
        </Box>
        <Box
          mb={["30px", "50px", "50px", "100px"]}
          fontFamily="Museo Sans Cyrl"
          fontStyle="normal"
          fontWeight="300"
          fontSize={["14px", "16px", "16px", "18px"]}
          lineHeight="22px"
          letterSpacing="-0.00089095px"
          color="#494949"
          maxW={["257px", "334px", "556px"]}
        >
          Мы являемся гарантом качества в области оказания услуг нефтегазовой
          отрасли. Нам доверяют самое важное.
        </Box>
        <Companies />
      </Container>
    </Box>
  );
};
