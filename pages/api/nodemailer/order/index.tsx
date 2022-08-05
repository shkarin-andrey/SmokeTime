import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { iCart } from "../../../../type/cart";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { lastName, firstName, patronymic, tel, address, city } =
    req.body.data.values;
  const { cart, countLocal, sumLocal } = req.body.data.card;

  const headTable = [
    "№",
    "Название",
    "Кол-во, шт",
    "Цена за шт",
    "Сумма, руб.",
  ];

  const sendMessage = `
        <h1>Заказ с сайта SmokeTimeOpt</h1> </br>
        <strong>Имя:</strong> ${firstName},</br>
        <strong>Фамилия:</strong> ${lastName},</br>
        <strong>Отчество:</strong> ${patronymic},</br>
        <strong>Телефон:</strong> ${tel},</br>
        <strong>Адрес СДЭК:</strong> ${address},</br>
        <strong>Город:</strong> ${city}</br></br>
        <table>
          <thead>
            <tr>
              ${headTable.map((item: string) => `<th>${item}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${cart.map(
              (item: iCart, i: number) =>
                ` <tr>
                    <td>${i + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.count}</td>
                    <td>${item.price}</td>
                    <td>${item.sum}</td>
                  </tr>`
            )}
          </tbody>
        </table></br>
        <h2>Итого:</h2>
        <strong>Кол-во:</strong> ${countLocal},</br>
        <strong>Сумма:</strong> ${sumLocal}

    `;

  try {
    let transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shkarinandrew1@gmail.com",
        pass: "uuwwarmlkjwbkepa",
      },
    });

    let info = await transporter.sendMail({
      from: `Заказ с сайта SmokeTimeOpt 👻`,
      to: "smoke-time-opt@mail.ru",
      subject: "Заказ с сайта SmokeTimeOpt ✔",
      html: sendMessage,
    });

    res.status(200).json({ message: "Все ок" });
  } catch (error) {
    res.status(400).json(error);
  }
}

export default sendEmail;
