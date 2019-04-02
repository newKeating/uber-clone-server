import dotenv from "dotenv";
import Mailgun from "mailgun-js";

dotenv.config();

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandbox652b1053d0f146aeb92a41853efb152e.mailgun.org"
});

// const sendEmail = (to:string, subject:string, html:string)

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "kroits09@gmail.com",
    to: "kroits09@gmail.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
