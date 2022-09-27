import { Form, Formik } from 'formik'

export default function ContactForm() {

  const data = {
    name: '',
    mail: '',
    message: ''
  }

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={() => { }}
        validationSchema={''}>

        {(props) => (
          <div className="formBox">
            <div className="inputBox"></div>
            <div className="submitBox"></div>
          </div>
        )}
      </Formik>





      <style jsx>
        {`
          .formBox{
            
          }
        `}
      </style>
    </>
  )
}