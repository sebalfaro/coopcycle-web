import { useState } from "react";
import theme from "../../../styles/theme";

export default function Button({ text = "", onClickHandler, type = 'right', value }) {

  const [selected, setSelected] = useState(false);

  const clickHandler = (e) => {
    if (type === 'open') {
      onClickHandler(!value)
    }
    if (type === 'centerSecondary') {
      setSelected(!value)
    }
    
  }

  return (
    <>
      <button className={type + ' ' + (selected ? 'selected' : null)} onClick={clickHandler} >{text}</button>
      <style jsx>
        {`
          .right{
            width: 225px;
            height: 35px;
            border: none;
            border-radius: 0px 20px 20px 0px;
            background-color: ${theme.colors.third};

            &:hover{
              cursor: pointer;
            }
          }
          .open{
            width: 101px;
            height: 29px;
            border: 1px solid ${theme.colors.lightSecondary};
            border-radius: 40px;
            background-color: transparent;
            color: ${theme.colors.secondary};
            font-family: 'Space Grotesk';
            font-weight: 700;
            font-size: 11px;
            line-height: 1rem;
            transition: 0.7s;
            margin-bottom: 30px;


            &:hover{
              cursor: pointer;
              background-color: ${theme.colors.secondary};
              color: ${theme.colors.white};
              border: none;
            }
          }
          .center{
            width: 196px;
            height: 38px;
            background-color: ${theme.colors.third};
            border: none;
            border-radius: 90px;
            transition: 0.3s ease-out;

            &:hover{
              cursor: pointer;
              background-color: transparent;
              color: ${theme.colors.third};
              border: none;
              border: 1px solid ${theme.colors.third};
            }
          }
          .centerSecondary{
            width: auto;
            padding: 0 18px;
            height: 38px;
            background-color: transparent;
            border: 1px solid ${theme.colors.lightSecondary};
            border-radius: 90px;
            transition: 0.3s ease-out;
            color: ${theme.colors.secondary};
            font-weight: 600;
            font-size: 1rem;
            line-height: 18px;

            &:hover{
              cursor: pointer;
            }
          }
          .selected{
            background-color: ${theme.colors.lightSecondary};
          }
        `}
      </style>
    </>
  )
}