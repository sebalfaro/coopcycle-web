import Link from "next/link"
import theme from "../../styles/theme"
import CoopcycleLogo from "../../common/components/icons/CoopcycleLogo"
import SocialMediaLink from "../../common/components/SocialMediaLink/SocialMediaLink"

export default function Footer() {
  return (
    <>
      <footer className="footerBox">
        <div className="box">


          <div className="logoBox">
            <CoopcycleLogo />
          </div>

          <div className="column2">
            <div className="content">

              <div className="linksBox">
                <div className="contactBox">
                  <div className="socialMediaBox">
                    <h4>¡Seguinos!</h4>
                    <div className="socialMediaIconsBox">
                      <SocialMediaLink iconType={'facebook'} filled={true} />
                      <SocialMediaLink iconType={'twitter'} filled={true} />
                      <SocialMediaLink iconType={'instagram'} filled={true} />
                    </div>
                  </div>
                </div>

                <div className="line"></div>

                <nav className="navBox">
                  <Link href="#que-es-coopcycle" >
                    <a>Sobre nosotros/as</a>
                  </Link>
                  <Link href="#sumate" >
                    <a>¡Sumate!</a>
                  </Link>
                  <Link href="#derechos" >
                    <a>Derechos</a>
                  </Link>
                  <Link href="#quienes-somos" >
                    <a>¿Quiénes somos?</a>
                  </Link>
                  <Link href="#form" >
                    <a>Contacto</a>
                  </Link>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
        .footerBox{
          position: relative;
          z-index: 20;
          width: 100%;
          height: 224px;
          background-color: ${theme.colors.third};
        }

        .box{
          height: 100%;
        
        .logoBox{
          grid-column: 2/ span 5;
          align-items: end;
          height: 100%;
        }

        .column2{
          grid-column: 7/ span 5;
          height: 100%;
          width: 100%;

          .line{
            width: 100%;
            height: 1px;
            border-bottom: 1px solid ${theme.colors.gray};
            margin: 0.5rem 0;
          }

          .content {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .linksBox {
              display: flex; 
              flex-direction: column;
              height: 75px;

              hr {
                background-color: ${theme.colors.midThird};
                border: 1px solid ${theme.colors.midThird};
                margin: 1rem 0;
              }
            }

            .socialMediaBox{
              margin-top: 30px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              

              .socialMediaIconsBox{
                position: relative;
                display: flex;
                width: 100px;
                gap: 20px;
                margin-bottom: 15px;

                .socialMediaIcon{
                  position: relative;
                  height: 20px;
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
          }
          
        }
        }
      `}
      </style>
    </>
  )
}