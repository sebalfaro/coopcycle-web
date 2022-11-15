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
          <b>{number}</b>
        </div>

        <div className="mainContentBox">
          <div className="titleBox" onClick={onClickHandler} ><h3>{title}</h3></div>
          <div className="content"><p className="p2">{content}</p></div>
        </div>
        <div className="openBtnBox">
          {
            open
              ? <button onClick={onClickHandler} ><b>-</b></button>
              : <button onClick={onClickHandler} ><b>+</b></button>
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
              color: rgba(9, 46, 55, 0.5);
              border-left: 1px solid rgba(9, 46, 55, 0.5);
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              width: 40px;
              height: 100%;
              padding-top: 2.5px;
            }

            .mainContentBox{
              display: flex;
              flex-direction: column;
              width: 100%;
              gap: 10px;

              .titleBox{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                h3{
                  color: rgba(9, 46, 55, 0.5);
                }
                &:hover{
                  cursor: pointer;
                }

              }

            }

            button {
              background-color: transparent;
              border: none;
              color: ${theme.colors.third};
              font-size: 1rem; 
              &:hover {
                cursor: pointer;
              }
            }
            @media all and (max-width: ${theme.breakPoints.screenXs}) {
              height: 3rem;
              gap: 2rem;

              .mainContentBox{

                .titleBox{
                  h3{
                    line-height: 1.3rem;
                  }
                }
                gap: 22px;
              }
            }
          }

          .infoCardBoxOpen{
            height: 120px;

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

            @media all and (max-width: ${theme.breakPoints.screenXs}) {
              height: 180px;
            }
          }
        `}
      </style>
    </>
  )
}