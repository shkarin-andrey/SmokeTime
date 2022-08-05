import { initialValuesContactsState } from "./type";
import * as Yup from "yup";

export const initialValuesContacts: initialValuesContactsState = {
  username: "",
  email: "",
  message: "",
};

export const validationSchema = Yup.object({
  username: Yup.string()
    .max(20, "Поле с именем должно содержать не более 20 символов")
    .required("Заполните поле с именем"),
  email: Yup.string()
    .email("Не верно введен E-mail адресс")
    .required("Введите поле с E-mail"),
  message: Yup.string().required("Введите сообщение"),
});