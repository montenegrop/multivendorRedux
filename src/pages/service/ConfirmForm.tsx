import React from "react"
import Modal from "react-modal"

const ConfirmModal = ({ modalOpen, setModalOpen }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(!modalOpen)}
      style={{
        content: {
          width: "80%",
          position: "relative",
          top: "40vh",
          left: "10%",
          padding: "15px 0px",
        },
        overlay: { zIndex: 1500 },
      }}
    >
      <div className="has-text-centered">
        <h1 className="is-size-4">
          ¿Desea confirmar el envío de solicitud de servicio de ELECTRICIDAD #12412412 a OSVALDO
          PEREZ?
        </h1>
        <img src="/images/checkImage.png" alt="" width={50} className="mr-6 is-clickable" />
        <img src="/images/cancelImage.png" alt="" width={50} className="is-clickable" />
      </div>
    </Modal>
  )
}

export default ConfirmModal
