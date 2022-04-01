import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.module.css";

import { Mousewheel, Scrollbar } from "swiper";
import { Box } from "@chakra-ui/react";
import Year from "./Year";

export const Years = () => {
  const years = [2019, 2020, 2021];
  const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(0);
  const selectedYear = useMemo(() => {
    return years[swiperActiveIndex];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperActiveIndex]);

  return (
    <Box h="100%">
      <Swiper
        loop
        direction={"vertical"}
        centeredSlides={true}
        slidesPerView={5}
        mousewheel={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Mousewheel, Scrollbar]}
        className="years-vertical-slider"
        style={{ height: "350px", width: "260px", overflow: "hidden" }}
        onSlideChange={(a) => {
          setSwiperActiveIndex(a.realIndex);
        }}
      >
        {years.map((year, index) => (
          <>
            <SwiperSlide key={year}>
              {<Year years={years}>{year}</Year>}
              {index < years.length && (
                <>
                  <Box
                    mb="10px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box
                    mb="10px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box
                    mb="10px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box width="7px" height="1px" bgColor="#8C949D"></Box>
                </>
              )}
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </Box>
  );
};
