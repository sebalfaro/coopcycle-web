import ContactForm from "../../../common/components/ContactForm/ContactForm";

export default function ContactUs(){
  return(
    <>
      <section className="contactUsBox">
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
            height: 80vh;

            h1{
              font-size: 3rem;
            }
          }
          .contentBox{
            width: 85%;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}