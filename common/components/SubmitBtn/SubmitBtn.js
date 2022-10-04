import theme from "../../../styles/theme";

export default function SubmitBtn({ text = "", onClickHandler }) {


  const clickHandler = (e) => {
    onClickHandler()
  }

  return (
    <>
      <button className={'submit'} type='submit' onClick={clickHandler} >{text}</button>
      <style jsx>
        {`
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