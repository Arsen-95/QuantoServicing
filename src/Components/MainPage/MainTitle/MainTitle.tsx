import { Box } from "@chakra-ui/react";
import { Title } from "Components/Common/Title";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";
import Services from "./Services";

export const MainTitle = () => {
  return (
    <Title
      title="исследуя горизонты расширяем возможности"
      background={`url(${IMAGES_PATH}/mainTitle.png) no-repeat`}
      text="Компания Quanto предоставляет целый ряд  услуг на нефтегазовом рынке Узбекистана"
      pt="158px"
      pb={["0px", "140px", "140px", "30px"]}
    >
      <Box display={["none", "none", "none", "block"]}>
        <Services />
      </Box>
    </Title>
  );
};
