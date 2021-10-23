import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import GoogleIcon from "./GoogleIcon"

const GoogleButton = () => {
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <button
        onClick={() => loginWithRedirect()}
        className="login_form_button_sm login_form_button_sm_g"
      >
        <div className="login_form_icon">
          <GoogleIcon />
        </div>
        Ingresa con Google
      </button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </>
  )
}

export default GoogleButton
