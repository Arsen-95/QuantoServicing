import { Box } from "@chakra-ui/react";
import React, { FC, useRef } from "react";

const Year: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        ref={ref}
        fontFamily="Blender Pro"
        fontWeight="900"
        letterSpacing="-0.00267285px"
        text-transform="uppercase"
        mb="5px"
      >
        {children}
      </Box>
    </>
  );
};

export default Year;
