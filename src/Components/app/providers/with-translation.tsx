import { appWithTranslation } from "next-i18next";

export const withTranslation = (component: any) => () => {
  return appWithTranslation(component());
};
