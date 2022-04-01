import { Title } from "Components/Common/Title";
import { breadCrumbGti, breadCrumbs } from "constants/breadCrumb";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const GtiTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/gtiTitle.png) no-repeat `}
      pb="191px"
      pt={["178px", "147px", "147px", "211px"]}
      title="геолого-технологические исследования"
      text="Геолого-технологические исследования выполняются на месторождениях Республики Узбекистан с 2019 года "
      breadCrumb={breadCrumbs["/gti"]}
    />
  );
};
