import * as yup from "yup";

export const cooperationSceme = yup.object().shape({
  name: yup.string().required('Это обязательное поле').transform(value => value.trim()),
  tel: yup.string().required('Это обязательное поле').transform(value => value.trim()).transform(value => value.replace(/_|-/g, '')).min(17, 'Заполните телефон полностью'),
  email: yup.string().required('Это обязательное поле').email('Проверьте корректность email'),
  message: yup.string().required('Введите сообщение'),
})