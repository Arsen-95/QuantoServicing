import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const PvrTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/pvrTitle.png)`}
      pb="191px"
      pt="211px"
      title="прострелочно-взрывные работы"
      text="Компания Quanto Servicing предоставляет целый комплекс  услуг по Прострелочно-взрывным работам"
      breadCrumb={[
        ["Главная", "/"],
        ["Услуги", "/services"],
        ["Прострелочно-взрывные работы", "/pvr"],
      ]}
    />
  );
};
