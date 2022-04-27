import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Flex } from "@chakra-ui/react";

import { ICONS_PATH } from "../../../constants/settings";
import { PostItem } from "Components/Common/PostItem";

const Posts = () => {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    setPrev(prevRef.current);
    setNext(nextRef.current);
  }, []);

  return (
    <Box pos="relative">
      <Swiper
        loop
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1150: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        centeredSlides={true}
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
            picture="post1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="post2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="post3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="post1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="post2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="post3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из основных обязательств, которое берет на себя работодатель. "
            picture="post2.png"
          />
        </SwiperSlide>
      </Swiper>
      <Flex
        pos="absolute"
        top={["110%", "-80px", "-80px"]}
        right={["50%", "0"]}
        transform={["translateX(50%)", "translateX(0)"]}
      >
        <Box
          as="button"
          mr="9px"
          ref={prevRef}
          h="37px"
          w="37px"
          background={`url(${ICONS_PATH}/arrowLeftBlack.svg) no-repeat center`}
          _hover={{
            background: `#365164 url(${ICONS_PATH}/arrowLeftWhite.svg) no-repeat center`,
          }}
          cursor="pointer"
          transition="all 0.3s"
          border="1px solid #B7B7B7"
        ></Box>
        <Box
          as="button"
          _hover={{
            background: `#365164 url(${ICONS_PATH}/arrowRightWhite.svg) no-repeat center`,
          }}
          ref={nextRef}
          h="37px"
          w="37px"
          background={`url(${ICONS_PATH}/arrowRightBlack.svg) no-repeat center`}
          cursor="pointer"
          transition="all 0.3s"
          border="1px solid #B7B7B7"
        ></Box>
      </Flex>
    </Box>
  );
};

export default Posts;
