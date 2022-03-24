import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import React from "react";

const AboutTitle = () => {
  return (
    <Title
      pt={232}
      title="о компании"
      background={`url(${IMAGES_PATH}/about.png) no-repeat`}
    />
  );
};

export default AboutTitle;
