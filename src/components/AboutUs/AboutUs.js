import Image from "next/image";
import delivery from "../../../common/assets/images/Repartidora.svg"
import Button from "../../../common/components/Button/Button";
import theme from "../../../styles/theme";
import Average from "./Average";

export default function AboutUs() {
  return (
    <>
      <section className="aboutUsBox">
        <div className="infoBox">
          <div className="imgBox">
            <Image
              src={delivery}
              alt={`number-icon`}
              width={15}
              height={15}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="textBox">
            <h1>Somos cooperativismo de plataforma en red</h1>
            <p>
              Las plataformas de reparto transnacionales, generan condiciones de precarización laboral, altas comisiones a los comercios locales y giran todas sus ganancias al exterior, es decir, no reinvierten en los países donde las producen.
              <br />
              <br />
              <b>En CoopCycle ¡la plataforma sos vos!</b> La App permite que cada cooperativa gestione su propia plataforma de manera local.Ser parte de esta red, significa <b> derechos para los repartidores y las repartidoras, relaciones justas para los comercios y para quienes compran a través de la aplicación.</b>
              <br />
              <br /> Las experiencias en distintas partes de Europa demuestra que es una <b> verdadera alternativa a las plataformas privadas </b> que precarizan el trabajo y monopolizan la oferta.
            </p>
            <Button  text="Conocer más" />
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
            height: 100vh;

            .infoBox{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 80%;
              gap: 50px;

              .imgBox {
                position: relative;
                width: 287.58px;
                height: 470.2px;
                z-index: -1;
              }

              .textBox{
                width: 35%;
                height: 500px;
                
                h1 {
                  font-family: 'Passion One', sans-serif;
                  font-weight: 900;
                  font-size: 40px;
                  line-height: 44px;
                  transition: 0.5s;
                }
                p{
                  font-family: 'Space Grotesk', sans-serif;
                  margin: 2rem 0 ;
                }
              }
            }
            .avarageBox{
                width: 100%;
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