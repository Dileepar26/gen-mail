const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


const mailSender = async (email_id, subject, body) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: email_id,
      subject: subject,
      text: body,
    });
    // console.log(info)
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error(err)
  }
}


module.exports = {
  mailSender
}
