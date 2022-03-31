import { Box, keyframes } from "@chakra-ui/react";
import { Title } from "Components/Common/Title";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";
import Services from "./Services";

export const MainTitle = () => {
  return (
    <Title
      title="исследуя горизонты расширяем возможности"
      background={`linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #C4C4C4 url(${IMAGES_PATH}/mainTitle.png) no-repeat 50%`}
      text="Компания Quanto предоставляет целый ряд  услуг на нефтегазовом рынке Узбекистана"
      pt="158px"
      pb={["140px", "140px", "140px", "30px"]}
    >
      <Box display={["none", "none", "none", "block"]}>
        <Services />
      </Box>
    </Title>
  );
};
