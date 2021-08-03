import React, { useState } from "react"
import Cart from "./Cart"
import Logo from "./Logo"
import UserIcon from "./UserIcon"
import HamburgerIcon from "./HamburgerIcon"

const Home = () => {
  const user = "Carlos"
  const [hideMenu, setHideMenu] = useState("hidden")

  const hamburgerClick = () => {
    hideMenu ? setHideMenu("") : setHideMenu("hidden")
  }

  return (
    <>
      <nav className="navbar">
        <div className="responsive_container">
          <div className="logo_container">
            <Logo />
          </div>
          <div
            aria-hidden="true"
            className="hamburger_container"
            onClick={hamburgerClick}
            onKeyDown={hamburgerClick}
          >
            <HamburgerIcon />
          </div>
          <div>
            <input type="text" className="input" placeholder="Buscar..." />
          </div>
          <div className="cart_container">
            <Cart />
          </div>
        </div>
        <div className={"user_data_container " + hideMenu}>
          <div className="user_data">
            <div className="user_icon">
              <UserIcon />
            </div>
            {user}
          </div>
          <div className="my_services_container">MIS SERVICIOS</div>
        </div>
      </nav>
      <div className="carousel_container">this is a carousel</div>
    </>
  )
}

export default Home
