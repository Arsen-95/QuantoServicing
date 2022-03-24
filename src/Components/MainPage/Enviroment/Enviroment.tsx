import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import { SlideItem } from "./SlideItem";

export const Enviroment = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideItem
            title="охрана окружающей среды"
            text="Мы осознаем, что производственный процесс в целом представляет потенциальную угрозу для окружающей среды и признаем свою ответственность перед обществом и будущими поколениями за сохранность и бережное отношение к флоре и фауне, рациональное использование природных ресурсов."
            imageUrl="slide1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="социальное обеспечение работников"
            text="Социальное обеспечение работника, включая социальное страхование, – это одно из наших обязательств."
            imageUrl="slide2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="высокий уровень компетенции"
            text="Стандарты HSE реализуются через единую систему управления производственной безопасностью (ЕСУПБ). Она позволяет обеспечивать безопасные условия труда на всех стадиях рабочего процесса."
            imageUrl="slide3.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
