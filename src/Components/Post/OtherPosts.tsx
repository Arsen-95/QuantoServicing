import { Box, Text } from "@chakra-ui/react";
import { PostItem } from "Components/Common/PostItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const OtherPosts = ({ posts, eventType }: any) => {
  return (
    <Box>
      <Text
        as="h5"
        fontWeight="900"
        fontSize="40px"
        lineHeight="99.5%"
        mb="40px"
      >
        Другие публикации
      </Text>
      <Swiper
        direction="vertical"
        // loop
        freeMode={true}
        spaceBetween={20}
        // centeredSlides={true}
        modules={[FreeMode]}
        className="mySwiper"
        style={{
          height: "700px",
        }}
        slidesPerView={2}
      >
        {posts?.map((post: any) => (
          <SwiperSlide key={post.id}>
            <PostItem post={post} eventType={eventType} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
