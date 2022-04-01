import { Title } from "Components/Common/Title";
import { breadCrumbPvr, breadCrumbs } from "constants/breadCrumb";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const PvrTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/pvrTitle.png)`}
      pb="191px"
      pt="211px"
      title="прострелочно-взрывные работы"
      text="Прострелочно - Взрывные работы выполняются на месторождениях Республики Узбекистан с 2021 года "
      breadCrumb={breadCrumbs["/pvr"]}
    />
  );
};
