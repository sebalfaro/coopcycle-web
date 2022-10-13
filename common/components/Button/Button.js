import { useEffect, useState } from "react";
import arrow1 from '../../assets/images/arrow1.svg'
import theme from "../../../styles/theme";
import Image from "next/image";
import Link from "next/link";

export default function Button({ text = "", onClickHandler, type = 'right', value, formikProps }) {

  const [selected, setSelected] = useState(false);

  const selectedOption = (text) => {
    if (text !== value) {
      formikProps.setFieldValue('sender', text)
    }
  }

  useEffect(() => {
    if (value) {
      if (text === value) {
        setSelected(!selected)
      }
      if (text !== value) {
        setSelected(false)
      }
    }
  }, [value])


  const clickHandler = (e) => {
    if (type === 'open') {
      e.preventDefault()
      onClickHandler(!value)
    }
    if (type === 'centerSecondary') {
      e.preventDefault()
      selectedOption(text)
    }
  }

  return (
    <>
      {
        type === 'right' ? (
          <Link href='https://coopcycle.org/es/' >
            <a target="_blank">
              <button className={type + ' ' + (selected ? 'selected' : null)} onClick={clickHandler} >
                <div className="wrap">
                  {text}
                  {
                    type === 'right' && (
                      <div className="btn1-icon">
                        <Image
                          src={arrow1}
                          alt={`btn1-icon`}
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                    )
                  }
                </div>
              </button>
            </a>
          </Link>
        )
        :(
          <button className={type + ' ' + (selected ? 'selected' : null)} onClick={clickHandler} >
          <div className="wrap">
            {text}
            {
              type === 'right' && (
                <div className="btn1-icon">
                  <Image
                    src={arrow1}
                    alt={`btn1-icon`}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              )
            }
          </div>
        </button>
        )
      }
      <style jsx>
        {`
          .right{
            width: 197px;
            height: 38px;
           
            border: none;
            border-radius: 0px 20px 20px 0px;
            background-color: ${theme.colors.third};
            transition: 0.7s;

            &:hover{
              cursor: pointer;
              background-color: ${theme.colors.white};
              color: ${theme.colors.third};
              border: 1px solid ${theme.colors.third};
            }

            .wrap{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 1rem;
              font-family: 'Space Grotesk';
              font-style: normal;
              font-weight: 700;
              font-size: 1.125rem;

              .btn1-icon {
                position: relative;
                width: 1.25rem;
                height: 1rem;
              }
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
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center; 
            width: 196px;
            height: 38px;
            background-color: ${theme.colors.third};
            border: none;
            border-radius: 90px;
            font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 700;
            font-size: 1.125rem;
            transition: 0.3s ease-out;

            &:hover{
              cursor: pointer;
              background-color: transparent;
              color: ${theme.colors.third};
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
          
          .submit {
            width: 225px;
            height: 35px;
            border: none;
            border-radius: 0px 20px 20px 0px;
            background-color: ${theme.colors.third};
            transition: 0.7s;

            &:hover{
              cursor: pointer;
              background-color: ${theme.colors.secondary};
              color: ${theme.colors.white};
              border: none;
            }
          }
        `}
      </style>
    </>
  )
}