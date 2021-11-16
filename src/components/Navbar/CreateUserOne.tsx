import React, { useEffect, useState } from "react"
import { emailValidator } from "../../shared/validators"
import { FieldString } from "../Forms/FieldString"
import Modal from "react-modal"
import { Formik } from "formik"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/reducers"
import { useRouter } from "next/router"
import { CREATE_USER } from "../../state/actions/loggin"
import CreateCompanyModal from "../Modal/CreateCompanyModal"

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

const FormContent = ({ values, errors, touched, handleChange, handleSubmit, loading }) => {
  const [companyModal, setCompanyModal] = useState(false)
  const handleClicModal = () => {
    setCompanyModal(!companyModal)
  }
  return (
    <form onSubmit={handleSubmit} noValidate className="has-text-centered" id="register-modal">
      <h2 className="is-size-3 mb-4">Registro: ¡Completá tus datos!</h2>
      <a onClick={handleClicModal} role="button" tabIndex={0} onKeyDown={() => {}}>
        Crear Cuenta empresa
      </a>
      <div className="grid-2col">
        <div className="mx-auto">
          <FieldString
            values={null}
            onBlur={null}
            label="Nombre"
            type="text"
            name="firstName"
            value={values.firstName}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="mx-auto">
          <FieldString
            values={null}
            onBlur={null}
            label="Apellido"
            type="text"
            name="lastname"
            value={values.lastName}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="mx-auto">
          <FieldString
            values={null}
            onBlur={null}
            label="Tipo de documento"
            type="text"
            name="docType"
            value={values.docType}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="mx-auto">
          <FieldString
            values={null}
            onBlur={null}
            label="Número de Documento"
            type="number"
            name="docNumber"
            value={values.docNumber}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="mx-auto">
          <FieldString
            values={null}
            onBlur={null}
            label="Usuario"
            type="email"
            name="email"
            value={values.email}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
          ></FieldString>
        </div>
        <div className="mx-auto">
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
        </div>
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

      <button
        type="submit"
        className="button is-large polygon-button secondary-color"
        disabled={loading}
      >
        {loading}
        Crear Cuenta
      </button>

      <Modal
        isOpen={companyModal}
        onRequestClose={handleClicModal}
        ariaHideApp={false}
        style={{
          content: {
            width: "70%",
            height: "75vh",
            padding: "30px",
            top: "15%",
            left: "15%",
            opacity: 15,
            borderRadius: "20px",
            marginBottom: "150px",
          },
          overlay: { zIndex: 500 },
        }}
      >
        <CreateCompanyModal />
      </Modal>
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
      style={{
        content: {
          width: "70%",
          height: "75vh",
          top: "15%",
          padding: "30px",
          left: "15%",
          opacity: 15,
          borderRadius: "20px",
        },
        overlay: { zIndex: 100 },
      }}
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
