import ServicesFilter from "./ServicesFilter"
import ServicesGrid from "./ServiceProvidersGrid"

const ServiceContainer = ({ bannerImage, data }) => {
  const handleDropdownOpen = (id) => {
    document.getElementById(id).classList.toggle("is-active")
  }
  return (
    <div className="providers-grid">
      <div className="banner-image">
        <img src={bannerImage} alt="" />
      </div>
      <p className="has-text-grey is-size-3 has-text-centered mb-3">
        ¡Hola! Busca el profesional que necesites en la red mas grande
      </p>
      <ServicesFilter handleDropdownOpen={handleDropdownOpen} />
      <ServicesGrid data={data} />
    </div>
  )
}
export default ServiceContainer
