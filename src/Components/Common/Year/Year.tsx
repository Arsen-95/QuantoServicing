import { Box } from "@chakra-ui/react";
import React, { FC, useEffect, useRef } from "react";

const Year: FC<any> = ({ children }) => {
  const ref = useRef<any>();

  // useEffect(() => {
  // ref.current.parentElement?.classList.contains("swiper-slide-active") ? ref?.current.style.color = "red"
  //   console.log(ref);
  // }, []);

  return (
    <>
      <Box
        ref={ref}
        fontFamily="Blender Pro"
        fontStyle="normal"
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
