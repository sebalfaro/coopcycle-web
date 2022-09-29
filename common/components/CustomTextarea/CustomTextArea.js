import theme from "../../../styles/theme"

const CustomTextarea = (props) => {

  return (
    <>
      <div className="textareaBox">
        <label htmlFor="my-custom-textarea">{props.label}</label>
        <textarea name="textarea" rows="10" cols="50" {...props}/>
      </div>
      <style jsx>
        {`
          .textareaBox{
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: ${theme.colors.secondary};

            textarea{
              min-height: 1.5rem;
              max-height: 5rem;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid ${theme.colors.darkGray};
              transition: 0.5s;
              resize: none;
              color: ${theme.colors.secondary};
            }
            textarea:focus{
              outline: none !important;
              background-color: transparent;
              border: none;
              border-bottom: 2px solid ${theme.colors.lightSecondary};
            }
          }
        `}
      </style>
    </>
  )
}

export default CustomTextarea