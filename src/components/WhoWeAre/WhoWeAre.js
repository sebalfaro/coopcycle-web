import Image from "next/image"
import logo1 from "../../../common/assets/images/LogoFacttic.svg"
import min from "../../../common/assets/images/mincyt.png"
import inaes from "../../../common/assets/images/inaes.png"
import procodas from "../../../common/assets/images/procodas.png"
import impulso from "../../../common/assets/images/impulso.png"
import dipac from "../../../common/assets/images/dipac.png"
import rus from "../../../common/assets/images/rus.png"
import credicoop from "../../../common/assets/images/credicoop.png"
import germani from "../../../common/assets/images/germani.png"
import theme from "../../../styles/theme"

export default function WhoWeAre() {
  return (
    <>
      <section className="whoweareBox">
        <h1>¿Quiénes somos?</h1>
        <div className="logo1Box">
          <Image
            src={logo1}
            alt={`number-icon`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="logoBox">
          <p>NOS APOYAN</p>
          <div className="imgsBox">
            <div className="logos">
              <Image
                src={min}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={inaes}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={procodas}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={impulso}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="logoBox">
          <p>NOS ACOMPAÑAN</p>
          <div className="imgsBox">
            <div className="logos">
              <Image
                src={dipac}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={rus}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={credicoop}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={germani}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>

      </section>
      <style jsx>
        {`
          .whoweareBox{
            width: 100%;
            height: 75vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            
            h1{
              font-size: 3rem;
              font-weight: 900;
              line-height: 44px;
            }

            .logo1Box{
              position: relative;
              width: 162.95px;
              height: 40.75px;
            }
            .logoBox{
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 40px;
              

              .imgsBox{
                margin-top: 30px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 30px;

                .logos{
                  position: relative;
                  margin-bottom: 20px;
                  width: 133px;
                  height: 35.42px;
                }
                .line{
                  width: 1px;
                  height: 21.9px;
                  border-left: 1px solid ${theme.colors.darkGray};
                }
              }
            }
          }
        `}
      </style>
    </>
  )
}