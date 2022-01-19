import Logo from "../Navbar/Logo"

const Footer = () => {
  return (
    <>
      <div
        className="has-background-white"
        style={{
          backgroundImage: `url(./images/curve.png)`,
          backgroundSize: "100%",
          paddingTop: "150px",
        }}
      >
        <div className="home-content mx-auto px-5  ">
          <div className="is-flex is-justify-content-space-evenly px">
            <div>
              <strong>Prestador</strong>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
            <div>
              <strong>Tienda</strong>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
            <div>
              <strong>Minorista </strong>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
              <p className="color-secondary mb-0">Nombre</p>
            </div>
            <div>
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
      <div className="home-content is-flex is-justify-content-space-between is-align-items-center mx-auto px-5 pb-6">
        <div className="is-flex is-align-content-center">
          <div className="bg-primary px-2 pt-2 pb-1 ">
            <Logo />
          </div>
          &nbsp;
          <p className="my-auto has-text-grey	">Privacy Policity</p>&nbsp;
          <p className="my-auto has-text-grey	">Terms of Use</p>
        </div>
        <div>
          <p>© 2021 Company Name. Some rights reserved.</p>
        </div>
        <div>
          <p> F W I</p>
        </div>
      </div>
    </>
  )
}
export default Footer
