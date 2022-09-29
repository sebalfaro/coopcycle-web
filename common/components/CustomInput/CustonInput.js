import theme from "../../../styles/theme"

const CustomInputComponent = (props) => {

  return (
    <>
      <div className="inputBox">
        <label htmlFor="my-custom-input">{props.label}</label>
        <input className="my-custom-input" type="text" {...props} />
      </div>
      <style jsx>
        {`
          .inputBox{
            margin: 15px 0; 
            display: flex;
            flex-direction: column;
            gap: 10px;
            
            input {
              height: 1.5rem;
              background-color: transparent;
              border: none;
              border-bottom: 1px solid ${theme.colors.darkGray};
              transition: 0.5s;
              color: ${theme.colors.secondary};
            }
            input:focus{
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

export default CustomInputComponent