import ServicesFilter from "./ServicesFilter"
import ServicesGrid from "./ServiceProvidersGrid"

const ServiceContainer = ({ bannerImage, data }) => {
  const handleDropdownOpen = (e) => {
    console.log(e)
  }
  return (
    <div className="providers-grid">
      <div className="banner-image">
        <img src={bannerImage} alt="" />
      </div>
      <p className="has-text-grey is-size-3 has-text-centered">
        ¡Hola! Busca el profesional que necesites en la red mas grande
      </p>
      <ServicesFilter handleDropdownOpen={handleDropdownOpen} />
      <ServicesGrid data={data} />
    </div>
  )
}
export default ServiceContainer
