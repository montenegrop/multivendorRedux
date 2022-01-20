import { UserTypeCard } from "./UserTypeCard"

const UserTypes = () => {
  const userProvider = {
    image: "users-providersIcon",
    title: "Usuarios finales y prestadores de servicios",
    text: "Buscá todos los productos y servicios que necesites para tu próximo proyecto. compará precios, ubicaciones y mejores condiciones a un clic de distancia.",
  }
  const retailer = {
    image: "retailersIcon",
    title: "Tiendas Minoristas",
    text: "Crea tu tienda digital, ofrecé tu lista completa de productos en la mayor red de construcción. Participá en licitaciones minoristas comprando o vendiendo.",
  }
  const wholesaler = {
    image: "wholesalersIcon",
    title: "Mayoristas / Distribuidores",
    text: "Crea tu tienda online, conectate con tus distribuidores minoristas, y también con tus proveedores corporativos.",
  }
  const corporate = {
    image: "corporateIcon",
    title: "Corporativos",
    text: "Licitaciones únicamente con mayoristas y corporativos, operaciones b2b, mejores y mas competitivos precios.",
  }
  return (
    <div className="has-background-white user-types">
      <div className="home-content mx-auto">
        <h2 className="has-text-centered is-uppercase has-text-weight-bold color-secondary  py-5 mb-0">
          ¿Por qué somos la mayor red de construcción?
        </h2>
        <div className="grid-2row mx-auto has-text-centered">
          <UserTypeCard data={userProvider} />
          <div className="grid-3col">
            <UserTypeCard data={retailer} />
            <UserTypeCard data={wholesaler} />
            <UserTypeCard data={corporate} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTypes

{
  /*       <div className="user_types_main_container ">
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
              crea tu tienda digital, ofrecé tu lista completa de productos en la mayor red de
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
      </div> */
}
