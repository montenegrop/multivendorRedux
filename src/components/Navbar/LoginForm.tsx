import React, { useEffect } from "react"
import { Formik } from "formik"
import { emailValidator } from "../../shared/validators"
import { useMemo } from "react"
import { FieldString } from "../../components/Forms/FieldString"
import Modal from "react-modal"
//import GoogleButton from "./components/GoogleButton"

import { LOG_IN } from "../../state/actions/loggin"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { RootState } from "../../state/reducers"
import GoogleButton from "./components/GoogleButton"
import { Auth0Provider } from "@auth0/auth0-react"

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

const FormContent = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  nextCreateModal,
  router,
}) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="is-flex is-flex-direction-column is-justify-content-center login-modal has-text-centered"
      >
        <h2 className="login_form_title">¡Bienvenido! Ingresá con tus datos</h2>

        <FieldString
          values={null}
          onBlur={null}
          label="Email"
          type="email"
          name="email"
          value={values.email}
          errors={errors}
          _touched={touched}
          onChange={handleChange}
        ></FieldString>
        <FieldString
          values={null}
          onBlur={null}
          label="Contraseña"
          type="password"
          name="password"
          value={values.password}
          errors={errors}
          _touched={touched}
          onChange={handleChange}
        ></FieldString>

        <button type="submit" className="button mx-auto is-primary login-buttons">
          Ingresar
        </button>
        <div>
          Si no tenes cuenta{" "}
          <a
            onClick={() => {
              const { loggin: _loggin, ...newRouter } = router.query
              router.push({
                query: { ...newRouter, ...{ create: nextCreateModal } },
              })
            }}
            aria-hidden="true"
          >
            registrate aquí
          </a>
        </div>
        <Auth0Provider
          domain="dev-zi8s--3b.us.auth0.com"
          clientId="jQWBwLnmdwj4uaYItRBmMcSnv2JPxUtu"
          redirectUri={window.location.origin}
        >
          <GoogleButton />
          {/* <FacebookButton href={AUTH0_URI} /> */}
        </Auth0Provider>
      </form>
    </>
  )
}

const LoginForm = ({ isOpen, onRequestClose, nextCreateModal, onCloseQuery, user }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const initialValues = useMemo(() => ({ email: "", password: "" }), [])

  const logginErrors = useSelector((state: RootState) => state.loggin.errors)

  useEffect(() => {
    if (logginErrors.length == 0 && user) {
      console.log("logginFORM")
      router.push({ query: onCloseQuery })
    }
  }, [logginErrors])

  const onSubmit = (values) => {
    dispatch(LOG_IN({ user: values.email, password: values.password }))
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className=""
      style={{
        content: {
          width: "70%",
          height: "75vh",
          padding: "30px",
          top: "15%",
          left: "15%",
          opacity: 15,
          borderRadius: "20px",
        },
        overlay: { zIndex: 1000 },
      }}
    >
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(props) => <FormContent {...props} nextCreateModal={nextCreateModal} router={router} />}
      </Formik>
    </Modal>
  )
}

export default LoginForm
