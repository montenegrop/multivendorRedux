import { useRouter } from "next/router"
import Logo from "../Navbar/Logo"

const Footer = () => {
  const router = useRouter()
  return (
    <>
      <div
        className="footer-user-types partners"
        style={{
          backgroundImage: `${router.pathname == "/" ? "url(./images/curve.png)" : ""}`,
          paddingTop: "150px",
          backgroundColor: "rgb(243, 241, 238)",
        }}
      >
        <div className="home-content mx-auto   ">
          <div className="grid-4col">
            <div className="has-text-centered">
              <strong>Prestador</strong>

              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
            <div className="has-text-centered">
              <strong>Tienda</strong>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
            <div className="has-text-centered">
              <strong>Minorista </strong>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
            <div className="has-text-centered">
              <strong>Mayorista</strong>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="has-background-grey-light mx-6 " />
      <footer className="home-content subFooter mx-auto px-5 pb-6 has-text-centered">
        <div className="is-flex is-align-items-center is-justify-content-center">
          <div className="bg-primary px-2 ">
            <Logo />
          </div>
          &nbsp;
          <p className="my-auto has-text-grey	">Privacy Policity</p>&nbsp;
          <p className="my-auto has-text-grey	">Terms of Use</p>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <p>© 2021 Company Name. Some rights reserved.</p>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <img src="../images/facebook.png" alt="facebook" width={40} />
          <img src="../images/instagram.png" alt="instagram" width={40} />
          <img src="../images/whatsapp.png" alt="whatsapp" width={40} />
        </div>
      </footer>
    </>
  )
}
export default Footer
