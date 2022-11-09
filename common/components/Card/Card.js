import Image from "next/image"
import { useState } from "react"
import Button from "../Button/Button"
import theme from "../../../styles/theme"
import character from '../../assets/images/caracter1.svg'
import Lottie from "lottie-react";

export default function Card({ title, intro, info, img, items }) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="cardBox">
        <div className="imgBox">
          <Lottie loop={true} animationData={img} style={{ height: '100%' }} />
        </div>
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
                    items.map((e, index) => {
                      return (
                        <li key={e + 'key' + index}>{e}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <Button text="VER MÁS" altText="VER MENOS" type="open" onClickHandler={setOpen} value={open} />
        </div>
      </div>
      <style jsx>
        {`
          .cardBox{
            width: fit-content;
            transition: 0.5s; 
            position: relative;
            padding: 2rem 0;
            display: flex; 
            flex-direction: column;
            align-items: center;

            .imgBox{
              position: absolute;
              background: #4FF0CB;  
              height: 153.54px;
              width: 153.54px;
              border-radius: 100%;
              left: auto;   
            }
            .contentBox{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              margin-top: 75px;
              width: 308px;
              height: 315px;
              box-shadow: 9px 7px 16px -1px rgba(0, 0, 0, 0.25);
              border-radius: 100px 100px 40px 40px;
              gap: 20px;
              transition: 0.5s; 

              .textBox{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                height: 150px;
                margin-top: 90px;
                overflow: hidden;
                transition: 0.5s; 
                gap: 20px;

                .mainContentBox{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  height: 150px;
                  width: 85%;
                                    
                  .title{
                    color: ${theme.colors.third};
                    margin-bottom: 1rem;
                  } 
                
                  .introBox{
                    line-height: 22px;
                    text-align: center;
                    font-size: 0.92rem; 
                  }
                }
                .addContentBox{
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  width: 243px;
                  font-size: 0.92rem;

                  .itemsBox{
                    margin-top: 15px; 
                    padding-left: 20px;
                    width: 100%;
                  } 
                }
                .line{
                  width: 243px;
                  height: 1px;
                  border-top: 1px solid ${theme.colors.gray};
                }
              }
              .textBoxOpen{
                height: 80%;
              }
            }
            .contentBoxOpen{
              height: 700px;
              transition: height 0.25s ease-in;
            }
          }
        `}
      </style>
    </>
  )
}