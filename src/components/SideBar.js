import Image from "next/image";
import { useState } from "react"
import SocialMediaLink from "../../common/components/SocialMediaLink/SocialMediaLink"
import BarLink from '../../common/components/NavLink/BarLink'
import MenuIcon from "../../common/components/MenuIcon/MenuIcon";
import one from '../../common/assets/images/numbers/01.svg'
import two from '../../common/assets/images/numbers/02.svg'
import three from '../../common/assets/images/numbers/03.svg'
import four from '../../common/assets/images/numbers/04.svg'
import five from '../../common/assets/images/numbers/05.svg'
import closeBtn from '../../common/assets/images/closeIcon.svg'
import theme from "../../styles/theme"

export default function SideBar() {
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <aside className={"sideBarBox" + ' ' + (open ? 'barOpen' : 'barClose')}>
        {
          !open
            ? (
              <>
                <MenuIcon open={open} clickHandler={clickHandler} />

                <div className="socialMediaLinksBoxClose">
                  <div className={"socialMediaIconsBox" + ' ' + (open ? 'close' : 'open')}>
                    <SocialMediaLink iconType={'facebook'} filled={false} />
                    <SocialMediaLink iconType={'twitter'} filled={false} />
                    <SocialMediaLink iconType={'instagram'} filled={false} />
                  </div>
                </div>
              </>
            )
            : (
              <>
                <div className="column1">
                  <div className="menuBtnBox">
                    <MenuIcon open={open} clickHandler={clickHandler} />
                  </div>

                  <div className="column1Links">
                    <BarLink title="¿Qué es Coopcycle?" number={one} link='#que-es-coopcycle' clickHandler={clickHandler} />
                    <BarLink title="¡Sumate!" number={three} link='#sumate' clickHandler={clickHandler} />
                    <BarLink title="Derechos" number={two} link='#derechos' clickHandler={clickHandler} />
                    <BarLink title="¿Quienes somos?" number={four} link='#quienes-somos' clickHandler={clickHandler} />
                    <BarLink title="Contacto" number={five} link='#form' clickHandler={clickHandler} />
                  </div>

                </div>

                <div className="column2">
                  <div className="socialMediaBoxOpen">
                    <h4>¡SEGUINOS!</h4>
                    <div className={"socialMediaLinksBox" + ' ' + (open ? 'open' : 'close')}>
                      <SocialMediaLink iconType={'instagram'} filled />
                      <p>|</p>
                      <SocialMediaLink iconType={'facebook'} filled />
                      <p>|</p>
                      <SocialMediaLink iconType={'twitter'} filled />
                    </div>
                  </div>
                </div>

                <div className="column3">
                  <div className="closeBtnBox">
                    <div className="closeBtn" onClick={clickHandler} >
                      <Image
                        src={closeBtn}
                        alt={`number-icon`}
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </div>

                </div>
              </>
            )
        }

      </aside>
      <style jsx>
        {`
          .sideBarBox{
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            bottom:0;
            overflow-y: hidden;
            transition: 0.5s;
            z-index: 10;
          }
          .barClose{
            background-color: transparent;
            border-left: 1px solid ${theme.colors.gray};
            width: 75px;
          }
          .barOpen{
            position: fixed;
            display: flex;
            flex-direction: row;
            background-color: ${theme.colors.secondary};
            width: 100%;
            z-index: 30;
          }
          .menuBtnBoxClose{
            margin-left: 22px;
          }
          .socialMediaLinksBoxClose{
            width: 100%;
            height: auto;
            transition: 0.2s;

            .socialMediaIconsBox{
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 200px;
              gap: 14px; 

            }
            .close{
              display: none;
            }
          }

          .close{
            display: none;
          }

          
          .column1{
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 40%;            
            color: ${theme.colors.white};

            .menuBtnBox{
              padding-left: 30%;
              margin-top: 40px;
            }
            .column1Links{
              padding-left: 30%;
              margin-top: 82px;
              width: fit-content;
              display: flex;
              flex-direction: column;
              font-size: 1rem;
              gap: 38px;
              

            }
            
          }
          .column2{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 100%;
            width: 55%;

            .socialMediaBoxOpen{
              width: fit-content;
              margin-top: 5%;
              margin-right: 5%;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
              gap: 20px;
              color: ${theme.colors.lightSecondary};

              .socialMediaLinksBox{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 14px;
              }
            }
          }

          .column3 {
            position: relative;
            height: 100%;
            width: 5%;
            border-left: 1px solid ${theme.colors.gray};

            .closeBtnBox{
              position: absolute;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              margin-top: 42px;
              border-left: 3px solid ${theme.colors.third};
              width: 100%;
              height: 25px;
              z-index: 20;
              left: -1px;

              .lineOpen {
                width: 15px;
                height: 30px;
                position: relative;
              }
              .closeBtn{
                position: relative;
                width: 17px;
                height: 17px;
                margin: 0;
                padding: 0;
                font-size: 2rem;
                color: red;

                &:hover{
                  cursor: pointer;
                }
              }
            }
          }

        `}
      </style>
    </>
  )
}