const mailer = require("nodemailer");
export default function handler(req, res) {
  const sender = "newsletterbot379@gmail.com";
  var transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: sender,
      pass: "liippiqozztjjojb",
    },
  });

  var mailOptions = {
    from: sender,
    to: "kushal.s.2005@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(200).json({ error: error });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ name: info.response });
    }
  });
  console.log("waauwa");
}
