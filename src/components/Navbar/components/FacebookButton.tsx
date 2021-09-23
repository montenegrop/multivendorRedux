import React from "react"
import FacebookIcon from "./FacebookIcon"

const FacebookButton = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      className="login_form_button_sm login_form_button_sm_f"
      disabled={isSubmitting}
    >
      <div className="login_form_icon">
        <FacebookIcon />
      </div>
      Ingresa con Facebook
    </button>
  )
}

export default FacebookButton
