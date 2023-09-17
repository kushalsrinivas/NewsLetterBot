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

  const mails = ["kushal.s.2005@gmail.com", "uzigangsterpubg@gmail.com"];
  mails.map((mail, index) => {
    var mailOptions = {
      from: sender,
      to: mail,
      subject: "Sending Email using Node.js",
      html: `
    <h1>wawooawoo</h2>
    `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(200).json({ error: error, mail: mail });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ success: info.response, mail: mail });
      }
    });
  });

  console.log("waauwa");
}
