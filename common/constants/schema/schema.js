import * as Yup from 'yup'

const FORM_VALIDATION_MESSAGES = {
  required: 'Este campo es requerido',
  max: (length) => `Este campo no debe superar los ${length} caracteres.`,
  min: (length) => `Este campo no debe tener menos de ${length} caracteres.`,
}

const nameSchema = Yup.string().max(240, FORM_VALIDATION_MESSAGES.max(240)).required(FORM_VALIDATION_MESSAGES.required)

const emailSchema = Yup.string().email('Este campo debe ser un email válido.').required(FORM_VALIDATION_MESSAGES.required)

const str1to1024schema = Yup.string().max(1024, FORM_VALIDATION_MESSAGES.max(1024)).required(FORM_VALIDATION_MESSAGES.required)

const senderSchema = Yup.string().required(FORM_VALIDATION_MESSAGES.required)

export {
  FORM_VALIDATION_MESSAGES,
  nameSchema,
  emailSchema,
  str1to1024schema,
  senderSchema
}