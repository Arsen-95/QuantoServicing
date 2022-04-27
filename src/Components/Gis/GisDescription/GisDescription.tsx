import { useTranslation } from "next-i18next";

import { Figure } from "Components/Common/Figure";

export const GisDescription = () => {
  const { t } = useTranslation();

  return (
    <Figure
      backgroundColor="#23242B"
      title={t("headers:gis")}
      text={t("descriptions:gis")}
      picture="gisDescription.svg"
    />
  );
};
