import { Box, Container, Flex } from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React, { FC } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";

const CustomSliderItem: FC<any> = ({ title, text, imageUrl }) => {
  const { pathname } = useRouter();
  const titleSize =
    pathname === "/"
      ? ["34px", "56px", "64px", "75px"]
      : ["20px", "34px", "40px"];

  return (
    <SwiperSlide>
      <Box pos="relative" h={["500px", "500px", "580px", "750px"]}>
        <Container h="100%">
          <Flex height="100%">
            <Flex
              flexBasis={["90%", "90%", "70%", "40%"]}
              flexDir="column"
              justifyContent="center"
            >
              <Box
                as="h5"
                fontFamily="Blender Pro"
                fontStyle="normal"
                fontWeight="600"
                fontSize={titleSize}
                lineHeight="99.5%"
                letterSpacing="-0.04em"
                mb="35px"
                color={["#FFF", "#FFF", "#FFF", "#494949"]}
                zIndex="2"
              >
                {title}
              </Box>
              <Box
                whiteSpace="pre-line"
                fontWeight="300"
                fontSize={["12px", "14px", "16px", "18px"]}
                lineHeight="142%"
                letterSpacing="-0.00240557px"
                color={["#FFF", "#FFF", "#FFF", "#494949"]}
                zIndex="2"
              >
                {text}
              </Box>
            </Flex>
            <Box
              position="absolute"
              right="0"
              bottom="0"
              width={["100%", "100%", "100%", "50%"]}
              minH="100%"
              background={[
                `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #C4C4C4 url(${IMAGES_PATH}/${imageUrl}) no-repeat`,
                `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #C4C4C4 url(${IMAGES_PATH}/${imageUrl}) no-repeat`,
                `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #C4C4C4 url(${IMAGES_PATH}/${imageUrl}) no-repeat`,
                `url(${IMAGES_PATH}/${imageUrl}) no-repeat`,
              ]}
              backgroundSize="cover !important"
              backgroundPosition="center"
            ></Box>
          </Flex>
        </Container>
      </Box>
    </SwiperSlide>
  );
};

export default CustomSliderItem;
