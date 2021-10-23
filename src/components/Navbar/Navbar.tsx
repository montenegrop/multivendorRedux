import React, { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import Cart from "./Cart"
import Shop from "./Shop"
import UserIcon from "./UserIcon"
import LoginForm from "./LoginForm"

import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

import ModalServicios from "../Modal/container/ModalServicios"
import { useRouter } from "next/router"
import CreateUserOne from "./CreateUserOne"
import LogoutForm from "./LogoutForm"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, onClose] = useState(false)

  const usuario = useSelector((state: RootState) => state.loggin.data?.user)

  const router = useRouter()
  const logginQuery = "loggin"
  const logoutQuery = "logout"
  const registerOneQuery = "create_account_one"
  // const registerTwoQuery = "create_account_two"

  const { loggin, create, logout, ...navbarCleanQuery } = router.query

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className={`navbar_layout ${isActive ? "is-active" : ""}`}>
        <div className="navbar-brand">
          <Link href="/">
            <a className={`navbar-item navbar_logo`}>
              <Logo />
            </a>
          </Link>
          <button
            onClick={() => {
              setIsActive(!isActive)
            }}
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <input
            className="input is-primary navbar_search_input"
            type="text"
            placeholder="Buscar..."
          />
          <div className="navbar-end navbar_cart_responsive">
            <a className="button is-primary navbar-item">
              <Cart />
            </a>
          </div>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-primary navbar_user"
                  onClick={() => {
                    if (!usuario) {
                      router.push({ query: { ...router.query, ...{ loggin: logginQuery } } })
                    } else {
                      router.push({ query: { ...router.query, ...{ logout: logoutQuery } } })
                    }
                  }}
                >
                  {usuario && usuario.email}{" "}
                  <div className="navbar_user_icon">
                    <UserIcon />
                  </div>
                </button>
                <button className="button is-primary" onClick={() => onClose(!isOpen)}>
                  MIS SERVICIOS
                </button>
                <a className="button is-primary">
                  <Shop />
                </a>
                <a className="button is-primary navbar_cart">
                  <Cart />
                </a>
              </div>
            </div>
          </div>
          {/* onRequestClose={() => router.push(`/service/${router.query.serviceId}`)} */}
          <ModalServicios isOpen={isOpen} onClose={onClose} />
          <LoginForm
            user={usuario}
            onCloseQuery={navbarCleanQuery}
            nextCreateModal={registerOneQuery}
            isOpen={loggin === logginQuery}
            onRequestClose={() => {
              router.push({ query: navbarCleanQuery })
            }}
          />
          <LogoutForm
            user={usuario}
            onCloseQuery={navbarCleanQuery}
            isOpen={logout === logoutQuery && loggin != logginQuery}
            onRequestClose={() => {
              router.push({ query: navbarCleanQuery })
            }}
          />
          <CreateUserOne
            onCloseQuery={navbarCleanQuery}
            isOpen={create === registerOneQuery && loggin != logginQuery}
            onRequestClose={() => {
              router.push({ query: navbarCleanQuery })
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
