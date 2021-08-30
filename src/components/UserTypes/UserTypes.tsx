import React from "react"
import UserTypeIcon1 from "./UserTypeIcon1"
import UserTypeIcon2 from "./UserTypeIcon2"
import UserTypeIcon3 from "./UserTypeIcon3"
import UserTypeIcon4 from "./UserTypeIcon4"
import UserTypeIcon5 from "./UserTypeIcon5"

const UserTypes = () => {
  return (
    <>
      <div className="user_types_main_container">
        <div className="user_types_item">
          <div className="user_types_item_icon_container">
            <div className="user_types_item_icon">
              <UserTypeIcon1 />
            </div>
            <div className="user_types_item_icon">
              <UserTypeIcon2 />
            </div>
          </div>
          <div className="user_types_item_text">
            <h3>USUARIOS FINALES Y PRESTADORES DE SERVICIO</h3>
            <p className="user_types_item_text_p">
              BUSCA TODOS LOS PRODUCTOS Y SERVICIOS QUE NECESITES PARA TU PROXIMO PROYECTO. COMPARÁ
              PRECIOS, UBICACIONES Y MEJORES CONDICIONES A UN CLIC DE DISTANCIA
            </p>
          </div>
        </div>
        <div className="user_types_item">
          <div className="user_types_item_icon_container">
            <UserTypeIcon3 />
          </div>
          <div className="user_types_item_text">
            <h3>tiendas minoristas</h3>
            <p className="user_types_item_text_p">
              crea tu tienda digital, ofrecé tu lista completa de productos en la mauor red de
              construcción. participá en licitaciones minoristas comprando o vendiendo
            </p>
          </div>
        </div>
        <div className="user_types_item">
          <div className="user_types_item_icon_container">
            <UserTypeIcon4 />
          </div>
          <div className="user_types_item_text">
            <h3>mayoristas / distribuidores</h3>
            <p className="user_types_item_text_p">
              crea tu tienda online, conectate con tus distribuidores minoristas, y tambien con tus
              proveedores corporativos
            </p>
          </div>
        </div>
        <div className="user_types_item">
          <div className="user_types_item_icon_container">
            <UserTypeIcon5 />
          </div>
          <div className="user_types_item_text">
            <h3>corporativo</h3>
            <p className="user_types_item_text_p">
              licitaciones unicamente con mayoristas y corporativos, operaciones b2b, mejores y mas
              competitivos precios
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserTypes
