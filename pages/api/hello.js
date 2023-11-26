const mailer = require("nodemailer");
export default function handler(req, res) {
  const sender = process.env.EMAIL;
  var transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: sender,
      pass: process.env.PASS,
    },
  });
  const mail = req.query.email;

  var mailOptions = {
    from: sender,
    to: mail,
    subject: "Promptly From Product Hunt just launched",
    html: `
        <body style="">

          <div style="display: grid; grid-template-columns: 1fr; justify-content: center; padding: 10%; margin: auto; background: black; height: 100vh; width: 720px; font-family: Arial, Helvetica, sans-serif;">
            <h1 style="font-size: 40px; color: white; font-weight: 900; font-size:48px">Promptly Launched</h1>
            <h2 style="font-size: 30px; color: white; font-weight: 700;">The Most awaited chat gpt plugin is here</h2>
            <a style="text-decoration: none;" target="_blank" href="https://chrome.google.com/webstore/detail/promptly/epnfkpjgiijhljpdndpgfanleblneche">
                <div style="width: 100%; color: black;text-align: center; margin: 10px 0px; border-radius: 20px; padding: 30px 20px; background-color: white; font-weight: 650; font-size: 24px;">Download Now</div>
              </a>
              <a style="text-decoration: none;" target="_blank" href="https://github.com/kushalsrinivas/promptly-plugin" >

                  <div style="width: 100%; color: black;text-align: center; margin: 10px 0px; border-radius: 20px; padding: 30px 20px; background-color: white; font-weight: 650; font-size: 24px;">Git Hub </div>
              </a>
              <a style="text-decoration: none;" target="_blank" href="https://www.producthunt.com/posts/promptly-8">

                  <div style="width: 100%; color: black;text-align: center; margin: 10px 0px; border-radius: 20px; padding: 30px 20px; background-color: white; font-weight: 650; font-size: 24px;">Product Hunt </div>
                  </a>
          </div>

  </body>
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

  console.log("waauwa");
}
