import React, { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import Cart from "./Cart"
import Shop from "./Shop"
import UserIcon from "./UserIcon"
import LoginForm from "./LoginForm"

import { useSelector } from "react-redux"
import { RootState } from "../../state/reducers"

import ModalComponent from "../Modal/container/Modal"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, onClose] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)

  const usuario = useSelector((state: RootState) => state.loggin.data?.user ?? "sds")

  // x ?? b

  // function openModalLogin() {
  //   setIsOpenLogin(true)
  // }

  function closeModalLogin() {
    setIsOpenLogin(false)
  }

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
                    setIsOpenLogin(true)
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
          <ModalComponent isOpen={isOpen} onClose={onClose} />
          <LoginForm isOpen={isOpenLogin} onRequestClose={closeModalLogin} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
