
export default function mailSender(req, res) {

  const { name, email, message, subject } = req.body

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.USER_MAIL,
    to: process.env.USER_MAIL,
    subject: `Formulario de Contacto de Web Coopcycle`,
    text: `Nombre del contacto: ${name}\nEmail: ${email}\nMotivo del contacto: ${subject}\nMensaje:${message}`,
    html: `
      <div>
      <h1>Mensaje Automático del Formulario de Contacto de Coopcycle</h1>
      <h3>Nombre del contacto: ${name}</h3>
      <h3>Email: ${email}</h3>
      <h3>Motivo del contacto: ${subject}</h3>
      <h3>Mensaje: </h3>
      <p>${message}</p>
      </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      res.send(err)
    else
      res.send(info)
  })

} 