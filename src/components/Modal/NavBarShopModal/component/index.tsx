import FacebookIcon from "../../../Icons/FacebookIcon"
import InstagramIcon from "../../../Icons/InstagramIcon"
import TwitterIcon from "../../../Icons/TwitterIcon"
import YoutubeIcon from "../../../Icons/YoutubeIcon"
import { ShopCardModalContainer } from "../container/ShopCardModalContainer"
const NavBarShopContactModal = ({ userData }) => {
  userData
  const vendors = [
    {
      img: "https://www.redaccionmedica.com/images/destacados/-buscamos-la-recuperacion-completa-de-la-persona-con-depresion--7353.jpg",
      name: "Ramon",
      title: "Gerente de ventas",
      phone: "34111222",
      mail: "ramon1@hotmail.com",
    },
    {
      img: "https://www.redaccionmedica.com/images/destacados/-buscamos-la-recuperacion-completa-de-la-persona-con-depresion--7353.jpg",
      name: "Matias",
      title: "Lider de ventas",
      phone: "34111222",
      mail: "matias@hotmail.com",
    },
  ]
  const buyers = [
    {
      img: "https://www.redaccionmedica.com/images/destacados/-buscamos-la-recuperacion-completa-de-la-persona-con-depresion--7353.jpg",
      name: "Ramon2",
      title: "Gerente de ventas",
      phone: "34111222",
      mail: "ramon2@hotmail.com",
    },
    {
      img: "https://www.redaccionmedica.com/images/destacados/-buscamos-la-recuperacion-completa-de-la-persona-con-depresion--7353.jpg",
      name: "Matias2",
      title: "Gerente de ventas",
      phone: "34111222",
      mail: "matias2@hotmail.com",
    },
  ]
  return (
    <div className="contact-modal-navbar has-text-centered">
      {/*   <h1 className="is-size-1">{userData.serviceContact.fullName}</h1> */}
      {/* <p className="is-size-4">{userData.serviceContact.email}</p> */}
      <div className="buttons is-flex is-flex-wrap-wrap ">
        <button className="button is-large polygon-button secondary-color ">
          {/* <Link
            href={`https://api.whatsapp.com/send?phone=+549${userData.serviceContact.phone}&text=Me gustaria conseguir informacion para realizar una compra`}
          > */}
          <a className="has-text-black">Enviar Mensaje</a>
          {/* </Link> */}
        </button>
        <button className="button is-large polygon-button secondary-color has-text-black">
          Ordenar
        </button>
      </div>
      <h2 className="is-size-2 has-text-black">¡Seguinos en Redes!</h2>
      <div className="is-flex is-justify-content-center ">
        <FacebookIcon size={50} />
        <InstagramIcon size={50} />
        <YoutubeIcon size={70} />
        <TwitterIcon size={50} />
      </div>
      <h3 className="mt-5 is-size-3">VENTAS</h3>
      <ShopCardModalContainer data={vendors} />
      <h3 className="mt-5 is-size-3">COMPRADORES</h3>
      <ShopCardModalContainer data={buyers} />
    </div>
  )
}
export default NavBarShopContactModal
