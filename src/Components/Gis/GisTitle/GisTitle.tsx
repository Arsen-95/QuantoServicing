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
      pb="191px"
      pt={["178px", "147px", "147px", "211px"]}
      title={t("titles:gis")}
      text={t("titles:gisText")}
      breadCrumb={breadCrumbs["/gis"]}
    />
  );
};
