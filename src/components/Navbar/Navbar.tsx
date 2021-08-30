import React, { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import Cart from "./Cart"
import Shop from "./Shop"
import UserIcon from "./UserIcon"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/reducers"
import { LOG_IN } from "../../state/actions/loggin"

import ModalComponent from "../Modal/container/Modal"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, onClose] = useState(false)

  const dispatch = useDispatch()
  const logear = () => {
    dispatch(LOG_IN({ user: "cboero111@gmail.com", password: "admin" }))
  }

  const usuario = useSelector((state: RootState) => state.loggin)

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
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
                  logear()
                }}
              >
                {usuario.data && usuario.data.user.email}{" "}
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
          <ModalComponent isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
