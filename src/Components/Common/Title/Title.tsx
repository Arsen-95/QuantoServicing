import { Box, Container, keyframes } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { IMAGES_PATH } from "../../../constants/settings";

type TitleProps = {
  pt: number;
  background: string;
  title: string;
  text?: string;
};

export const Title: FC<TitleProps> = ({
  pt,
  background,
  title,
  text,
  children,
}) => {
  const pulsate = keyframes`
        0% {transform: scale(0.1, 0.1); opacity: 0.0;}
        50% {opacity: 1.0;}
        100% {transform: scale(1.2, 1.2); opacity: 0.0;}
    `;

  return (
    <Box
      as="section"
      pt={pt}
      background={background}
      backgroundSize="cover"
      pb="30px"
    >
      <Container>
        <Box
          backgroundColor="#E40000"
          // border="3px solid #E40000"
          h="14px"
          w="14px"
          animation={`${pulsate} infinite 1s linear`}
          ml="-16px"
          borderRadius="30px"
        ></Box>
        <Box
          as="h4"
          textTransform="uppercase"
          fontFamily="Blender Pro"
          fontSize="75px"
          lineHeight="62px"
          maxW="850px"
          letterSpacing="-2.50267px"
          fontWeight="900"
          color="#FFF"
          mb="22px"
        >
          {title}
        </Box>
        <Box
          letterSpacing="-0.00185615px"
          fontSize="18"
          lineHeight="22px"
          color="#FFF"
          fontWeight="300"
          fontFamily="Museo Sans Cyrl"
          mb={children ? "90px" : "0"}
        >
          {text}
        </Box>
        {/* {children && children} */}
      </Container>
    </Box>
  );
};
