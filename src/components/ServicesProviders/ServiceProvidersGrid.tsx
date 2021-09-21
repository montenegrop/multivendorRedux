import ServiceGridCard from "./ProviderGridCard"

const ServicesGrid = ({ data }) => {
  return (
    <div className="service-providers-grid is-flex  is-justify-content-space-around is-flex-wrap-wrap">
      {data.map((item) => {
        return <ServiceGridCard image={item} key={item} />
      })}
    </div>
  )
}
export default ServicesGrid
