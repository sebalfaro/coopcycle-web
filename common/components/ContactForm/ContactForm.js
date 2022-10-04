import { Field, Form, Formik } from 'formik'
import CustomInput from '../../components/CustomInput/CustonInput'
import CustomTexA from '../CustomTextA/CustomTextA'
import Button from '../Button/Button'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import { FORM_VALIDATION_MESSAGES, nameSchema, emailSchema, str1to1024schema, senderSchema } from '../../constants/schema/schema'
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

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {

          console.log('submited', { values })
          actions.resetForm()
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
                <Field name="name" as={CustomInput} label='¿Cúal es tu nombre?' placeholder="Nombre" formikProps={props} />
                <Field name="mail" as={CustomInput} label='¿Cúal es tu correo electrónico?' placeholder="Mail" formikProps={props} />
                <Field name="message" as={CustomTexA} label='Dejanos tu mensaje' placeholder="Tu mensaje" formikProps={props} />
                <br />
                <SubmitBtn type='submit' text='Submit' onClickHandler={props.submitForm} />
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