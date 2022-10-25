import Image from "next/image"
import { useState } from "react"
import Button from "../Button/Button"
import theme from "../../../styles/theme"
import character from '../../assets/images/caracter1.svg'
import Lottie from "lottie-react";

export default function Card2({ title, intro, info, img, items }) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="container">
        <div className={"cardBox" + ' ' + (open ? 'cardBoxOpen' : '')}>
          <div className="imgBox">
            <Lottie loop={true} animationData={img} style={{ height: '100%' }} />
          </div>
          <div className="mainContentBox">
            <h3 className="title">{title}</h3>
            <p className="introBox">{intro}</p>
          </div>
          <div className={"aditionalContent" + ' ' + (open ? 'aditionalContentOpen' : '')}>
            <div className="line"></div>
            <p className={"infoBox"}> <b>{info}</b> </p>
            <div className="itemsBox">
              <ul>
                {
                  items.map(e => {
                    return (
                      <li key={e + 'key'}>{e}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          {/* 
        <div className={"contentBox" + ' ' + (open ? 'contentBoxOpen' : '')}>
          <div className={"textBox" + ' ' + (open ? 'textBoxOpen' : '')}>
            <div className="mainContentBox">
              <h3 className="title">{title}</h3>
              <p className="introBox">{intro}</p>
            </div>
            <div className="line"></div>

            <div className="addContentBox">
              <p className={"infoBox"}> <b>{info}</b> </p>
              <div className="itemsBox">
                <ul>
                  {
                    items.map(e => {
                      return (
                        <li key={e + 'key'}>{e}</li>
                      )
                    })
                  }
                </ul>
              </div>

            </div>
          </div>
        </div> */}
          <Button text="VER MÁS" type="open" onClickHandler={setOpen} value={open} />
        </div>
      </div>

      <style jsx>
        {`

          
            .cardBox{
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              width: 308px;
              min-height: 309px;
              transition: min-height 0.25s ease-in;
              box-shadow: 9px 7px 16px -1px rgba(0, 0, 0, 0.25);
              border-radius: 100px 100px 40px 40px;

              .imgBox{
                position: absolute;
                background: #4FF0CB;  
                height: 153.54px;
                width: 153.54px;
                border-radius: 100%;
                left: 25%;
                top: -25%;    
              }
              .mainContentBox{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  height: 150px;
                  width: 80%;
                  margin-top: 6rem;

                  .title{
                    color: ${theme.colors.third};
                    margin-bottom: 1rem;
                  } 
                
                  .introBox{
                    text-align: center;
                    font-size: 0.92rem; 
                  }
              }

              .aditionalContent{

                max-height: 0;
                transition: max-height 0.15s ease-out;
                overflow: hidden;


              }
              .aditionalContentOpen {
                max-height: 500px;
                transition: max-height 0.25s ease-in;

                .line{
                  width: 243px;
                  height: 1px;
                  border-top: 1px solid ${theme.colors.gray};
                }
              }
              .cardBoxOpen{
                min-height: 450px;
                transition: min-height 0.25s ease-in;
              }
            }

        `}
      </style>
    </>
  )
}