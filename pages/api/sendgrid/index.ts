import type { NextApiRequest, NextApiResponse } from "next";
import { setApiKey, send } from "@sendgrid/mail";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    // @ts-ignore
    setApiKey(process.env.API_SENDGRID_KEY);

    // console.log("REQ.BODY", req.body);
    await send({
      to: "shkarinandrew@mail.ru", // Your email where you'll receive emails
      from: "shkarinandrew@mail.ru", // your website email address here
      subject: `ЧТо-то`,
      html: `<div>You've got a mail</div>`,
    })
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;