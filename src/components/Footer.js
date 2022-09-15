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
          <Image
            src={logo}
            alt="Logo Coopcycle"
            width={258}
            height={51}
            layout="fill"
            objectFit="contain"
            priority
          />
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
              <div className="socialMediaBox">
                <Link href="#">
                  <a>
                    <div className="socialMediaIcon" style={{position: 'relative'}}>
                      <Image
                        src={fb}
                        alt="facebook"
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
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 224px;
          gap: 82px;
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
        }
        .contactBox{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 48px;
          border-bottom: 1px solid ${theme.colors.lighThird};
        }

        .mailBox{
          height: 100%;
          width: fit-content;
          a{
            font-size: 1.3rem;
            font-weight: 700;
            color: ${theme.colors.secondary};
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