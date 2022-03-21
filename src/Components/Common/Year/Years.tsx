import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.module.css";

import { Mousewheel, Scrollbar } from "swiper";
import { Box } from "@chakra-ui/react";
import Year from "./Year";

export const Years = () => {
  const current = new Date().getFullYear();

  const [selected, setSelected] = useState();

  return (
    <Box height="460px">
      <Swiper
        loop
        direction={"vertical"}
        centeredSlides={true}
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Scrollbar, Mousewheel]}
        className="mySwiper"
        style={{ height: "400px", width: "500px", overflow: "hidden" }}
      >
        <SwiperSlide>
          {<Year setSelected={setSelected}>{current}</Year>}
        </SwiperSlide>
        <SwiperSlide>
          {<Year setSelected={setSelected}>{current + 1}</Year>}
        </SwiperSlide>
        <SwiperSlide>
          {<Year setSelected={setSelected}>{current - 3}</Year>}
        </SwiperSlide>
        <SwiperSlide>
          {<Year setSelected={setSelected}>{current - 2}</Year>}
        </SwiperSlide>
        <SwiperSlide>
          {<Year setSelected={setSelected}>{current - 1}</Year>}
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
