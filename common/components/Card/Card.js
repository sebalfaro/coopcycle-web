import Image from "next/image"
import { useState } from "react"
import Button from "../Button/Button"
import theme from "../../../styles/theme"
import character from '../../assets/images/caracter1.svg'

export default function Card({ title, intro, info, img, items }) {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="cardBox">
        <div className="imgBox">
          <Image
            src={character}
            alt={`number-icon`}
            layout="fill"
            width={270}
            height={270}
            objectFit="cover"
            priority
          />
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
          <Button text="VER MÁS" type="open" onClickHandler={setOpen} value={open} />
        </div>
      </div>
      <style jsx>
        {`
          .cardBox{
            width: 308px;
            transition: 0.5s; 
            position: relative;

            .imgBox{
              position: absolute;
              background: #4FF0CB;  
              height: 153.54px;
              width: 153.54px;
              border-radius: 100%;
              left: 25%;   
            }
            .contentBox{
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 75px;
              width: 308px;
              height: 309px;
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
                  width: 243px;
                  
                  
                  .title{
                    color: ${theme.colors.third};
                    margin-bottom: 1rem;
                  } 
                
                  .introBox{
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
                height: 70%;
              }
            }
            .contentBoxOpen{
              height: 541px;
            }
          }
        `}
      </style>
    </>
  )
}