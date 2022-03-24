import { Box } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

const Year: FC<any> = ({ children, years }) => {
  const ref = useRef<any>();

  // useEffect(() => {
  //   ref.current.parentElement?.classList.contains("swiper-slide-active") &&
  //     setSelected(ref?.current?.innerText);
  //   console.log(ref?.current?.innerHTML);
  // }, []);

  return (
    <>
      <Box
        ref={ref}
        fontFamily="Blender Pro"
        fontStyle="normal"
        fontWeight="900"
        letter-spacing="-0.00267285px"
        text-transform="uppercase"
        color="#8C949D"
        mb="5px"
      >
        {children}
      </Box>
    </>
  );
};

export default Year;
