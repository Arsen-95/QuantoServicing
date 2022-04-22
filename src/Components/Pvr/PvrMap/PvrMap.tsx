import { Box, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { MapIcon } from "./MapIcon";

export const PvrMap = () => {
  const { t } = useTranslation();

  return (
    <Box pt="125px" pb="50px">
      <Container>
        <Box
          as="h5"
          fontWeight="600"
          fontSize="40px"
          lineHeight="105%"
          letterSpacing="-0.04em"
          color="#494949"
          maxW="400px"
          mb="150px"
        >
          {t("headers:applications")}
        </Box>
        <Flex justifyContent="center">
          <MapIcon />
        </Flex>
      </Container>
    </Box>
  );
};
