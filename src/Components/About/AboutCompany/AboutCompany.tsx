import { Box, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "constants/settings";

export const AboutCompany = () => {
  const [t] = useTranslation();
  return (
    <Box as="section" py={["50px", "75px", "100px"]} background="#FAFAFA">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#494949"
          mb={["15px", "0px"]}
        >
          {t("headers:about")}
        </Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDir={["column", "row"]}
        >
          <Box
            fontWeight="300"
            fontSize="18px"
            lineHeight="22px"
            letterSpacing="-0.00185615px"
            color="#000000"
            opacity="0.7"
            maxW="442px"
          >
            {t("descriptions:about")}
          </Box>
          <Box
            minH="200px"
            minW="66%"
            alignItems="center"
            background={`url(${IMAGES_PATH}/quantoImage.png) no-repeat`}
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};
