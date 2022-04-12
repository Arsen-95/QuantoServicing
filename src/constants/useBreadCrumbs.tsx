import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useBreadCrumbs = () => {
  const { t } = useTranslation();

  const breadCrumbs = useMemo(
    () => ({
      "/about": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:about")}`, "/about"],
      ],
      "/gti": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:services")}`, "/services"],
        [`${t("titles:gti")}`, "/gti"],
      ],
      "/gis": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:services")}`, "/services"],
        [`${t("titles:gis")}`, "/gis"],
      ],
      "/pvr": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:services")}`, "/services"],
        [`${t("titles:pvr")}`, "/pvr"],
      ],
      "/news": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:news")}`, "/news"],
      ],
      "/documents": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:documents")}`, "/documents"],
      ],
      "/services": [
        [`${t("titles:mainPage")}`, "/"],
        [`${t("titles:services")}`, "/services"],
      ],
    }),
    [t]
  );
  return breadCrumbs;
};

export default useBreadCrumbs;
