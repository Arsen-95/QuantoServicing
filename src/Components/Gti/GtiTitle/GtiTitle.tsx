import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import React from "react";
import { useTranslation } from "next-i18next";
import useBreadCrumbs from "constants/useBreadCrumbs";

export const GtiTitle = () => {
  const { t } = useTranslation();
  const breadCrumbs = useBreadCrumbs();

  return (
    <Title
      background={`url(${IMAGES_PATH}/gtiTitle.png) no-repeat `}
      pb="191px"
      pt={["178px", "147px", "147px", "211px"]}
      title={t("titles:gti")}
      text={t("titles:gtiText")}
      breadCrumb={breadCrumbs["/gti"]}
    />
  );
};
