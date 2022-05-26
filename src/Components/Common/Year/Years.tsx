import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.module.css";
import { Mousewheel } from "swiper";
import { Box, Flex } from "@chakra-ui/react";

import Year from "./Year";

type YearsProps = {
  onScroll(year: number): void;
  yearsData: any;
};

export const Years: React.FC<YearsProps> = ({ onScroll, yearsData }: any) => {
  const years: number[] = yearsData;

  return (
    <Flex
      alignItems="center"
      // height={["156px", "200px", "150px", "200px", "228px"]}
      // overflow="hidden"
    >
      <Swiper
        direction={"vertical"}
        slideToClickedSlide={true}
        // slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        className="years-vertical-slider"
        style={{ height: "150px" }}
        onSlideChange={(a) => {
          onScroll(years[a.realIndex]);
        }}
      >
        {years.map((year: number, index: number) => (
          <SwiperSlide key={Math.random()}>
            <Year>{year}</Year>
            {index + 1 < years.length && (
              <>
                <Box mb="10px" width="7px" height="1px" bgColor="#8C949D"></Box>
                <Box mb="10px" width="7px" height="1px" bgColor="#8C949D"></Box>
                <Box mb="10px" width="7px" height="1px" bgColor="#8C949D"></Box>
                <Box width="7px" height="1px" bgColor="#8C949D"></Box>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
