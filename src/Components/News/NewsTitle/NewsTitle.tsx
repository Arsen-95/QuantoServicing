import { useTranslation } from "next-i18next";

import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";

export const NewsTitle = () => {
  const breadCrumbs = useBreadCrumbs();
  const { t } = useTranslation();

  return (
    <Title
      background={`url(${IMAGES_PATH}/newsTitle.png) no-repeat`}
      pt="230px"
      title={t("titles:news")}
      breadCrumb={breadCrumbs["/news"]}
    />
  );
};
