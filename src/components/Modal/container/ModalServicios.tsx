import Modal from "react-modal"
import ModalCard from "../component/ModalCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import your icons
import { faTimes } from "@fortawesome/free-solid-svg-icons"
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
          <div className=" is-flex is-justify-content-space-between pr-5">
            <h1 className="is-size-3 ml-5">Mis Servicios</h1>
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              color="orange"
              className="ml-auto is-clickable"
              role="button"
              tabIndex={0}
              aria-hidden="true"
              onClick={() => onClose(false)}
              onKeyDown={() => onClose(false)}
            />
          </div>

          <br />
          <ModalCard body={progress1.body} />
          <ModalCard body={progress2.body} />
        </div>
      </Modal>
    </div>
  )
}
export default ModalComponent
