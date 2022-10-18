import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {

  const {name, email, message, subject} = req.body

  const msg = {
    to: 'sebastianealfaro@gmail.com', // Change to your recipient
    from: `sebastianealfaro@gmail.com`, // Change to your verified sender
    subject: `Formulario de Contacto de Web Coopcycle`,
    html: `
      <div>
      <h1>Mensaje Automático del Formulario de Contacto de Coopcycle</h1>
      <h3>Nombre del contacto: ${name}</h3>
      <h3>Email: ${email}</h3>
      <h3>Motivo del contacto: ${subject}</h3>
      <h3>Mensaje: </h3>
      <p>${message}</p>
     </div>`,
  } 

  sendgrid
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

export default sendEmail;