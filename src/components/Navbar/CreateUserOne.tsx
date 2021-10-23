import React, { useEffect, useState } from "react"
import { emailValidator } from "../../shared/validators"
import { FieldString } from "../Forms/FieldString"
import Modal from "react-modal"
import FacebookButton from "./components/FacebookButton"
import GoogleButton from "./components/GoogleButton"
import { Formik } from "formik"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/reducers"
import { useRouter } from "next/router"
import { CREATE_USER } from "../../state/actions/loggin"

type FormErrors = {
  firstName?: string
  lastName?: string
  docType?: string
  docNumber?: number
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
  // if (!values.firstName) {
  //   errors.firstName = "Required"
  // }
  // if (!values.lastName) {
  //   errors.lastName = "Required"
  // }
  // if (!values.docType) {
  //   errors.docType = "Required"
  // }
  // // if (!values.docNumber) {
  // //   errors.docNumber = "Required"
  // // }
  // if (!values.password) {
  //   errors.password = "Required"
  // }
  return errors
}

const FormContent = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  isSubmitting,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit} noValidate className="login_form_container">
      <h2 className="login_form_title">Registro: ¡Completá tus datos!</h2>
      <a>Crear Cuenta empresa</a>
      <div className="login_form_fields_container">
        <div className="login_form_fields_row">
          <FieldString
            label="Nombre"
            type="text"
            name="firstName"
            value={values.firstName}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
          <FieldString
            label="Apellido"
            type="text"
            name="lastname"
            value={values.lastName}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="login_form_fields_row">
          <FieldString
            label="Tipo de documento"
            type="text"
            name="docType"
            value={values.docType}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
          <FieldString
            label="Número de Documento"
            type="number"
            name="docNumber"
            value={values.docNumber}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="login_form_fields_row">
          <FieldString
            label="Usuario"
            type="email"
            name="email"
            value={values.email}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
          <FieldString
            label="Contraseña"
            type="password"
            name="password"
            value={values.password}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              Soy proveedor de servicios
              <input
                id="checkbox-proveedor"
                className="checkbox ml-1"
                type="checkbox"
                name="serviceProvider"
                value={values.serviceProvider}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <button type="submit" className="login_form_button" disabled={loading}>
          {loading}
          Crear Cuenta
        </button>
      </div>

      <GoogleButton isSubmitting={isSubmitting} />
      <FacebookButton isSubmitting={isSubmitting} />
    </form>
  )
}

const CreateUserOneForm = ({ isOpen, onRequestClose, onCloseQuery }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const initialValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      docType: "",
      docNumber: "",
      email: "",
      password: "",
      serviceProvider: false,
    }),
    []
  )
  const customStyles = {
    overlay: { zIndex: 10 },
  }

  const logginErrors = useSelector((state: RootState) => state.loggin.errors)
  const loading = useSelector((state: RootState) => state.loggin.loading)
  const created = useSelector((state: RootState) => state.loggin.created)
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    if (logginErrors.length == 0 && creating && created) {
      router.push({ query: onCloseQuery })
    }
    setCreating(false)
  }, [created])

  const onSubmit = (values) => {
    console.log(values)
    dispatch(
      CREATE_USER({
        email: values.email,
        password: values.password,
        providesServices: values.serviceProvider,
      })
    )
    setCreating(true)
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
        {(props) => <FormContent {...props} loading={loading} />}
      </Formik>
    </Modal>
  )
}

export default CreateUserOneForm
