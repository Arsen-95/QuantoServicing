import { Box, Flex } from "@chakra-ui/react";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper";
import CustomSliderItem from "./CustomSliderItem";
import { ICONS_PATH } from "constants/settings";

export const CustomSlider: FC<any> = ({ sliderData }) => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  console.log(nextRef);

  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    setNext(nextRef.current);
    setPrev(prevRef.current);
  }, []);

  return (
    <Box position="relative">
      <Swiper
        spaceBetween={30}
        navigation={{
          prevEl: prev,
          nextEl: next,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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

      <Flex pos="absolute" bottom="30px" left="40%" zIndex={10}>
        <Box
          border="1px solid #494949"
          mr="10px"
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
      </Flex>
    </Box>
  );
};
