import { useTranslation } from "next-i18next";

import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";
import useBreadCrumbs from "constants/useBreadCrumbs";

export const PvrTitle = () => {
  const breadCrumbs = useBreadCrumbs();
  const { t } = useTranslation();

  return (
    <Title
      background={`url(${IMAGES_PATH}/pvrTitle.png)`}
      pb="191px"
      pt="211px"
      title={t("titles:pvr")}
      text={t("titles:pvrText")}
      breadCrumb={breadCrumbs["/pvr"]}
    />
  );
};
