import { Title } from "Components/Common/Title";
import { breadCrumbs } from "constants/breadCrumb";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const AboutTitle = () => {
  return (
    <Title
      pt="232px"
      pb="276px"
      title="о компании"
      background={`url(${IMAGES_PATH}/aboutTitle.png) no-repeat`}
      breadCrumb={breadCrumbs["/about"]}
    />
  );
};
