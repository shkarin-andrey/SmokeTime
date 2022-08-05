import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, phone, createAt } = req.body.values;

  const sendMessage = `
        <h1>Обратный звонок с сайта SmokeTimeOpt</h1> </br>
        <strong>Имя:</strong> ${firstName},</br>
        <strong>Номер телефона:</strong> ${phone},</br>
        <strong>Дата запроса:</strong> ${createAt}
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
      from: `Обратный звонок с сайта SmokeTimeOpt 👻`, // sender address
      to: "smoke-time-opt@mail.ru", // list of receivers
      subject: "Обратный звонок с сайта SmokeTimeOpt ✔", // Subject line
      html: sendMessage, // html body
    });

    res.status(200).json({ message: "Все ок" });
  } catch (error) {
    res.status(400).json(error);
  }
}

export default sendEmail;
