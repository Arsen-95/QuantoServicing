import { useTranslation } from "react-i18next";

import { Figure } from "Components/Common/Figure";

export const PvrDescription = () => {
  const { t } = useTranslation();
  return (
    <>
      <Figure
        picture="pvrDescription.png"
        title={t("headers:pvr")}
        text={t("descriptions:pvr")}
        backgroundColor="#FAFAFA"
        info={true}
      />
    </>
  );
};
