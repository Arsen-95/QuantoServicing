import { useTranslation } from "next-i18next";

import { Figure } from "Components/Common/Figure";

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
