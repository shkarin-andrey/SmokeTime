import { initialValuesOrderBuy } from "./type";
import * as Yup from "yup";

export const initialValues: initialValuesOrderBuy = {
  lastName: "",
  firstName: "",
  patronymic: "",
  tel: "",
  address: "",
  city: "",
};

export const validationSchema = Yup.object({
  lastName: Yup.string()
    .required("Заполните поле с фамилией"),
  firstName: Yup.string()
    .required("Заполните поле с именем"),
  patronymic: Yup.string()
    .required("Заполните поле с отчеством"),
  tel: Yup.string()
    .required("Заполните поле с номером"),
  address: Yup.string()
    .required("Заполните поле с адресом"),
  city: Yup.string().required("Заполните поле с городом"),
});