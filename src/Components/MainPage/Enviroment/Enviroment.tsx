// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, EffectFade } from "swiper";
// import { SlideItem } from "./SlideItem";

// export const Enviroment = () => {
//   return (
//     <>
//       <Swiper
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         effect="fade"
//         fadeEffect={{
//           crossFade: true,
//         }}
//         modules={[Autoplay, EffectFade]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <SlideItem
//             title="охрана окружающей среды"
//             text="Мы осознаем, что производственный процесс в целом представляет потенциальную угрозу для окружающей среды и признаем свою ответственность перед обществом и будущими поколениями за сохранность и бережное отношение к флоре и фауне, рациональное использование природных ресурсов."
//             imageUrl="slide1.png"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <SlideItem
//             title="социальное обеспечение работников"
//             text="Социальное обеспечение работника, включая социальное страхование, – это одно из наших обязательств."
//             imageUrl="slide2.png"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <SlideItem
//             title="высокий уровень компетенции"
//             text="Стандарты HSE реализуются через единую систему управления производственной безопасностью (ЕСУПБ). Она позволяет обеспечивать безопасные условия труда на всех стадиях рабочего процесса."
//             imageUrl="slide3.png"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

import { CustomSlider } from "Components/Common/CustomSlider";
import React from "react";

import "swiper/css";
import "swiper/css/effect-fade";

export const Enviroment = () => {
  return (
    <CustomSlider
      sliderData={[
        {
          title: "Охрана окружающей среды",
          imageUrl: "mainSlide1.png",
          text: "Мы осознаем, что производственный процесс в целом представляет потенциальную угрозу для окружающей среды и признаем свою ответственность перед обществом и будущими поколениями за сохранность и бережное отношение к флоре и фауне, рациональное использование природных ресурсов.",
        },
        {
          title: "Cоциальное обеспечение работников",
          text: "Социальное обеспечение работника, включая социальное страхование, – это одно из наших обязательств.",
          imageUrl: "mainSlide2.png",
        },
        {
          title: "Высокий уровень компетенции",
          text: "Стандарты HSE реализуются через единую систему управления производственной безопасностью (ЕСУПБ). Она позволяет обеспечивать безопасные условия труда на всех стадиях рабочего процесса.",
          imageUrl: "mainSlide3.png",
        },
      ]}
    />
  );
};
