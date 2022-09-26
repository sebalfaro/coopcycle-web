import Image from "next/image"
import Link from "next/link"
import theme from "../../styles/theme"
import logo from '../../public/images/LogoCoopcycle.svg'
import fb from '../../public/images/fb-icon.svg'
import tw from '../../public/images/tw-icon.svg'
import ig from '../../public/images/ig-icon.svg'

export default function Footer() {
  return (
    <>
      <footer className="footerBox">
        <div className="logoBox">
          <Link href="#">
            <a>
              <Image
                src={logo}
                alt="Logo Coopcycle"
                width={258}
                height={51}
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          </Link>

        </div>
        <div className="linksBox">

          <div className="contactBox">
            <div className="mailBox">
              <h4>¿Querés contactarnos?</h4>
              <Link href="#">
                <a>coopcycleargentina@gmail.com</a>
              </Link>
            </div>
            <div className="socialMediaBox">
              <h4>¡Seguinos!</h4>

              <div className="socialMediaIconsBox">
                <Link href="#">
                  <a>
                    <div className="socialMediaIcon" style={{ position: 'relative' }}>
                      <Image
                        src={fb}
                        alt="facebook-icon"
                        width={14}
                        height={14}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="socialMediaIcon" style={{ position: 'relative' }}>
                      <Image
                        src={tw}
                        alt="twitter-icon"
                        width={14}
                        height={14}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="socialMediaIcon" style={{ position: 'relative' }}>
                      <Image
                        src={ig}
                        alt="instagram-icon"
                        width={14}
                        height={14}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </a>
                </Link>
              </div>

            </div>
          </div>
          <hr />

          <nav className="navBox">
            <Link href="#">
              <a>Sobre nosotros/as</a>
            </Link>
            <Link href="#">
              <a>¡Sumate!</a>
            </Link>
            <Link href="#">
              <a>Derechos</a>
            </Link>
            <Link href="#">
              <a>¿Quiénes somos?</a>
            </Link>
            <Link href="#">
              <a>Contacto</a>
            </Link>
          </nav>
        </div>
      </footer>
      <style jsx>
        {`
        .footerBox{
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 224px;
          gap: 5.5%;
          background-color: ${theme.colors.third};
        }
        .logoBox{
          position: relative;
          width: 268px;
          height: 100px;
        }

        .linksBox {
          display: flex; 
          flex-direction: column;
          width: 550px;
          height: 75px;

          hr {
            background-color: ${theme.colors.midThird};
            border: 1px solid ${theme.colors.midThird};
            margin: 1rem 0;
          }
        }
        .contactBox{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 48px;

        }

        .mailBox{
          height: 100%;
          width: fit-content;
          color: ${theme.colors.secondary};
          a{
            font-size: 1.3rem;
            font-weight: 700;
            color: ${theme.colors.secondary};
          }
        }

        .socialMediaBox{
          width: 120px;
          height: 50px;

          .socialMediaIconsBox{
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 40px;
            width: 100%;

            .socialMediaIcon{
              position: relative;
              height: 40px;
              width: 20px;
            }
          }
        }

        .navBox{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          a{
            color: ${theme.colors.white};
          }
        }
      `}
      </style>
    </>
  )
}