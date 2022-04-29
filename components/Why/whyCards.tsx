import Delivery from "../../public/icons/delivery";
import Original from "../../public/icons/original";
import Price from "../../public/icons/price";

export const whyCards = [
  {
    title: "Самые низкие цены",
    descr: "Если Вы нашли цену ниже нашей, то сообщите нам и мы договоримся.",
    component: <Price />,
  },
  {
    title: "Оригинальная продукция",
    descr:
      "Мы являемся дистрибютерами таких брендов как: Hasky, VOODOO и другие.",
    component: <Original />,
  },
  {
    title: "Быстрая доставка",
    descr: "Отправка в любой город через СДЭК",
    component: <Delivery />,
  },
];
