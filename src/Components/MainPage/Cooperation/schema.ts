import * as yup from "yup";

export const cooperationSceme = yup.object().shape({
  name: yup.string().required('Это обязательное поле').transform(value => value.trim()),
  phone: yup.number().required('Это обязательное поле'),
  email: yup.string().required('Это обязательное поле').email('Проверьте корректность email'),
  message: yup.string().required('Введите сообщение'),
})