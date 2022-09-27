
export default function ContactUs(){
  return(
    <>
      <section className="contactUsBox">
        <div className="contentBox">
          <div className="titleBox">
            <h1>¡Hola! <br /> ¿Querés ser parte de la red de <br /> cooperativas de reparto?</h1>
          </div>
          <div className="formBox">
            <div className="inputBox"></div>
            <div className="infoBox"></div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .contactUsBox{
            width: 100%;
            height: 80vh;
            background-color: gray;
          }
        `}
      </style>
    </>
  )
}