import { Figure } from "Components/Common/Figure";
import React from "react";
import { useTranslation } from "next-i18next";

export const GisDescription = () => {
  const { t } = useTranslation();

  return (
    <Figure
      backgroundColor="#FAFAFA"
      title={t("headers:gis")}
      text={t("descriptions:gis")}
      picture="gisDescription.svg"
    />
  );
};
