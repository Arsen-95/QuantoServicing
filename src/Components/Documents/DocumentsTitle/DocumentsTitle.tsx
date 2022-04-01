import { Title } from "Components/Common/Title";
import { breadCrumbDocuments, breadCrumbs } from "constants/breadCrumb";
import { IMAGES_PATH } from "constants/settings";
import React from "react";

export const DocumentsTitle = () => {
  return (
    <Title
      background={`url(${IMAGES_PATH}/documentsTitle.png) no-repeat`}
      pt="220px"
      pb="240px"
      title="Документация"
      text="Компания Quanto Servicing предоставляет материалы для ознакомления "
      breadCrumb={breadCrumbs["/documents"]}
    />
  );
};
