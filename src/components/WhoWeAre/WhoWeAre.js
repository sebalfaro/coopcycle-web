import Link from "next/link"
import Image from "next/image"
import Facttic from "../../../common/components/icons/Facttic"
import logos from "../../../common/assets/images/logos/logos"
import theme from "../../../styles/theme"
import logo from '../../../common/assets/images/logos/1.DIPAC_final.svg'

export default function nWhoWeAre() {

  return (
    <>
      <section id="quienes-somos" className="whoweareBox">
        <h1>¿Quiénes somos?</h1>
        <div className="logo1Box">
          <Link href="https://facttic.org.ar/">
            <a target='_blank' rel='noopener noreferrer'>
              <Facttic color={'#C1C0C1'} className='factticLogo' />
            </a>
          </Link>
        </div>

        <div className="logoBox">
          <p>NOS APOYAN</p>
          <div className="imgsBox">
            <div className="logos">
                <Image
                  src={logos.line1.logo1}
                  alt={`number-icon`}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={logos.line1.logo2}
                alt={`number-icon`}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={logos.line1.logo3}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={logos.line1.logo4}
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
                src={'/images/1.DIPAC_final.svg'}
                alt={`number-icon`}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={'/images/rus.svg'}
                alt={`number-icon`}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={logos.line2.logo7}
                alt={`number-icon`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="line"></div>
            <div className="logos">
              <Image
                src={logos.line2.logo8}
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            
            h1{
              margin-top: 6rem;
            }

            .logo1Box{
              padding-top: 1rem;
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
                align-items: flex-start;
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