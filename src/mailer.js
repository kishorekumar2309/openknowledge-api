import nodemailer from "nodemailer";

const from = '"Open Knowledge" <info@openknowledge.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
  const tranport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Open Knowledge",
    text: `
    Welcome to Open Knowledge. Please, confirm your email.
     ${user.generateConfirmationUrl()}
    `
  };
  tranport.sendMail(email);
}
