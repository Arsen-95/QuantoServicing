import { useTranslation } from "next-i18next";

import useBreadCrumbs from "constants/useBreadCrumbs";
import { Title } from "Components/Common/Title";
import { IMAGES_PATH } from "constants/settings";

export const AboutTitle = () => {
  const [t] = useTranslation();
  const breadCrumbs = useBreadCrumbs();
  return (
    <Title
      pt="232px"
      pb="276px"
      title={t("titles:about")}
      background={`url(${IMAGES_PATH}/aboutTitle.png) no-repeat`}
      breadCrumb={breadCrumbs["/about"]}
    />
  );
};
