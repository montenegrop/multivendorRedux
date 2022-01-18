import React, { useState } from "react"
import { Formik } from "formik"
import { dateValidator } from "../../shared/validators"
import { FieldString } from "../../components/Forms/FieldString"
import { Service } from "../../state/actions/serviceProvider"
import { FieldChoice } from "../../components/Forms/FieldChoice"
import { FORM_CONTRATAR_INIT } from "../../state/actions/forms"
import { useDispatch } from "react-redux"
import { ContratarType } from "../../state/reducers/forms/contratarReducer"
import Modal from "react-modal"
import ConfirmModal from "./ConfirmForm"
type BasicProps = { services: Service[]; initialValues: ContratarType }

type FormErrors = {
  service?: string
  date?: string
  hour?: string
  address?: string
  location?: string
  checkbox?: string
  description?: string
}

const validate = (values) => {
  const errors: FormErrors = {}
  if (!values.service) {
    errors.service = "Obligatorio"
  }
  if (!values.date) {
    errors.date = "Obligatorio"
  } else if (dateValidator(values.date)) {
    errors.date = "Ingrese una fecha mayor a la actual"
  }
  if (!values.hour) {
    errors.hour = "Obligatorio"
  }
  if (!values.address) {
    errors.address = "Obligatorio"
  }
  if (!values.location) {
    errors.location = "Obligatorio"
  }
  if (!values.checkbox == true) {
    errors.checkbox = "Debe aceptar los terminos y condiciones"
  }
  return errors
}

const FormContent = ({
  servicios,
  values,
  errors,
  touched,
  handleChange,
  handleFieldBlur,
  handleSubmit,
  isSubmitting,
  modalOpen,
  setModalOpen,
  /* and other goodies */
}) => {
  servicios
  isSubmitting

  return (
    <form onSubmit={handleSubmit} noValidate className="p-5">
      <div className="hire-modal">
        <div className="hire-modal-inputs">
          <FieldChoice
            values={values}
            options={servicios}
            label="SERVICIOS"
            name="service"
            value={values.service}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
            onBlur={handleFieldBlur}
          ></FieldChoice>

          <FieldString
            values={values}
            label="LOCALIDAD"
            type="text"
            name="location"
            value={values.location}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
            onBlur={handleFieldBlur}
          ></FieldString>

          <FieldString
            values={values}
            label="DIRECCIÓN"
            type="text"
            name="address"
            value={values.address}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
            onBlur={handleFieldBlur}
          ></FieldString>

          <FieldString
            values={values}
            label="FECHA"
            type="date"
            name="date"
            value={values.date}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
            onBlur={handleFieldBlur}
          ></FieldString>

          <FieldString
            values={values}
            label="HORA"
            type="time"
            name="hour"
            value={values.hour}
            errors={errors}
            _touched={touched}
            onChange={handleChange}
            onBlur={handleFieldBlur}
          ></FieldString>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label htmlFor="terminos-contratar" className="label has-text-left">
                Terminos y condiciones
              </label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <input
                    id="terminos-contratar"
                    className="checkbox"
                    type="checkbox"
                    name="checkbox"
                    checked={values.checkbox}
                    value={values.checkbox}
                    onChange={handleChange}
                    onBlur={() => handleFieldBlur(values)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="control">
          <textarea
            id="id-description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={() => handleFieldBlur(values)}
            className="textarea has-fixed-size"
            placeholder="Explicá en máximo 50 palabras cual es tu necesidad (si ya te has puesto en contacto con el prestador, indicale)"
          ></textarea>
        </div>
      </div>
      <button className="button mt-5 is-primary" type="submit">
        Enviar Solicitud
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => {
          setModalOpen(!modalOpen)
        }}
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
          overlay: { zIndex: 10500 },
        }}
      >
        <ConfirmModal />
      </Modal>
    </form>
  )
}

const ContratarForm = ({ services, initialValues }: BasicProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(FORM_CONTRATAR_INIT(values))
    setModalOpen(!modalOpen)
  }

  const onFieldBlur = (values) => {
    dispatch(FORM_CONTRATAR_INIT(values))
  }

  return (
    <div className="p-5">
      <h1 className="is-size-4">¡VAMOS A CONTRATAR SERVICIO!</h1>
      <p>
        Estoy generando una solicitud de servicio para el profesional
        <strong>
          {" OSVALDO PERES"} (DNI: {"41526396"})
        </strong>
      </p>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(props) => (
          <FormContent
            {...props}
            servicios={services}
            handleFieldBlur={onFieldBlur}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </Formik>
    </div>
  )
}

export default ContratarForm
