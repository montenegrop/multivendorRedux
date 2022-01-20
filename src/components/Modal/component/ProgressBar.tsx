import { useState } from "react"
import Modal from "react-modal"
import RateModalContainer from "../RateModal/container"
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"
const ProgressBarComponent = ({ desc, progress }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClicModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <div className="progress_descrp px-5 mb-4">
        <p className="is-size-5">{desc}</p>
      </div>
      <div className="px-5 mb-4">
        <ProgressBar percent={progress * 33.34} filledBackground="#ffaa33">
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="10"
                src="../images/Circle.png"
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="10"
                src="../images/Circle.png"
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="10"
                src="../images/Circle.png"
                alt=""
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)`, marginRight: "10px" }}
                width="10"
                src="../images/Circle.png"
                alt=""
              />
            )}
          </Step>
        </ProgressBar>
      </div>

      {progress === 3 && (
        <a
          className="is-clickable px-5 color-secondary"
          onClick={handleClicModal}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          Calificar
        </a>
      )}
      <hr style={{ backgroundColor: "rgba(211, 211, 211, 0.6)" }} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleClicModal}
        ariaHideApp={false}
        style={{
          content: {
            width: "70%",
            height: "100vh",
            position: "relative",
            padding: "20px",
            left: "15%",
            paddingBottom: "50px",
            opacity: 15,
            overflow: "scroll",
          },
          overlay: { zIndex: 1000 },
        }}
      >
        <RateModalContainer />
      </Modal>
    </>
  )
}
export default ProgressBarComponent
