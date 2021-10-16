const nodemailer = require("nodemailer");
const { View } = require('grandjs');
const MailTemplate = View.importJsx('./template/MailVerifyTemplate.jsx');
const { createEmailToken } = require("../JWT/jwt");

const sendEmail = (res, type, hash, receiver, displayName) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_EMAIL_PASS,
    },
  });

  const emailToken = createEmailToken(hash);
  const verifyUrl = `${process.env.DOMAIN}/auth/verify/user/${emailToken}`;
  let templateVerify = View.renderToHtml(MailTemplate, {
    displayName,
    verifyUrl
  })

  // email send link
  const mailOptions = {
    from: `noreply ${process.env.NODE_MAILER_EMAIL}`,
    to: receiver,
    subject:
      type === "confirm"
        ? "Verify your email for Tech Social"
        : "Reset your password for Tech Social",
    html: templateVerify,
    attachments: {
      filename: 'logo.png',
      path: `${__dirname}/template/imgs/logo.png`,
      cid: 'tech-social-logo'
    }
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(400).json({ error });
    } else {
      res.status(201).json(`Click the link we sent to ${receiver} to complete your account set-up.`);
    }
  });
};

module.exports = sendEmail;
