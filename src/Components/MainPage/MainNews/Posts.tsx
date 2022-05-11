import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Flex } from "@chakra-ui/react";

import { ICONS_PATH } from "../../../constants/settings";
import { PostItem } from "Components/Common/PostItem";

const Posts = ({ posts, eventType }: any) => {
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
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: prev,
          nextEl: next,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {posts.map((post: any) => (
          <SwiperSlide className="centered__slide" key={post.id}>
            <PostItem post={post} eventType={eventType} />
          </SwiperSlide>
        ))}
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
