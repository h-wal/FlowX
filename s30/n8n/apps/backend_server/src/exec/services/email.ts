import nodemailer from "nodemailer";

type EmailParams = {
  from: string,
  to: string,
  subject: string,
  text? : string,
  html? : string
  host : string,
  port : number,
  authEmail: string,
  authPass: string,

}

export async function EmailFunction({from, to, subject, text, html, host, port, authEmail, authPass}: EmailParams) {

  console.log("email details",from, to, subject, text, html, host, port, authEmail, authPass)
  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false, // STARTTLS
    auth: {
      user: authEmail, // must match
      pass: authPass         // your Gmail App Password
    },
  });

  const mailOptions = {
    from: from,  // must match user
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error Sending Message", error);
    return { success: false, error };
  }
}
