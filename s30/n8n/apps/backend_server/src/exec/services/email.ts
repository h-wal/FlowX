import nodemailer from "nodemailer";

interface EmailRequest {
  body: {
    fromEmail: string,
    service: string,
    userAuth: string,
    userPass: string,
    toEmail: string,
    subject?: string,
    text?: string,
    html?: string
  }
}

export async function EmailFunction(props: EmailRequest){

  const toEmail = props.body.toEmail;
  const fromEmail = props.body.fromEmail
  const transporter = nodemailer.createTransport({
    service: "smtp", 
    auth: {
      user: props.body.userAuth,
      pass: props.body.userPass, 
    },
  });

  // 2. Define the email options
  const mailOptions = {
    from: props.body.fromEmail,
    to: props.body.toEmail,
    subject: props.body.subject || "No subject",
    text: props.body.text || "",
    html: props.body.html || "",
  };


  try{
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent", info.messageId)
    return({
      success: true, 
      messageId: info.messageId
    })
  } catch(error){
    console.log("Error Sending Message"+ error)
    return({
      success: false, error
    })
  };

}

