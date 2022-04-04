import { Box, Container, Flex } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const AboutCompany = () => {
  return (
    <Box as="section" py="100px" background="#FAFAFA">
      <Container>
        <Box
          as="h5"
          fontStyle="normal"
          fontWeight="600"
          fontSize="40px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          color="#494949"
        >
          О компании
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Box
            fontFamily="Museo Sans Cyrl"
            fontStyle="normal"
            fontWeight="300"
            fontSize="18px"
            lineHeight="22px"
            letterSpacing="-0.00185615px"
            color="#000000"
            opacity="0.7"
            maxW="442px"
          >
            Quanto Servicing - динамично развивающаяся компания на нефтегазовом
            рынке Республики Узбекистан, предоставляющая геофизические услуги на
            скважинах во всех нефтегазоносных регионах Республики Узбекистан.
          </Box>
          <Box
            minH="200px"
            minW="65%"
            alignItems="center"
            background={`url(${IMAGES_PATH}/quantoImage.png) no-repeat 50%`}
          ></Box>
        </Flex>
      </Container>
    </Box>
  );
};
