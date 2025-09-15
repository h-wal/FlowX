import express, { Router} from "express"
import type { Request, Response } from "express";
import nodemailer from "nodemailer";

const EmailRouter: Router = express.Router()

interface EmailRequest extends Request{
  body: {
    fromEmail: string,
    service: string,
    userAuth: string,
    userPass: string,
    toEmail: string,
    subject?: string,
    text?: string,
    html?: HTMLBaseElement
  }
}

async function EmailRouterFunction(req: Request, res: Response){

  const toEmail = req.body.toEmail;
  const fromEmail = req.body.fromEmail
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use "smtp.mailtrap.io", "Outlook365", etc.
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password", // not your Gmail password! (use App Passwords or OAuth)
    },
  });

  // 2. Define the email options
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient@example.com",
    subject: "Hello from Nodemailer",
    text: "This is a plain text email.",
    html: "<b>This is an HTML email!</b>",
  };

  // 3. Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}


EmailRouter.post("/", EmailRouterFunction)