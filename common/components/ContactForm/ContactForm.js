import { Field, Form, Formik } from 'formik'
import CustomInput from '../../components/CustomInput/CustonInput'
import CustomTextArea from '../CustomTextArea/CustomTextArea'
import Button from '../Button/Button'

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
        onSubmit={(value) => {
          console.log({ value })
        }}
        validationSchema={''}>

        {(props) => (
          <Form>
            <div className="formBox">
              <div className="inputBox">
                <Field name="name" as={CustomInput} label='¿Cúal es tu nombre?' placeholder="Nombre" />
                <Field name="mail" as={CustomInput} label='¿Cúal es tu correo electrónico?' />
                <Field name="message" as={CustomTextArea} label='Dejanos tu mensaje' placeholder="Tu mensaje" />
                <br />
                <Button text='Submit' />
              </div>
              <div className="submitBox">
                <p>Motivo del contacto</p>
                <div className="btnsBox">
                  <Button text='Soy cooperativa' type='centerSecondary' />
                  <Button text='Soy repatidor/a' type='centerSecondary' />
                  <Button text='Soy comerciante' type='centerSecondary' />
                  <Button text='Quiero apoyar esta iniciativa' type='centerSecondary' />
                  <Button text='Otro' type='centerSecondary' />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <style jsx>
        {`
          .formBox{
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            gap: 20px;

            .inputBox{
              width: 50%;
              height: 100%;
              gap: 10px;
            }
            .submitBox{
              width: 45%;
              height: 100%;

              .btnsBox{
                margin-top: 15px;
                width: 80%;
                display: flex;
                flex-wrap: wrap;
                gap: 16px 14px;
              }
            }
          }
        `}
      </style>
    </>
  )
}