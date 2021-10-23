import React from "react"
import Modal from "react-modal"

import { LOG_OUT } from "../../state/actions/loggin"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { User } from "../../generated/graphql"

const LogoutForm = ({
  user,
  onCloseQuery,
  isOpen,
  onRequestClose,
}: {
  user: User
  onCloseQuery: any
  isOpen: any
  onRequestClose: any
}) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const customStyles = {
    overlay: { zIndex: 10 },
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="login_form_modal"
      style={customStyles}
    >
      <div className="login_form_container">
        {user && <h3 className="h3">{user.email}</h3>}
        <button
          onClick={() => {
            dispatch(LOG_OUT())
            router.push({ query: onCloseQuery })
          }}
          className="login_form_button"
        >
          Cerrar sesión
        </button>
      </div>
    </Modal>
  )
}

export default LogoutForm
