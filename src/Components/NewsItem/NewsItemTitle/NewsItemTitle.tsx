import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

export const NewsItemTitle = () => {
  return (
    <Box maxW="475px">
      <Box
        fontStyle="normal"
        fontWeight="400"
        fontSize="48px"
        lineHeight="50px"
        letterSpacing="-1.50267px"
        color="#111111"
        mb="15px"
      >
        Mayor of the city Alexei Romanov met with Artem Vlasov
      </Box>
      <Flex alignItems="center">
        <Box
          fontWeight="300"
          fontSize="64px"
          lineHeight="80%"
          letterSpacing="-0.00267285px"
          color="#111111"
          mr="10px"
        >
          10
        </Box>
        <Box
          fontStyle="normal"
          fontWeight="250"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00267285px"
          color="#111111"
        >
          September <br /> 2022`
        </Box>
      </Flex>
    </Box>
  );
};
