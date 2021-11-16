import { useEffect, useState } from "react"
import Modal from "react-modal"
import RateModalContainer from "../RateModal/container"
const ProgressBar = ({ id, index, desc, progress }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClicModal = () => {
    setModalOpen(!modalOpen)
  }
  let progress_div: any = []
  useEffect(() => {
    if (progress > 4) {
      progress = 4
    }
    progress_div = document.getElementsByClassName(`${id} ${index}`)
    for (let i = 0; i < progress; i++) {
      progress_div[i].classList.add("succes_progress")
    }
  }, [progress])
  return (
    <>
      <div className="progress_descrp">
        <p>{desc}</p>
      </div>

      <div className="progress_grid">
        <div className={`progress_div left_rectangle ${id} ${index}`}></div>
        <div className={`progress_div ${id} ${index}`}></div>
        <div className={`progress_div ${id} ${index}`}></div>
        <div className={`pt-2 progress_div right_rectangle ${id} ${index}`}>
          {id === 1 && (
            <a
              className="is-clickable"
              onClick={handleClicModal}
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
            >
              Calificar
            </a>
          )}
        </div>
      </div>
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
export default ProgressBar
