import React, { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import Cart from "./Cart"
import Shop from "./Shop"
import UserIcon from "./UserIcon"
import LoginForm from "./LoginForm"
import Modal from "react-modal"
import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

import ModalServicios from "../Modal/container/ModalServicios"
import { useRouter } from "next/router"
import CreateUserOne from "./CreateUserOne"
import LogoutForm from "./LogoutForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import your icons
import { faTimes } from "@fortawesome/free-solid-svg-icons"
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
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
      id="principal-nav-bar"
    >
      <div className={`navbar_layout `}>
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
            className={`navbar-burger`}
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
        <div className={`navbar-menu `}>
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
          <Modal
            isOpen={isActive}
            onRequestClose={() => setIsActive(false)}
            ariaHideApp={false}
            style={{
              content: {
                width: "100vw",
                height: "100vh",
                inset: "0px",
                position: "relative",
                padding: "0px",
                opacity: 1,
              },
              overlay: { zIndex: 90000 },
            }}
          >
            <div id="mobile-burger-menu">
              <header className="bg-primary is-flex is-justify-content-space-between is-align-items-center px-6">
                <Logo size={"70"} />
                <div
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                  onClick={() => setIsActive(false)}
                  onKeyDown={() => setIsActive(false)}
                  className="is-clickable"
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
                </div>
              </header>

              <nav className="my-5 has-text-grey p-4">
                <p className="is-size-3  is-clickable">Inicio</p>
                <hr className="has-background-grey-light my-2 mx-0 " style={{ height: "2px" }} />
                <p className="is-size-3 is-clickable">Mis Compras</p>
                <div
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                  onKeyDown={() => {
                    setIsActive(false)
                    onClose(!isOpen)
                  }}
                  onClick={() => {
                    setIsActive(false)
                    onClose(!isOpen)
                  }}
                >
                  <p className="is-size-3  is-clickable">Mis Servicios</p>
                </div>
                <hr className="has-background-grey-light my-2 mx-0 " style={{ height: "1px" }} />
                <p className="is-size-3 is-clickable ">Mis Datos</p>
                <p className="is-size-3  is-clickable">Seguridad</p>
                <p className="is-size-3 is-clickable ">Privacidad</p>
                <hr className="has-background-grey-light my-2 mx-0 " style={{ height: "2px" }} />
                <p className="is-size-3 is-clickable ">Salir</p>
                <hr className="has-background-grey-light my-2 mx-0 " style={{ height: "2px" }} />
              </nav>
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
