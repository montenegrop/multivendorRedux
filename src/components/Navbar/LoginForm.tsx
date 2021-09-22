import React from "react"
import { Formik } from "formik"
import { emailValidator } from "../../shared/validators"
import { useMemo } from "react"
import { FieldString } from "../../components/Forms/FieldString"
import Modal from "react-modal"
import FacebookIcon from "./FacebookIcon"
import GoogleIcon from "./GoogleIcon"

type FormErrors = {
  email?: string
  password?: string
}

const validate = (values) => {
  const errors: FormErrors = {}
  if (!values.email) {
    errors.email = "Required"
  } else if (emailValidator(values.email)) {
    errors.email = "Invalid email address"
  }
  return errors
}

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

const FormContent = ({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => {
  return (
    <form onSubmit={handleSubmit} noValidate className="login_form_container">
      <h2 className="login_form_title">¡Bienvenido! Ingresá con tus datos</h2>

      <FieldString
        type="email"
        name="Usuario"
        value={values.email}
        errors={errors}
        _touched={touched}
        onChange={handleChange}
      ></FieldString>

      <FieldString
        type="password"
        name="Contraseña"
        value={values.password}
        errors={errors}
        _touched={touched}
        onChange={handleChange}
      ></FieldString>

      <button type="submit" className="login_form_button">
        Ingresar
      </button>
      <div>
        Si no tenes cuenta <a>registrate aquí</a>
      </div>
      <button
        type="submit"
        className="login_form_button_sm login_form_button_sm_g"
        disabled={isSubmitting}
      >
        <div className="login_form_icon">
          <GoogleIcon />
        </div>
        Ingresa con Google
      </button>
      <button
        type="submit"
        className="login_form_button_sm login_form_button_sm_f"
        disabled={isSubmitting}
      >
        <div className="login_form_icon">
          <FacebookIcon />
        </div>
        Ingresa con Facebook
      </button>
    </form>
  )
}

const LoginForm = ({ isOpen, onRequestClose }) => {
  const initialValues = useMemo(() => ({ email: "cboero111@gmail.com", password: "admin" }), [])
  const customStyles = {
    overlay: { zIndex: 10 },
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="login_form_modal"
      style={customStyles}
    >
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(props) => <FormContent {...props} />}
      </Formik>
    </Modal>
  )
}

export default LoginForm
