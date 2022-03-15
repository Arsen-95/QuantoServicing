import React, { useRef } from "react";
import PostItem from "./PostItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Posts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      freeMode={true}
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={false}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
      onBeforeInit={(swiper) => {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }}
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
  );
};

export default Posts;
