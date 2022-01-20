import Modal from "react-modal"
import ModalCard from "../component/ModalCard"

const ModalComponent = ({ isOpen, onClose }) => {
  const progress1 = {
    id: 1,
    title: "Calificacion Pendiente (1)",
    body: [
      {
        desc: "PRESTACIÓN de servicio #100001 OSVALDO PEREZ - ELECTRICIDAD  califica el trabajo PARA COMPLETAR LA EXPERIENCIA",
        progress: 3,
      },
    ],
  }
  const progress2 = {
    id: 2,
    title: "Trabajos a Realizar (2)",
    body: [
      {
        desc: "ACEPTACIÓN de servicio #100034 JUAN LOPEZ - PLOMERÍA El prestador aceptó el trabajo.",
        progress: 2,
      },
      {
        desc: "ACEPTACIÓN de servicio #100052 CARLOS BOERO - CARPINTERÍA El prestador aceptó el trabajo.",
        progress: 2,
      },
    ],
  }
  return (
    <div className="myServicesModal">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => onClose(false)}
        ariaHideApp={false}
        id="servicesModal"
        style={{
          content: {
            width: "40%",
            height: "100vh",
            position: "relative",
            left: "60%",
            padding: "10px 0px",
            opacity: 1,
          },
          overlay: { zIndex: 1000 },
        }}
      >
        <div className="has-background-white">
          <ModalCard body={progress1.body} />
          <ModalCard body={progress2.body} />
        </div>
      </Modal>
    </div>
  )
}
export default ModalComponent
