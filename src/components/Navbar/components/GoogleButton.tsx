import React from "react"
import GoogleIcon from "./GoogleIcon"

const GoogleButton = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      className="login_form_button_sm login_form_button_sm_g"
      disabled={isSubmitting}
    >
      <div className="login_form_icon">
        <GoogleIcon />
      </div>
      Ingresa con Google
    </button>
  )
}

export default GoogleButton
