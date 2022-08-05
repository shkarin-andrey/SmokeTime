import { initialValuesContactsState } from "./type";
import * as Yup from "yup";

export const initialValuesContacts: initialValuesContactsState = {
  firstName: "",
  phone: "",
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(20, "Поле с именем должно содержать не более 20 символов")
    .required("Заполните поле с именем"),
  phone: Yup.string().required("Введите номер телефона"),
});
