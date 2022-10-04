import { Field, Form, Formik } from 'formik'
import CustomInput from '../../components/CustomInput/CustonInput'
import CustomTexA from '../CustomTextA/CustomTextA'
import Button from '../Button/Button'

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
                <Field name="mail" as={CustomInput} label='¿Cúal es tu correo electrónico?' placeholder="Mail"/>
                <Field name="message" as={CustomTexA} label='Dejanos tu mensaje' placeholder="Tu mensaje" />
                <br />
                <Button text='Submit' />
              </div>
              <div className="submitBox">
                <p>Motivo del contacto</p>
                <div className="btnsBox">
                  <Button text={content.coop} type='centerSecondary' formikProps={props} />
                  <Button text={content.delivery} type='centerSecondary' formikProps={props} />
                  <Button text={content.coom} type='centerSecondary' formikProps={props} />
                  <Button text={content.suport} type='centerSecondary' formikProps={props} />
                  <Button text={content.other} type='centerSecondary' formikProps={props} />
                </div>
              </div>
            </div>
            {console.log(props)}
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