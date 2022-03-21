import { Box } from "@chakra-ui/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

const Year: FC<any> = ({ children, setSelected }) => {
  const ref = useRef<any>();

  // Не изменяет state

  useEffect(() => {
    ref.current.parentElement?.classList.contains("swiper-slide-active") &&
      setSelected(ref?.current?.innerText);
    console.log(ref?.current?.innerHTML);
  }, []);

  return (
    <>
      <Box
        ref={ref}
        fontFamily="Blender Pro"
        fontStyle="normal"
        fontWeight="900"
        lineHeight="28px"
        letter-spacing="-0.00267285px"
        text-transform="uppercase"
        color="#8C949D"
        mb="5px"
        fontSize={
          ref?.current?.parentElement?.classList?.contains(
            "swiper-slide-active"
          )
            ? "96px"
            : "36px"
        }
      >
        {children}
      </Box>

      <Box mb="13px" width="7px" height="1px" bgColor="#8C949D"></Box>
      <Box mb="13px" width="7px" height="1px" bgColor="#8C949D"></Box>
      <Box mb="13px" width="7px" height="1px" bgColor="#8C949D"></Box>
      <Box width="7px" height="1px" bgColor="#8C949D"></Box>
    </>
  );
};

export default Year;
