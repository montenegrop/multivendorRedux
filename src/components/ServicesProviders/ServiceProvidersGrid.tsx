import ServiceGridCard from "./ProviderGridCard"

const ServicesGrid = ({ services }) => {
  return (
    <div className="service-providers-grid is-flex  is-justify-content-space-around is-flex-wrap-wrap">
      {services.map((service, index) => {
        return <ServiceGridCard service={service} key={index} />
      })}
    </div>
  )
}
export default ServicesGrid
