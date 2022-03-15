import { Box, GridItem, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import CountUp from "react-countup";

type StatsProps = {
  text: string;
  number: number;
};

const StatsBlock: FC<StatsProps> = ({ text, number }) => {
  return (
    <GridItem p="15px" position="relative" h="294px" border="1px solid #D9D9D9">
      <Text
        fontFamily="Museo Sans Cyrl"
        fontSize={["14px", "14px", "16px", "18px", "18px"]}
        color="#494949"
        maxW="233px"
      >
        {text}
      </Text>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontFamily="Museo Sans Cyrl"
        fontSize={["56px", "56px", "65px", "80px", "96px"]}
        letterSpacing="-3.00267px"
        color="#8C949D"
        fontWeight="400"
      >
        <CountUp end={number} />
      </Box>
    </GridItem>
  );
};

export default StatsBlock;
