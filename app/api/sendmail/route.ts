// /api/sendmail.ts
import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: any, res: NextApiResponse) {
  // @ts-ignore
  const { firstName, lastName, email, message } = await req.json();
  try {
    // Create a transporter using your email configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: "bookmybox.net@gmail.com",
      to: process.env.SMTP_MAIL,
      subject: "Portfolio Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.send("done")
  } catch (error) {
    res.send("error");
    // handle Error
  }
}
