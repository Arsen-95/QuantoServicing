import React, { useEffect, useRef, useState } from "react";
import PostItem from "./PostItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Flex } from "@chakra-ui/react";
import { ICONS_PATH } from "../../../constants/settings";

const Posts = () => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    setPrev(prevRef.current);
    setNext(nextRef.current);
  }, []);

  SwiperCore.use([Navigation]);

  return (
    <Box pos="relative">
      <Swiper
        loop
        freeMode={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        navigation={{
          prevEl: prev,
          nextEl: next,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="Post2.png"
          />
        </SwiperSlide>
      </Swiper>
      <Flex pos="absolute" top="-76px" right="0">
        <Box
          mr="9px"
          ref={prevRef}
          h="30px"
          w="30px"
          background={`#365164 url(${ICONS_PATH}/arrowLeft.svg) no-repeat center`}
          borderRadius="50%"
          cursor="pointer"
        ></Box>
        <Box
          ref={nextRef}
          h="30px"
          w="30px"
          background={`#F2F2F2 url(${ICONS_PATH}/arrowRight.svg) no-repeat center`}
          borderRadius="50%"
          cursor="pointer"
        ></Box>
      </Flex>
    </Box>
  );
};

export default Posts;
