import Link from "next/link"
import React from "react"

const ServiceGridCard = ({ service }) => {
  return (
    <Link href={`serviciosBusqueda?service=${service.id}`}>
      <div
        className="provider-grid-card m-3 "
        style={{ backgroundImage: `url(${service.category.backgroundImage?.url})` }}
      >
        <h5 className="bottom-0 mx-auto">{service.name}</h5>
      </div>
    </Link>
  )
}
export default ServiceGridCard
