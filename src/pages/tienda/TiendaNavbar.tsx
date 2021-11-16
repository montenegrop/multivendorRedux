import React, { useState } from "react"
import Link from "next/link"
import Modal from "react-modal"
import NavBarShopContactModal from "../../components/Modal/NavBarShopModal/component"
import { ShopModalCompanyContainer } from "../../components/Modal/NavBarShopModal/container/ShopModalCompanyContainer"
const TiendaNavbar = () => {
  const [companyModal, setCompanyModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)

  const handleClicModal = (e) => {
    if (e.target.id == "company") {
      setCompanyModal(true)
      setContactModal(false)
    } else if (e.target.id == "contact") {
      setCompanyModal(false)
      setContactModal(true)
    } else {
      setCompanyModal(false)
      setContactModal(false)
    }
  }
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

        <a
          className="navbar-item"
          id="company"
          onClick={handleClicModal}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          Empresa
        </a>

        <a
          className="navbar-item"
          id="contact"
          onClick={handleClicModal}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
        >
          Contacto
        </a>
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
      <Modal
        isOpen={companyModal || contactModal}
        onRequestClose={handleClicModal}
        ariaHideApp={false}
        style={{
          content: {
            width: "70%",
            height: "85vh",
            padding: "30px",
            left: "15%",
            opacity: 15,
            borderRadius: "20px",
          },
          overlay: { zIndex: 1000 },
        }}
      >
        {companyModal && <ShopModalCompanyContainer />}
        {contactModal && <NavBarShopContactModal />}
      </Modal>
    </nav>
  )
}

export default TiendaNavbar
