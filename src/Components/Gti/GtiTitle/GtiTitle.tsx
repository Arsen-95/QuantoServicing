import { useTranslation } from "next-i18next";

import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";

export const GtiTitle = () => {
  const { t } = useTranslation();
  const breadCrumbs = useBreadCrumbs();

  return (
    <Title
      background={`url(${IMAGES_PATH}/gtiTitle.png) no-repeat `}
      pt={["150px", "200px"]}
      title={t("titles:gti")}
      text={t("titles:gtiText")}
      breadCrumb={breadCrumbs["/gti"]}
    />
  );
};
