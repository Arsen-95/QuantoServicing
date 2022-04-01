import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper";
import CustomSliderItem from "./CustomSliderItem";

export const CustomSlider: FC<any> = ({ sliderData }) => {
  return (
    <Box position="relative">
      <Swiper
        spaceBetween={30}
        // navigation={{
        //   prevEl: prev,
        //   nextEl: next,
        // }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliderData.map((slider: any) => (
          <SwiperSlide key={slider.title}>
            <CustomSliderItem
              title={slider.title}
              text={slider.text}
              imageUrl={slider.imageUrl}
              arr={slider?.arr && slider.arr}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Flex pos="absolute" bottom="30px" left="40%" zIndex={10}>
        <Box
          border="1px solid #494949"
          mr="9px"
          ref={prevRef}
          h="37px"
          w="37px"
          background={`#FFF url(${ICONS_PATH}/arrowLeftBlack.svg) no-repeat center`}
          cursor="pointer"
          _hover={{
            background: `#365164 url(${ICONS_PATH}/arrowLeftWhite.svg) no-repeat center`,
          }}
        ></Box>
        <Box
          border="1px solid #494949"
          ref={nextRef}
          h="37px"
          w="37px"
          background={`#FFF url(${ICONS_PATH}/arrowRightBlack.svg) no-repeat center`}
          cursor="pointer"
          _hover={{
            background: `#365164 url(${ICONS_PATH}/arrowRightWhite.svg) no-repeat center`,
          }}
        ></Box>
      </Flex> */}
    </Box>
  );
};
