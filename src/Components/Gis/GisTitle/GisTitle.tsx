import { Box, Container } from "@chakra-ui/react";
import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const GisTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/gisTitle.png) no-repeat `}
      pb="191px"
      pt="211px"
      title="геофизические исследования скважин"
      text="Компания Quanto Servicing предоставляет целый комплекс  услуг по  Геофизическим исследованиям скважин"
      breadCrumb={[
        ["Главная", "/"],
        ["Услуги", "/services"],
        ["Геофизические исследования скважин", "/gis"],
      ]}
    />
  );
};
