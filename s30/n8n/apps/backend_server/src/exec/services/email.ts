import nodemailer from "nodemailer";

export async function EmailFunction() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: "harsh2102agarwal@gmail.com", // must match
      pass: "rlzscmaotrsnwstp",         // your Gmail App Password
    },
  });

  const mailOptions = {
    from: "harsh2102agarwal@gmail.com",   // must match user
    to: "souravkumarsahu04@gmail.com",
    subject: "MADHARCHODH BODY COUNT 4",
    text: "",
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
