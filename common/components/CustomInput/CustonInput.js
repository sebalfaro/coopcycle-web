import theme from "../../../styles/theme"

const CustomInputComponent = (props) => {
  const { name, errors, touched } = props

  return (
    <>
      <div className="inputBox">
        <label htmlFor="my-custom-input">{props.label}</label>
        <input className="my-custom-input" type="text" {...props} />
        {
          errors[name] && touched[props.name]
            ? <div className='errorBox'><p>{errors[props.name]}</p></div>
            : null
        }
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
            input:-webkit-autofill {
              background-color: transparent !important;
              color: ${theme.colors.secondary};
            }
            input:autofill {
              background-color: transparent !important;
              color: ${theme.colors.secondary};
            }
            .errorBox{
              display: block;
              color: red;
              padding: 0.3rem 0; 
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default CustomInputComponent