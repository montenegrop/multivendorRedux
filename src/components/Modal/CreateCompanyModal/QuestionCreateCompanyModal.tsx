import { useState } from "react"
import Modal from "react-modal"
import { FinishModal } from "./FinishModal"
import { WholesalerModal } from "./WholesalerModal"
export const QuestionCreateCompanyModal = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [finishModal, setFinishModal] = useState(false)
  const handleClicFinishModal = () => {
    setFinishModal(!finishModal)
  }
  const handleClicModal = () => {
    setModalOpen(!modalOpen)
  }
  const closeModals = () => {
    setModalOpen(false)
    setFinishModal(false)
  }
  return (
    <div className="has-text-centered px-6" id="modal-step-1-3-1">
      <h1 className="is-size-3 has-text-grey">Cuenta Empresa</h1>
      <p className="is-size-5 has-text-grey">
        Te haremos unas preguntas para crear una mejor experiencia en relaciones a los usuarios
      </p>
      <div className="p-3  rounded-20 bg-yellow-opaque">
        <div className="grid-2col">
          <div>
            <h2 className="is-size-4 has-text-left has-text-grey">
              ¿Vendes a consumidores finales?
            </h2>
          </div>
          <div className="grid-2row has-text">
            <label htmlFor="yes" className="mr-3">
              <input type="radio" name="option" id="yes" onClick={handleClicFinishModal} />
              <strong> SI</strong>
            </label>
            <label htmlFor="no">
              <input type="radio" name="option" id="no" onClick={handleClicModal} />
              <strong> NO</strong>
            </label>
          </div>
        </div>
        <img src="./images/paso 1.3.1.png" alt="" className="mx-auto rounded-20" width={230} />
      </div>
      <Modal
        isOpen={modalOpen || finishModal}
        onRequestClose={closeModals}
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
        {modalOpen && <WholesalerModal closeWholesalerModal={handleClicModal} />}
        {
          finishModal && <FinishModal /> /* (
          <div
            className="has-text-centered px-5 is-flex is-flex-direction-column is-justify-content-center"
            style={{ height: "100%" }}
          >
            <div>
              <p className="is-size-4 has-text-grey ">
                ¡Listo! Tus datos han sido cargados correctamente.
              </p>
              <br />
              <p className="is-size-4 has-text-grey ">
                Revisa en tu casilla de email para completar alta de cuenta
              </p>
              <div className="mx-auto succes-rectangle mt-6"></div>
            </div>
          </div>
        ) */
        }
      </Modal>
    </div>
  )
}
