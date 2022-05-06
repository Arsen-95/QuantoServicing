import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
};

export const PostTitle: React.FC<Props> = ({ title }) => {
  return (
    <Box maxW="523px">
      <Box
        as="h5"
        fontWeight="900"
        fontSize="60px"
        lineHeight="100%"
        letterSpacing="-0.0017819px"
        mb="15px"
      >
        {title}
      </Box>
      <Flex alignItems="center" mb="150px">
        <Box
          fontWeight="300"
          fontSize="64px"
          lineHeight="80%"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
          mr="10px"
        >
          10
        </Box>
        <Box
          fontWeight="250"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
        >
          September <br /> 2022
        </Box>
      </Flex>
    </Box>
  );
};
