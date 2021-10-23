import Modal from "react-modal"
import ModalCard from "../component/ModalCard"
const ModalComponent = ({ isOpen, onClose }) => {
  const progress1 = {
    id: 1,
    title: "Calificacion Pendiente (1)",
    body: [
      {
        desc: "4/4 - PRESTACIÓN de servicio #100001 OSVALDO PEREZ - ELECTRICIDAD  califica el trabajo PARA COMPLETAR LA EXPERIENCIA",
        progress: 1,
      },
    ],
  }
  const progress2 = {
    id: 2,
    title: "Trabajos a Realizar (2)",
    body: [
      {
        desc: "2/4 - ACEPTACIÓN de servicio #100034 JUAN LOPEZ - PLOMERÍA El prestador aceptó el trabajo.",
        progress: 3,
      },
      {
        desc: "2/4 - ACEPTACIÓN de servicio #100052 CARLOS BOERO - CARPINTERÍA El prestador aceptó el trabajo.",
        progress: 4,
      },
    ],
  }
  return (
    <div className="myServicesModal">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => onClose(false)}
        ariaHideApp={false}
        style={{
          content: {
            width: "40%",
            height: "100vh",
            position: "relative",
            left: "60%",
            padding: "15px 0px",
            opacity: 15,
          },
          overlay: { zIndex: 1000 },
        }}
      >
        <>
          <ModalCard id={progress1.id} title={progress1.title} body={progress1.body} />
          <ModalCard id={progress2.id} title={progress2.title} body={progress2.body} />
        </>
      </Modal>
    </div>
  )
}
export default ModalComponent
