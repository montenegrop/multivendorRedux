import React from "react"
import FacebookIcon from "../../Icons/FacebookIcon"

const FacebookButton = ({ href }) => {
  return (
    <a
      type="submit"
      className="login_form_button_sm login_form_button_sm_f"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="login_form_icon">
        <FacebookIcon size="100px" />
      </div>
      Ingresa con Facebook
    </a>
  )
}

export default FacebookButton
