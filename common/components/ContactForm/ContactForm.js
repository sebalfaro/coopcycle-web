import { Field, Form, Formik } from 'formik'
import CustomInput from '../../components/CustomInput/CustonInput'
import CustomTexA from '../CustomTextA/CustomTextA'
import Button from '../Button/Button'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import { nameSchema, emailSchema, str1to1024schema, senderSchema } from '../../constants/schema/schema'
import * as Yup from 'yup'

export default function ContactForm() {

  const content = {
    coop: 'Soy cooperativa',
    delivery: 'Soy repatidor/a',
    coom: 'Soy comerciante',
    suport: 'Quiero apoyar esta iniciativa',
    other: 'Otro'
  }

  const data = {
    name: '',
    mail: '',
    message: '',
    sender: ''
  }

  const handlerSubmit = async (values) => {

    const data = {
      email: values.mail,
      name: values.name,
      subject: values.sender,
      message: values.message,
    }

    const body = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('/api/smtp', body)
      .then((res) => {
        console.log('Response received', res)
        if (res.status === 200) {
          alert('El formulario fue enviado con éxito')
        }
      })
      .catch(err => {
        console.log({ err })
        alert('Ah ocurrido un error!')
      })

  }



  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={(values, { setSubmitting, resetForm, setTouched, setErrors }) => {
          // e.preventDefault();
          handlerSubmit(values)
          resetForm({ values: data })
          setSubmitting(false);
          setTouched({}, false);
          setErrors({})
        }}
        validationSchema={Yup.object().shape({
          name: nameSchema,
          mail: emailSchema,
          message: str1to1024schema,
          sender: senderSchema,
        })}

      >

        {(props) => (
          <Form>
            <div className="formBox">
              <div className="inputBox">
                <Field name="name" as={CustomInput} label='¿Cúal es tu nombre?' errors={props.errors} touched={props.touched} />
                <Field name="mail" as={CustomInput} label='¿Cúal es tu correo electrónico?' errors={props.errors} touched={props.touched} />
                <Field name="message" as={CustomTexA} label='Dejanos tu mensaje' errors={props.errors} touched={props.touched} />
                <br />
                <SubmitBtn type='submit' text='Enviar Mensaje' onClickHandler={props.handleSubmit} />
              </div>
              <div className="submitBox">
                <p>Motivo del contacto</p>
                <div className="btnsBox">
                  <Button text={content.coop} type='centerSecondary' formikProps={props} value={props.values.sender} />
                  <Button text={content.delivery} type='centerSecondary' formikProps={props} value={props.values.sender} />
                  <Button text={content.coom} type='centerSecondary' formikProps={props} value={props.values.sender} />
                  <Button text={content.suport} type='centerSecondary' formikProps={props} value={props.values.sender} />
                  <Button text={content.other} type='centerSecondary' formikProps={props} value={props.values.sender} />
                </div>
                {
                  props.errors.sender && props.touched.sender
                    ? <div className='errorBox'><p>{props.errors.sender}</p></div>
                    : null
                }
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <style jsx>
        {`
          .formBox{
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            column-gap: 2rem;
            width: 100%;
            height: 100%;

            .inputBox{
              grid-column: 1/ span 5;
              gap: 10px;
            }
            .submitBox{
              grid-column: 6/ span 5;
              height: 100%;

              .btnsBox{
                margin-top: 15px;
                width: 80%;
                display: flex;
                flex-wrap: wrap;
                gap: 16px 14px;
              }
            }
          .errorBox{
            display: block;
            color: red;
            padding: 1rem 0; 
            font-size: 0.8rem;
          }
          }
        `}
      </style>
    </>
  )
}