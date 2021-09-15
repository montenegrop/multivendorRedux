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
  checkbox?: boolean
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
        _value={values.service}
        errors={errors}
        _touched={touched}
        onChange={handleChange}
      ></FieldChoice>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label htmlFor="string-id-email" className="label">
            label-checkbox
            {values.checkbox}
          </label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <input
                id="string-id-email"
                className="checkbox"
                type="checkbox"
                name="checkbox"
                value={values.checkbox}
              />
            </div>
          </div>
        </div>
      </div>

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
  const initialValues = useMemo(
    () => ({ email: "sds@ds.com", password: "", service: "", checkbox: true }),
    []
  )
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
        {(props) => (
          <FormContent
            _handleBlur={() => {}}
            {...props}
            servicios={services.map((service) => service.name)}
          />
        )}
      </Formik>
    </div>
  )
}

export default Basic
