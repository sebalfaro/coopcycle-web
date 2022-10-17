import ContactForm from "../../../common/components/ContactForm/ContactForm";

export default function ContactUs() {
  return (
    <>
      <section id="form" className="contactUsBox">
        <div className="box">
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
            .titleBox{
              grid-column: 2/ span 5;
              margin-top: 4rem;
            }
              .formBox{
                grid-column: 2/ span 10;
                margin-top: 2rem;
                margin-bottom: 4rem;
              }
          `}
      </style>
    </>
  )
}