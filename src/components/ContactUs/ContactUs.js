import ContactForm from "../../../common/components/ContactForm/ContactForm";

export default function ContactUs(){
  return(
    <>
      <section id="form" className="contactUsBox">
        <div className="contentBox">
          <div className="titleBox">
            <h1>¡Hola! <br /> ¿Querés ser parte de la red de <br /> cooperativas de reparto?</h1>
          </div>
          <div className="formBox">
            <ContactForm />
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .contactUsBox{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 1rem 0;

          }
          .contentBox{
            width: 85%;
            height: 100%;
            margin-top: 4rem;
            margin-bottom: 4rem;
          }
        `}
      </style>
    </>
  )
}