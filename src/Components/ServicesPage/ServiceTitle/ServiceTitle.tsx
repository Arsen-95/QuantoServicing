import { useTranslation } from "react-i18next";

import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";
import { Title } from "Components/Common/Title";

export const ServiceTitle = () => {
  const breadCrumbs = useBreadCrumbs();
  const { t } = useTranslation();
  return (
    <Title
      background={`url(${IMAGES_PATH}/servicesTitle.png) no-repeat`}
      pt="220px"
      pb="240px"
      title={t("titles:services")}
      text={t("titles:servicesText")}
      breadCrumb={breadCrumbs["/services"]}
    />
  );
};
