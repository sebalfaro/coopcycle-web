import Image from "next/image";
import arrow1 from '../../assets/images/arrow1.svg'
import theme from "../../../styles/theme";
import Arrow1 from "../icons/Arrow1";

export default function SubmitBtn({ text = "", onClickHandler }) {


  const clickHandler = (e) => {
    onClickHandler()
  }

  return (
    <>
      <button type="submit" className='submit' onClick={clickHandler} >
        <div className="wrap">
          {text}
          <div className="btn1-icon">
            <Arrow1 />
          </div>
        </div>
      </button>
      <style jsx>
        {`
          .submit {
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
              gap: 0.7rem;
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
        `}
      </style>
    </>
  )
}