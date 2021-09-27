import React, { useCallback, useState } from "react"
import { Formik } from "formik"
import { emailValidator } from "../../shared/validators"
import { useMemo } from "react"
import { FieldString } from "../../components/Forms/FieldString"
import Modal from "react-modal"
import FacebookButton from "./components/FacebookButton"
import GoogleButton from "./components/GoogleButton"
import NewUserFormStep1 from "./NewUserFormStep1"

import { LOG_IN } from "../../state/actions/loggin"
import { useDispatch } from "react-redux"

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

const FormContent = ({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => {
  const [isOpenNewUser, setIsOpenNewUser] = useState(false)
  function closeModalLogin() {
    setIsOpenNewUser(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="login_form_container">
        <h2 className="login_form_title">¡Bienvenido! Ingresá con tus datos</h2>
        <FieldString
          type="email"
          name="email"
          value={values.email}
          errors={errors}
          _touched={touched}
          onChange={handleChange}
        ></FieldString>
        <FieldString
          type="password"
          name="password"
          value={values.password}
          errors={errors}
          _touched={touched}
          onChange={handleChange}
        ></FieldString>
        <button type="submit" className="login_form_button">
          Ingresar
        </button>
        <div>
          Si no tenes cuenta{" "}
          <a onClick={() => setIsOpenNewUser(true)} aria-hidden="true">
            registrate aquí
          </a>
        </div>
        <GoogleButton isSubmitting={isSubmitting} />
        <FacebookButton isSubmitting={isSubmitting} />
      </form>
      <NewUserFormStep1 isOpen={isOpenNewUser} onRequestClose={closeModalLogin} />
    </>
  )
}

const LoginForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch()

  const initialValues = useMemo(() => ({ email: "", password: "" }), [])
  const customStyles = {
    overlay: { zIndex: 10 },
  }

  const onSubmit = useCallback(
    (values) => {
      dispatch(LOG_IN({ user: values.email, password: values.password }))
    },
    [dispatch]
  )

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
