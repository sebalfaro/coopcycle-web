import { useState } from "react"
import theme from "../../../styles/theme"

export default function InfoCard({ number, title, content }) {

  const [open, setOpen] = useState(false)

  const onClickHandler = (e) => {
    setOpen(!open)
  }

  return (
    <>
      <div className={"infoCardBox" + ' ' + (open ? 'infoCardBoxOpen' : 'infoCardBoxClose')}>
        <div className="numberBox">
          {number}
        </div>

        <div className="mainContentBox">
          <div className="titleBox"><h3>{title}</h3></div>
          <div className="content">{content}</div>

        </div>
        <div className="openBtnBox">
          {
            open
              ? <button onClick={onClickHandler} >-</button>
              : <button onClick={onClickHandler}>+</button>
          }
        </div>
      </div>
      <style jsx>
        {`
          .infoCardBox{
            postion: relative;
            height: 37px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            overflow: hidden;
            transition: 0.5s; 
            gap: 30px;

            .numberBox{
              font-weight: bolder;
              color: rgba(9, 46, 55, 0.5);
              border-left: 1px solid rgba(9, 46, 55, 0.5);
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              width: 40px;
              height: 100%;
            }

            .mainContentBox{
              display: flex;
              flex-direction: column;
              width: 300px;
              gap: 13px;

              .titleBox{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                h3{
                  color: rgba(9, 46, 55, 0.5);
                }
              }
            }

            button {
              background-color: transparent;
              border: none;
              color: ${theme.colors.secondary};
              font-size: 1rem; 
              &:hover {
                cursor: pointer;
              }
            }
          }
          .infoCardBoxOpen{
            height: 130px;

            .numberBox{
              border-left: 1.6px solid ${theme.colors.lightSecondary};
              transition: 0.2s;
              color: ${theme.colors.lightSecondary};
            }
            .mainContentBox{
              .titleBox{
                h3{
                  color: ${theme.colors.lightSecondary};
                }
              }
            }
            .openBtnBox{
              button {
                color: ${theme.colors.lightSecondary};
                font-weight: bolder; 
                font-size: 1.2rem;
              }
            }
          }
        `}
      </style>
    </>
  )
}