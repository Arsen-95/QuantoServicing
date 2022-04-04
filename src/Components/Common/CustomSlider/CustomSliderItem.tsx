import { Box, Container, Flex } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React, { FC } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";

const CustomSliderItem: FC<any> = ({ title, text, text2, imageUrl, arr }) => {
  const { pathname } = useRouter();
  const titleSize = pathname === "/" ? "75px" : "40px";

  return (
    <SwiperSlide>
      <Box pos="relative" h="720px">
        <Container h="100%">
          <Flex height="100%">
            <Flex flexBasis="40%" flexDir="column" justifyContent="center">
              <Box
                as="h5"
                fontFamily="Blender Pro"
                fontStyle="normal"
                fontWeight="600"
                fontSize={titleSize}
                lineHeight="99.5%"
                letterSpacing="-0.04em"
                color="#494949"
                mb="35px"
              >
                {title}
              </Box>
              <Box
                whiteSpace="pre-line"
                fontWeight="300"
                fontSize="18px"
                lineHeight="142%"
                letterSpacing="-0.00240557px"
                color="#494949"
              >
                {text}
              </Box>
            </Flex>
            <Box
              position="absolute"
              right="0%"
              bottom="0"
              width="50%"
              minH="100%"
              background={`url(${IMAGES_PATH}/${imageUrl}) no-repeat`}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>
          </Flex>
        </Container>
      </Box>
    </SwiperSlide>
  );
};

export default CustomSliderItem;
