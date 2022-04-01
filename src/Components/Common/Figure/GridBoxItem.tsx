import { Box, GridItem } from "@chakra-ui/react";
import React, { FC } from "react";

type GridBoxItemProps = {
  text: string;
  num: string;
};

const GridBoxItem: FC<GridBoxItemProps> = ({ text, num }) => {
  return (
    <GridItem
      border="1px solid #D9D9D9"
      pos="relative"
      p="8px 6px"
      h="100px"
      // w="100px"
    >
      <Box
        fontStyle="normal"
        fontWeight="300"
        fontSize="8px"
        lineHeight="99.5%"
        letterSpacing="-0.04em"
      >
        {text}
      </Box>
      <Box
        font-style="normal"
        fontWeight="300"
        fontSize="12px"
        lineHeight="99.5%"
        letterSpacing="-0.04em"
        color="#000000"
        pos="absolute"
        top="50%"
        left="50%"
      >
        {num}
      </Box>
    </GridItem>
  );
};

export default GridBoxItem;
