import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.module.css";

import { Mousewheel, Scrollbar } from "swiper";
import { Box } from "@chakra-ui/react";
import Year from "./Year";

export const Years = () => {
  const years = [2018, 2019, 2020, 2021];
  const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(0);
  const selectedYear = useMemo(() => {
    return years[swiperActiveIndex];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperActiveIndex]);
  console.log(selectedYear);

  return (
    <Box h="100%">
      <Swiper
        direction={"vertical"}
        centeredSlides={true}
        slidesPerView={5}
        mousewheel={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Mousewheel, Scrollbar]}
        className="years-vertical-slider"
        style={{ height: "400px", width: "500px", overflow: "hidden" }}
        onSlideChange={(a) => {
          console.log(a);

          setSwiperActiveIndex(a.activeIndex);
        }}
      >
        {years.map((year, index) => (
          <>
            <SwiperSlide key={year}>
              {<Year years={years}>{year}</Year>}
              {index + 1 < years.length && (
                <>
                  <Box
                    mb="13px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box
                    mb="13px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box
                    mb="13px"
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
