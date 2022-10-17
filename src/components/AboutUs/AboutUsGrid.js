import Button from "../../../common/components/Button/Button";
import Average from "./Average";
import Lottie from "lottie-react";
import img1 from '../../../common/assets/images/svgImages/Animacion_Nosotres_V2.json'

export default function AboutUsGrid() {
  return (
    <>
      <section id="que-es-coopcycle" className="aboutUsBox">
        <div className="box">
          <div className="imgBox">
            <Lottie loop={true} animationData={img1} style={{ height: '100%' }} />
          </div>
          <div className="textBox">
            <h1>Somos cooperativismo <br /> de plataforma en red</h1>
            <p>Las plataformas de reparto transnacionales, generan condiciones de precarización laboral, altas comisiones a los comercios locales y giran todas sus ganancias al exterior, es decir, no reinvierten en los países donde las producen.</p>
            <p><b>En CoopCycle ¡la plataforma sos vos!</b> La App permite que cada cooperativa gestione su propia plataforma de manera local.Ser parte de esta red, significa <b> derechos para los repartidores y las repartidoras, relaciones justas para los comercios y para quienes compran a través de la aplicación.</b></p>
            <p>Las experiencias en distintas partes de Europa demuestra que es una <b> verdadera alternativa a las plataformas privadas </b> que precarizan el trabajo y monopolizan la oferta.</p>
            <Button text="Conocer más" />
          </div>

        </div>
        <div className="avarageBox">
          <Average />
        </div>
      </section>
      <style jsx>
        {`
          .aboutUsBox{
            width: 100%;

              .imgBox {
                position: relative;
                grid-column: 2/ span 5;
                align-self: start;
                height: 590px;
              }

              .textBox{
                grid-column: 7/ span 5;
                 
                h1 {
                  margin-bottom: 2rem;
                }
                p{
                  font-family: 'Space Grotesk', sans-serif;
                  margin-bottom: 1.5rem;
                  line-height: 1.9rem;
                }
              }

            .avarageBox{
                width: 100%;
                margin-top: 4rem;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
          }
        `}
      </style>
    </>
  )
}