/* import { useAuth0 } from "@auth0/auth0-react" */
import React from "react"
/* import GoogleIcon from "./GoogleIcon"*/
import GoogleLogin from "react-google-login"
import { GoogleLogout } from "react-google-login"

import { useGoogleLogin } from "react-google-login"
export const GoogleButton = ({ isSubmitting }) => {
  const { loaded } = useGoogleLogin({
    clientId: "183772661047-r2ldbttntgo92a56kb0stgtr121j56fe.apps.googleusercontent.com",
  })
  console.log(isSubmitting)

  const responseGoogle = (response) => {
    console.log(response)
  }
  const logout = () => {
    console.log("logout")
  }
  return (
    <>
      {loaded ? (
        <GoogleLogin
          clientId="183772661047-r2ldbttntgo92a56kb0stgtr121j56fe.apps.googleusercontent.com"
          buttonText="Ingresa con Google"
          className="login_form_button_sm login_form_button_sm_g"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <GoogleLogout
          clientId="183772661047-r2ldbttntgo92a56kb0stgtr121j56fe.apps.googleusercontent.com"
          buttonText="Logout"
          className="login_form_button_sm login_form_button_sm_g"
          onLogoutSuccess={logout}
          onFailure={logout}
        ></GoogleLogout>
      )}
    </>
  )

  {
    /*
    <button
      type="submit"
      className="login_form_button_sm login_form_button_sm_g"
      disabled={isSubmitting}
    >
      <div className="login_form_icon">
        
        
         <GoogleIcon /> 
      </div>
       Ingresa con Google 
    </button>*/
  }
  {
    /* const GoogleButton = () => {
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
} */
  }
}
