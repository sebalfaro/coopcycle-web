import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const messageContent = ({name, message})=>{
  return(
    <div>
      <h1>Nombre: `${name}` </h1>
      <p>{message}</p>
    </div>
  )
}

async function sendEmail(req, res) {
  // try {
  //   console.log("REQ.BODY", req.body);
  //   await sendgrid.send({
  //     to: "sebastianealfaro@gmail.com", // Your email where you'll receive emails
  //     from: "sebastianealfaro@gmail.com", // your website email address here
  //     subject: `${req.body.subject}`,
  //     html: `<div>You've got a mail</div>`,
  //   });
  // } catch (error) {
  //   console.log('error', error);
  //   return res.status(error.statusCode || 500).json({ error: error.message });
  // }

  // return res.status(200).json({ error: "" });

  console.log("REQ.BODY", req.body);

  const msg = {
    to: 'sebastianealfaro@gmail.com', // Change to your recipient
    from: `sebastianealfaro@gmail.com`, // Change to your verified sender
    subject: `Nombre: ${req.body.name}, Motivo: ${req.body.subject}`,
    html: `
      <div>
      <h1>Nombre: ${req.body.name} </h1>
      <p>${req.body.message}</p>
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