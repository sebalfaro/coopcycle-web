import theme from "../../../styles/theme";

export default function CustomTexA(props) {
  const {errors, touched} = props.formikProps
  const {name} = props

  return <>
    <div className="textABox">
      <label htmlFor="my-custom-textarea">{props.label}</label>
      <textarea className="contentBox" name="my-custom-textarea" {...props}></textarea>
      {
        errors[name] && touched[name]
          ? <div className='errorBox'><p>{errors[name]}</p></div>
          : null
      }
    </div>
    <style jsx>
      {`
        .textABox{
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: ${theme.colors.secondary};

          .contentBox{
            min-height: 1.5rem;
            max-height: 5rem;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid ${theme.colors.darkGray};
            transition: 0.5s;
            resize: none;
            color: ${theme.colors.secondary};
          }
          .contentBox:focus{
            outline: none !important;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid ${theme.colors.lightSecondary};
          }
          .errorBox{
            display: block;
            color: red;
            padding: 0.5rem 0; 
            font-size: 0.8rem;
          }
        }
      `}
    </style>
  </>
}