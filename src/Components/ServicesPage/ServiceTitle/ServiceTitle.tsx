import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const ServiceTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/servicesTitle.png)`}
      pt="220px"
      pb="240px"
      title="услуги"
      text="Компания Quanto Servicing предоставляет комплекс услуг для ознакомления "
      breadCrumb={[
        ["Главная", "/"],
        ["Услуги", "/services"],
      ]}
    />
  );
};
