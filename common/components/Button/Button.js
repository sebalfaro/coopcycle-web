import theme from "../../../styles/theme";

export default function Button({ text = "", onClickHandler, type = 'right', value }) {

  const clickHandler = (e) => {
    if (type === 'open') {
      onClickHandler(!value)
    }
  }

  return (
    <>
      <button className={type} onClick={clickHandler} >{text}</button>
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
        `}
      </style>
    </>
  )
}