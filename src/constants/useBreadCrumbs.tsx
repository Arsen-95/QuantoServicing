import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useBreadCrumbs = () => {
  const { t } = useTranslation("navigation");

  const breadCrumbs = useMemo(
    () => ({
      "/about": [
        [`${t("main")}`, "/"],
        [`${t("about")}`, "/about"],
      ],
      "/gti": [
        [`${t("main")}`, "/"],
        [`${t("services")}`, "/services"],
        [`${t("gti")}`, "/gti"],
      ],
      "/gis": [
        [`${t("main")}`, "/"],
        [`${t("services")}`, "/services"],
        [`${t("gis")}`, "/gis"],
      ],
      "/pvr": [
        [`${t("main")}`, "/"],
        [`${t("services")}`, "/services"],
        [`${t("pvr")}`, "/pvr"],
      ],
      "/news": [
        [`${t("main")}`, "/"],
        [`${t("news")}`, "/news"],
      ],
      "/documents": [
        [`${t("main")}`, "/"],
        [`${t("documents")}`, "/documents"],
      ],
      "/services": [
        [`${t("main")}`, "/"],
        [`${t("services")}`, "/services"],
      ],
    }),
    [t]
  );
  return breadCrumbs;
};

export default useBreadCrumbs;
