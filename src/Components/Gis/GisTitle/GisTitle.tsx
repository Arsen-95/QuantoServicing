import { Box, Container } from "@chakra-ui/react";
import { Title } from "Components/Common/Title";
import { breadCrumbGis, breadCrumbs } from "constants/breadCrumb";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const GisTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/gisTitle.png) no-repeat `}
      pb="191px"
      pt="211px"
      title="геофизические исследования скважин"
      text="Геофизические - исследования скважин выполняются на месторождениях Республики Узбекистан с 2020 года "
      breadCrumb={breadCrumbs["/gis"]}
    />
  );
};
