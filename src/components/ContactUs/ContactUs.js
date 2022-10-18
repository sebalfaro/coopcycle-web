import ContactForm from "../../../common/components/ContactForm/ContactForm";
import Arrow4 from "../../../common/components/icons/Arrow4";
import theme from "../../../styles/theme";

export default function ContactUs() {

  const clickHandler = ()=>{
    window.scroll(0, 0)
  }

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
          <div className="buttonBox">
            <button onClick={clickHandler}>
              <Arrow4 />
            </button>
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

            .buttonBox{
              grid-column: 12/ span 1;
              width: 100%;
              height: 100%;
              position: relative;

              button {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                left: 20%;
                bottom: 30%;
                width: 59px;
                height: 59px;
                border-radius: 50px;
                border: none;
                background-color: ${theme.colors.lightSecondary};
                z-index: 30;

                &:hover{
                  cursor: pointer;
                }
              }
            }

        `}

      </style>
    </>
  )
}