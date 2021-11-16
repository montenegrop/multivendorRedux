import { useState } from "react"
import Modal from "react-modal"
import { QuestionCreateCompanyModal } from "./QuestionCreateCompanyModal"
const CreateCompanyModal = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClicModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <div className="has-text-centered create-company-modal">
      <h1 className="is-size-3 mb-4">Cuenta Empresa. Ingresa tus datos</h1>
      <div className="grid-2col">
        <div className="mx-auto">
          <label htmlFor="company-cuit" className="label has-text-left">
            CUIT
          </label>
          <input id="company-cuit" className="input string-input" />
        </div>

        <div className="mx-auto">
          <label htmlFor="company-name" className="label has-text-left">
            Razon Social
          </label>
          <input id="company-name" className="input string-input" />
        </div>
        <div className="mx-auto">
          <label htmlFor="company-mail" className="label has-text-left">
            E-mail
          </label>
          <input id="company-mail" className="input string-input" />
        </div>
        <div className="mx-auto">
          <label htmlFor="company-password" className="label has-text-left">
            Clave
          </label>
          <input id="company-password" className="input string-input" />
        </div>
      </div>
      <div className="mb-5">
        <input type="checkbox" name="" id="company-terms" />
        <label htmlFor="company-terms" className="has-text-left">
          Acepto Terminos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaración
          de Privacidad
        </label>
      </div>
      <button className="button is-large polygon-button secondary-color " onClick={handleClicModal}>
        Continuar
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleClicModal}
        ariaHideApp={false}
        style={{
          content: {
            width: "70%",
            height: "80vh",
            padding: "20px",
            left: "15%",
            opacity: 15,
          },
          overlay: { zIndex: 1000 },
        }}
      >
        <QuestionCreateCompanyModal />
      </Modal>
    </div>
  )
}
export default CreateCompanyModal
