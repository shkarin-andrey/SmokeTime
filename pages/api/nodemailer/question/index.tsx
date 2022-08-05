import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { username, email, message } = req.body.values;

  const sendMessage = `
        <h1>Вопросы с сайта SmokeTimeOpt</h1> </br>
        <strong>Имя:</strong> ${username},</br>
        <strong>E-mail:</strong> ${email},</br>
        <strong>Сообщение:</strong> ${message}
    `;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shkarinandrew1@gmail.com",
        pass: "uuwwarmlkjwbkepa",
      },
    });

    let info = await transporter.sendMail({
      from: `"Вопросы с сайта SmokeTimeOpt 👻" <${email}>`, // sender address
      to: "smoke-time-opt@mail.ru", // list of receivers
      subject: "Вопросы с сайта SmokeTimeOpt ✔", // Subject line
      html: sendMessage, // html body
    });

    res.status(200).json({ message: "Все ок" });
  } catch (error) {
    res.status(400).json(error);
  }
}

export default sendEmail;
