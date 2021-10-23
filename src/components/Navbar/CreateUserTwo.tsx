// import React from "react"
// import { emailValidator } from "../../shared/validators"
// import { FieldString } from "../Forms/FieldString"
// import Modal from "react-modal"
// import FacebookButton from "./components/FacebookButton"
// import GoogleButton from "./components/GoogleButton"
// import { Formik } from "formik"
// import { useMemo } from "react"

// type FormErrors = {
//   firstName?: string
//   lastName?: string
//   docType?: string
//   docNumber?: number
//   email?: string
//   password?: string
// }

// const validate = (values) => {
//   const errors: FormErrors = {}
//   if (!values.email) {
//     errors.email = "Required"
//   } else if (emailValidator(values.email)) {
//     errors.email = "Invalid email address"
//   }
//   if (!values.firstName) {
//     errors.firstName = "Required"
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required"
//   }
//   if (!values.docType) {
//     errors.docType = "Required"
//   }
//   // if (!values.docNumber) {
//   //   errors.docNumber = "Required"
//   // }
//   if (!values.password) {
//     errors.password = "Required"
//   }
//   return errors
// }

// const onSubmit = (values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2))
//     setSubmitting(false)
//   }, 400)
// }

// const FormContent = ({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => {
//   return (
//     <form onSubmit={handleSubmit} noValidate className="login_form_container">
//       <h2 className="login_form_title">Registro: ¡Completá tus datos!</h2>
//       <a>Crear Cuenta empresa</a>
//       <div className="login_form_fields_container">
//         <div className="login_form_fields_row">
//           <FieldString
//             type="text"
//             name="Nombre"
//             value={values.firstName}
//             errors={errors}
//             _touched={touched}
//             onChange={handleChange}
//           ></FieldString>
//           <FieldString
//             type="text"
//             name="Apellido"
//             value={values.lastName}
//             errors={errors}
//             _touched={touched}
//             onChange={handleChange}
//           ></FieldString>
//         </div>
//         <div className="login_form_fields_row">
//           <FieldString
//             type="text"
//             name="Tipo de Documento"
//             value={values.docType}
//             errors={errors}
//             _touched={touched}
//             onChange={handleChange}
//           ></FieldString>
//           <FieldString
//             type="number"
//             name="Número de Documento"
//             value={values.email}
//             errors={errors}
//             _touched={touched}
//             onChange={handleChange}
//           ></FieldString>
//         </div>
//         <div className="login_form_fields_row">
//           <FieldString
//             type="email"
//             name="Usuario"
//             value={values.email}
//             errors={errors}
//             _touched={touched}
//             onChange={handleChange}
//           ></FieldString>
//           <FieldString
//             type="password"
//             name="Contraseña"
//             value={values.password}
//             errors={errors}
//             _touched={touched}
//             onChange={handleChange}
//           ></FieldString>
//         </div>
//       </div>
//       <button type="submit" className="login_form_button">
//         Ingresar
//       </button>
//       <div>
//         Si no tenes cuenta <a>registrate aquí</a>
//       </div>
//       <GoogleButton isSubmitting={isSubmitting} />
//       <FacebookButton isSubmitting={isSubmitting} />
//     </form>
//   )
// }

// const NewUserFormStep1 = ({ isOpen, onRequestClose }) => {
//   const initialValues = useMemo(() => ({}), [])
//   const customStyles = {
//     overlay: { zIndex: 10 },
//   }
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       ariaHideApp={false}
//       className="login_form_modal"
//       style={customStyles}
//     >
//       <Formik
//         validateOnChange={false}
//         validateOnBlur={false}
//         initialValues={initialValues}
//         validate={validate}
//         onSubmit={onSubmit}
//       >
//         {(props) => <FormContent {...props} />}
//       </Formik>
//     </Modal>
//   )
// }

// export default NewUserFormStep1
