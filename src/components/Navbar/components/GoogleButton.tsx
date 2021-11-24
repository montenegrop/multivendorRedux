import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import GoogleIcon from "../../Icons/GoogleIcon"

const GoogleButton = () => {
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <button onClick={() => loginWithRedirect()} className="button login-buttons">
        <div className="login_form_icon">
          <GoogleIcon />
        </div>
        Ingresa con Google
      </button>
      <button
        className="login-buttons"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </>
  )
}

export default GoogleButton
