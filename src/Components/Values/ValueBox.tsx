import { Box, GridItem, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import CountUp from "react-countup";

type ValueProps = {
  text: string;
  num: number;
};

const ValueBox: FC<ValueProps> = ({ text, num }) => {
  return (
    <GridItem p={2} border="1px solid #D9D9D9" h="150px" position="relative">
      <Text
        fontFamily="Museo Sans Cyrl"
        fontStyle="normal"
        fontWeight="300"
        fontSize="12px"
        lineHeight="14px"
        letterSpacing="0.00240557px"
        color="#494949"
      >
        {text}
      </Text>
      <Box
        w="100%"
        pos="absolute"
        top="50%"
        left="50%"
        textAlign="center"
        transform="translate(-50%, -50%)"
        fontFamily="Museo Sans Cyrl"
        fontStyle="normal"
        fontWeight="400"
        fontSize="36px"
        lineHeight="43px"
        letterSpacing="-0.00240557px"
        color="#8C949D"
      >
        <CountUp end={num} separator=" " />
      </Box>
    </GridItem>
  );
};

export default ValueBox;
