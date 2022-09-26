import Image from "next/image"
import { useState } from "react"
import Button from "../Button/Button"
import theme from "../../../styles/theme"

export default function Card({ title, intro, info, img }) {

  const [open, setOpen] = useState(false)
  console.log('card', title);

  return (
    <>
      <div className="cardBox">
        <div className="imgBox">
          <Image
            src={img}
            alt={`number-icon`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className={"contentBox" + ' ' + (open ? 'contentBoxOpen' : '')}>
          <div className={"textBox"  + ' ' + (open ? 'textBoxOpen' : '')}>
            <h3 className="title">{title}</h3>
            <p className="introBox">{intro}</p>
            <p className={"infoBox"}>{info}</p>
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
              margin-top: 75px;
              width: 308px;
              height: 309px;
              box-shadow: 9px 7px 16px -1px rgba(0, 0, 0, 0.25);
              border-radius: 100px 100px 40px 40px;
              transition: 0.5s; 

              .title{
                color: ${theme.colors.third};
              }

              .textBox{
                overflow: hidden;
              }
            }
            .contentBoxOpen{
              height: 541px;
            }
            .infoBox{
              display: none;
              transition: 0.5s; 
            }
            .infoBoxOpen{
              transition: 0.5s; 
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}