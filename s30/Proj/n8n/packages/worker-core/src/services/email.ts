import nodemailer from "nodemailer";

type EmailParams = {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
  host: string;
  port: number;
  authEmail: string;
  authPass: string;
};

export async function EmailFunction({
  from,
  to,
  subject,
  text,
  html,
  host,
  port,
  authEmail,
  authPass,
}: EmailParams) {
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth: {
      user: authEmail,
      pass: authPass,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true as const, messageId: info.messageId };
  } catch (error) {
    return { success: false as const, error };
  }
}
