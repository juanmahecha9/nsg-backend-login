//realizar envio de correo para los datos
const nodemailer = require("nodemailer");
const emailC = require("../private/mail.config.json");

function correo(correo, nombre) {
  /* Configuracion correo electronico */
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailC.mail.email,
      pass: emailC.mail.password,
    },
  });

  var mailOptions = {
    from: emailC.mail.email,
    to: correo,
    subject: "Registro",
    text: "Welcome to Naval Sickness Gamble",
    html:
      "<center> <b>Bienvenid@ " +
      nombre +
      ' a N.S.G <br> <p> Un juego donde desafiaras al Covid-19 </p> <br> <img src="https://mcdn.wallpapersafari.com/medium/84/23/zsEdkS.jpg" alt=" Infección "/>',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = correo;
