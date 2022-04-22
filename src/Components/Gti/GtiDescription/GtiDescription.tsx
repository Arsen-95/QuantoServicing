import { useTranslation } from "react-i18next";

import { Figure } from "Components/Common/Figure";

export const GtiDescription = () => {
  const { t } = useTranslation();

  return (
    <Figure
      backgroundColor="#FAFAFA"
      title={t("headers:gti")}
      text={t("descriptions:gti")}
      picture="gtiDescription.png"
    />
  );
};
