import { keyframes } from "@chakra-ui/react";
import { Title } from "Components/Common/Title";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";
import Services from "./Services";

export const MainTitle = () => {
  return (
    <Title
      title="исследуя горизонты, расширяем возможности"
      background={`linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #C4C4C4 url(${IMAGES_PATH}/worker.png) no-repeat 50%`}
      text="Компания Quanto предоставляет целый ряд  услуг на нефтегазовом рынке Узбекистана"
      pt={158}
    >
      <Services />
    </Title>
  );
};
