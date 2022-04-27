import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper";

import CustomSliderItem from "./CustomSliderItem";
import { ICONS_PATH } from "constants/settings";

export const CustomSlider: React.FC<any> = ({ sliderData, bg }) => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    setNext(nextRef.current);
    setPrev(prevRef.current);
  }, []);

  return (
    <Box position="relative" bg={bg}>
      <Swiper
        loop
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
          <SwiperSlide key={Math.random()}>
            <CustomSliderItem
              title={slider.title}
              text={slider.text}
              imageUrl={slider.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Flex
        pos="absolute"
        bottom="30px"
        left="40%"
        zIndex={10}
        display={["none", "none", "none", "flex"]}
      >
        <Box
          border="1px solid #494949"
          mr="10px"
          ref={prevRef}
          h="37px"
          w="37px"
          background={`url(${ICONS_PATH}/arrowLeftBlack.svg) no-repeat center`}
          cursor="pointer"
          _hover={
            bg === "#393A47"
              ? {
                  background: `#23242B url(${ICONS_PATH}/arrowLeftWhite.svg) no-repeat center`,
                }
              : {
                  background: `#393A47 url(${ICONS_PATH}/arrowLeftWhite.svg) no-repeat center`,
                }
          }
          transition="all 0.3s"
        ></Box>
        <Box
          border="1px solid #494949"
          ref={nextRef}
          h="37px"
          w="37px"
          background={`url(${ICONS_PATH}/arrowRightBlack.svg) no-repeat center`}
          cursor="pointer"
          _hover={
            bg === "#393A47"
              ? {
                  background: `#23242B url(${ICONS_PATH}/arrowRightWhite.svg) no-repeat center`,
                }
              : {
                  background: `#393A47 url(${ICONS_PATH}/arrowRightWhite.svg) no-repeat center`,
                }
          }
          transition="all 0.3s"
        ></Box>
      </Flex>
    </Box>
  );
};
