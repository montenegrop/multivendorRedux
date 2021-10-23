import React, { useEffect, useState } from "react"

import { GoogleLogin, GoogleLogout } from "react-google-login"
import { useDispatch } from "react-redux"
import { LOG_IN } from "../../state/actions/loggin"

const clientId = "183772661047-r2ldbttntgo92a56kb0stgtr121j56fe.apps.googleusercontent.com"

export const LoginWithGoogle = () => {
  const [userId, setUserId] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const userIdStorage = window.localStorage.getItem("userId")
    if (userIdStorage) {
      const userIdParse = JSON.parse(userIdStorage)
      setUserId(userIdParse)
    } else {
      window.localStorage.setItem("userId", JSON.stringify(userId))
    }
  }, [])

  const onLoginSuccess = (res) => {
    console.log(res)

    dispatch(LOG_IN({ user: res.profileObj.email, password: "" }))
    setUserId(res.tokenId)
    window.localStorage.setItem("userId", JSON.stringify(res.tokenId))
  }

  const onFailure = (res) => {
    console.log("Login failed: res:", res)
    alert(`Fallo en inicio de sesion, intente de nuevo`)
  }

  const onLogoutSuccess = () => {
    console.log("Logout made successfully")
    setUserId("")
    window.localStorage.setItem("userId", JSON.stringify(""))
  }
  return (
    <>
      {userId == "" ? (
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            style={{ marginTop: "100px" }}
            isSignedIn={true}
          />
        </div>
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
        ></GoogleLogout>
      )}
    </>
  )
}
