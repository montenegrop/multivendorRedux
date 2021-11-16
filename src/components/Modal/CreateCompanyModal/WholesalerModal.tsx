import { useState } from "react"
import Modal from "react-modal"
import { FinishModal } from "./FinishModal"
export const WholesalerModal = ({ closeWholesalerModal }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClicModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <div className="wholesaler-modal px-5 ">
      <div className="grid-2col pt-5 mt-5 bg-yellow-opaque">
        <label htmlFor="wholesaler" className="has-text-centered">
          <p className="is-size-5 has-text-grey px-6">
            Soy vendedor mayorista o distribuidor nacional
          </p>
          <img
            src="./images/WholesalerImage.png"
            alt=""
            className="mx-auto rounded-20"
            width={200}
          />
          <br />
          <input type="radio" name="wholesaler" id="wholesaler" className="mx-auto size-20px" />
        </label>
        <label htmlFor="wholesalerProvider" className="has-text-centered">
          <p className="is-size-5 has-text-grey px-6">
            Soy marca corporativa y proveo a mayoristas{" "}
          </p>
          <img
            src="./images/WholesalerProviderImage.png"
            alt=""
            className="mx-auto rounded-20"
            width={200}
          />
          <br />
          <input
            type="radio"
            name="wholesaler"
            id="wholesalerProvider"
            className="mx-auto size-20px"
          />
        </label>
      </div>
      <div className="grid-2col has-text-centered mt-5">
        <button className="button is-outlined mx-auto" onClick={closeWholesalerModal}>
          Atras
        </button>
        <button className="button is-outlined mx-auto" onClick={handleClicModal}>
          Siguiente
        </button>
      </div>
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
        <FinishModal />
      </Modal>
    </div>
  )
}
