import { useTranslation } from "next-i18next";

import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";

export const GisTitle = () => {
  const { t } = useTranslation();
  const breadCrumbs = useBreadCrumbs();

  return (
    <Title
      background={`url(${IMAGES_PATH}/gisTitle.png) no-repeat `}
      pt={["150px", "150px", "200px"]}
      title={t("titles:gis")}
      text={t("titles:gisText")}
      breadCrumb={breadCrumbs["/gis"]}
    />
  );
};
