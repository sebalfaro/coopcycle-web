
export default function CustomTexA(props) {
  return <>
    <div className="textABox">
      <label htmlFor="my-custom-textarea">{props.label}</label>
      <textarea name="my-custom-textarea" {...props}></textarea>
    </div>
    <style jsx>
      {`

      `}
    </style>
  </>
}