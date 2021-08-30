import React from "react"
import { Formik } from "formik"
import { emailValidator } from "../../shared/validators"
import { useMemo } from "react"
import { FieldString } from "../../components/Forms/FieldString"
import { FieldChoice } from "../../components/Forms/FieldChoice"
import { Service } from "../../state/actions/serviceProvider"

type BasicProps = { services: Service[] }

type FormErrors = {
  email?: string
  password?: string
  service?: string
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

const FormContent = ({
  servicios,
  values,
  errors,
  touched,
  handleChange,
  _handleBlur,
  handleSubmit,
  isSubmitting,
  /* and other goodies */
}) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldString
        type="email"
        name="email"
        value={values.email}
        errors={errors}
        _touched={touched}
        onChange={handleChange}
      ></FieldString>

      <FieldChoice
        name="service"
        options={servicios}
        value={values.service}
        errors={errors}
        _touched={touched}
        onChange={handleChange}
      ></FieldChoice>

      <FieldString
        type="password"
        name="password"
        value={values.password}
        errors={errors}
        _touched={touched}
        onChange={handleChange}
      ></FieldString>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}

const Basic = ({ services }: BasicProps) => {
  const initialValues = useMemo(() => ({ email: "sds@ds.com", password: "", service: "" }), [])
  return (
    <div>
      <h1>Contratar</h1>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(props) => <FormContent {...props} servicios={services.map((service) => service.name)} />}
      </Formik>
    </div>
  )
}

export default Basic
