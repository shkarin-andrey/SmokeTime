import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  sendgrid.setApiKey(process.env.API_SENDGRID_KEY);

  const msg = {
    to: "chudik163@yandex.ru", // Your email where you'll receive emails
    from: "shkarinandrew@mail.ru", // your website email address here
    subject: `ЧТо-то`,
    html: `<div>You've got a mail</div>`,
  }

  sendgrid.send(msg)
    .then(data => res.status(200).json({ error: "" }))
    .catch(error => res.status(error.statusCode || 500).json({ error: error.message }))
}

export default sendEmail;