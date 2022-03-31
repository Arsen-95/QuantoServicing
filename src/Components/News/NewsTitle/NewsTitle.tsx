import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const NewsTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/newsTitle.png) no-repeat`}
      pb="297px"
      pt="211px"
      title="Новости"
      breadCrumb={[
        ["Главная", "/"],
        ["Новости", "/news"],
      ]}
    />
  );
};
