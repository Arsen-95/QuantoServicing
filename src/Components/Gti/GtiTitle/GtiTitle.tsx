import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const GtiTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/gtiTitle.png) no-repeat `}
      pb="191px"
      pt={["178px", "147px", "147px", "211px"]}
      title="геолого-технологические исследования"
      text="Компания Quanto Servicing предоставляет целый комплекс  услуг по Геолого-технологическим исследованиям"
      breadCrumb={[
        ["Главная", "/"],
        ["Услуги", "/services"],
        ["Геолого-технологические исследования", "/gti"],
      ]}
    />
  );
};
