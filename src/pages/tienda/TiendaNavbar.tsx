import React from "react"
import Link from "next/link"

const TiendaNavbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className={`navbar-item has-dropdown is-hoverable`}>
          <Link href="#">
            <a className="navbar-link tienda_navbar_link">Categorias</a>
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link href="#">
              <a className="navbar-item">Servicios</a>
            </Link>
            <Link href="#">
              <a className="navbar-item">Otros</a>
            </Link>
          </div>
        </div>

        <Link href="#">
          <a className="navbar-item">Empresa</a>
        </Link>
        <Link href="#">
          <a className="navbar-item">Contacto</a>
        </Link>
      </div>
      <div className="navbar-end is-expanded tienda_navbar_input_container">
        <div className="navbar-item tienda_navbar_input">
          <input
            className="input is-rounded is-normal"
            type="text"
            placeholder="Buscar en esta tienda..."
          />
        </div>
      </div>
    </nav>
  )
}

export default TiendaNavbar
