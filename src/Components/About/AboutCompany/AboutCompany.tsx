import { Box, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "constants/settings";

export const AboutCompany = () => {
  const [t] = useTranslation();
  return (
    <Box
      as="section"
      background={`url(${IMAGES_PATH}/aboutBg.png) no-repeat`}
      bgSize="cover"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDir={["column", "column", "row"]}
      >
        <Box flexBasis="40%" mb={["25px", "50px", "0"]}>
          <Box
            as="h5"
            fontWeight="600"
            lineHeight="99.5%"
            letterSpacing="-0.04em"
            mb={["25px", "25px", "30px", "30px", "44px"]}
          >
            {t("headers:about")}
          </Box>
          <Box
            fontWeight="300"
            fontSize={["14px", "14px", "16px", "18px"]}
            lineHeight="22px"
            letterSpacing="-0.00185615px"
            opacity="0.7"
            maxW={["90%", "70%", "100%"]}
          >
            {t("descriptions:about")}
          </Box>
        </Box>
        <Box
          h={["70px", "100px", "110px", "130px", "141px"]}
          flexBasis={["auto", "auto", "52%"]}
          w="100%"
          background={`url(${IMAGES_PATH}/quantoImage.png) no-repeat`}
          bgPos={["left", "left", "right"]}
          bgSize="contain"
        ></Box>
      </Container>
    </Box>
  );
};
