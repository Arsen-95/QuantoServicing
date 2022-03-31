import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const Manager: FC<any> = ({ name, position }) => {
  return (
    <Box py="67px" border="1px solid #494949" w="100%">
      <Box
        fontFamily="Museo Sans Cyrl"
        fontStyle="normal"
        fontWeight="600"
        fontSize="16px"
        lineHeight="99.5%"
        textAlign="center"
        letterSpacing="-0.04em"
        color="rgba(0, 0, 0, 0.75)"
        mb={3}
      >
        {name}
      </Box>
      <Box
        fontFamily="Museo Sans Cyrl"
        fontStyle="normal"
        fontWeight="300"
        fontSize="10.7633px"
        lineHeight="13px"
        textAlign="center"
        letterSpacing="-0.00199167px"
        color="#494949"
      >
        {position}
      </Box>
    </Box>
  );
};

export default Manager;
