import { Box, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "constants/settings";

export const AboutCompany = () => {
  const [t] = useTranslation();
  return (
    <Box
      as="section"
      py={["50px", "75px", "60px"]}
      background={`url(${IMAGES_PATH}/aboutBg.png) no-repeat`}
      bgSize="cover"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Box
            as="h5"
            fontWeight="600"
            fontSize="50px"
            lineHeight="99.5%"
            letterSpacing="-0.04em"
            mb={["15px", "0px"]}
          >
            {t("headers:about")}
          </Box>
          <Box
            fontWeight="300"
            fontSize="18px"
            lineHeight="22px"
            letterSpacing="-0.00185615px"
            opacity="0.7"
            maxW="442px"
          >
            {t("descriptions:about")}
          </Box>
        </Box>
        <Box
          h="141px"
          w="664px"
          alignItems="center"
          background={`url(${IMAGES_PATH}/quantoImage.png) no-repeat right`}
        ></Box>
      </Container>
    </Box>
  );
};
