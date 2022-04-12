import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";
import React from "react";
import { useTranslation } from "next-i18next";

export const PvrTitle = () => {
  const breadCrumbs = useBreadCrumbs();
  const { t } = useTranslation();

  return (
    <Title
      background={`url(${IMAGES_PATH}/pvrTitle.png)`}
      pb="191px"
      pt="211px"
      title={t("titles:pvr")}
      text={t("titles:pvrText")}
      breadCrumb={breadCrumbs["/pvr"]}
    />
  );
};
