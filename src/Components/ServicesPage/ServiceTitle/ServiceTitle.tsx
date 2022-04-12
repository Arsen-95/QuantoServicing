import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";
import React from "react";
import { useTranslation } from "react-i18next";

export const ServiceTitle = () => {
  const breadCrumbs = useBreadCrumbs();
  const { t } = useTranslation();
  return (
    <Title
      background={`url(${IMAGES_PATH}/servicesTitle.png)`}
      pt="220px"
      pb="240px"
      title={t("titles:services")}
      text={t("titles:servicesText")}
      breadCrumb={breadCrumbs["/services"]}
    />
  );
};
