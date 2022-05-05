import { Box, Text } from "@chakra-ui/react";
import { PostItem } from "Components/Common/PostItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const OtherPosts = ({ posts }: any) => {
  return (
    <Box>
      <Text as="h5" fontWeight="900" fontSize="40px" lineHeight="99.5%">
        Другие публикации
      </Text>
      <Swiper
        // loop
        // freeMode={true}
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
        spaceBetween={50}
        // centeredSlides={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {posts.map((post: any) => (
          <SwiperSlide className="centered__slide" key={post.id}>
            <PostItem post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
