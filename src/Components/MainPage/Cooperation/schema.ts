import { useTranslation } from "react-i18next";
import * as yup from "yup";

export const CooperationSceme = () => {
  const { t } = useTranslation("errors");
  return yup.object().shape({
    name: yup
      .string()
      .required(t("required"))
      .transform((value) => value.trim()),
    phone: yup.number().typeError(t("onlyNumbers")).required(t("required")),
    email: yup
      .string()
      .required(t("required"))
      .email("Проверьте корректность email"),
    message: yup.string().required(t("message")),
  });
};
