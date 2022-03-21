import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Companies from "./Companies";

export const Partners = () => {
  return (
    <Box background="#FAFAFA" pb="109px">
      <Container>
        <Box
          fontFamily="Blender Pro"
          fontStyle="normal"
          fontWeight="900"
          fontSize="75px"
          lineHeight="62px"
          letterSpacing="-2.50267px"
          textTransform="uppercase"
          color="#494949"
          mb="90px"
          maxW="477"
        >
          Партнерство для вашего успеха
        </Box>

        <Companies />
      </Container>
    </Box>
  );
};
