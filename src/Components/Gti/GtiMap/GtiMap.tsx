import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const GtiMap = () => {
  return (
    <Box pt="100px" pb="40px">
      <Container>
        <Box
          fontWeight="600"
          fontSize="40px"
          lineHeight="105%"
          letterSpacing="-0.04em"
          color="#494949"
          maxW="559px"
          mb="150px"
        >
          Завершенные скважины по нефтегазоносным регионам
        </Box>
        <Flex justifyContent="center" mb="43px">
          <Image src={`${IMAGES_PATH}/gtiMap.svg`} alt="gti map" />
        </Flex>
        <Box
          fontStyle="italic"
          fontWeight="400"
          fontSize="15px"
          lineHeight="18px"
          textAlign="right"
          letterSpacing="-0.00185615px"
          color="#494949"
        >
          *В период с 2019 по 2022 года
        </Box>
      </Container>
    </Box>
  );
};
