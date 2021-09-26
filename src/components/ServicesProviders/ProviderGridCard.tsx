import Link from "next/link"
import React from "react"

const ServiceGridCard = ({ service }) => {
  return (
    <Link href={`serviciosBusqueda?service=${service.id}`}>
      <div className="provider-grid-card m-3 image grid_img">
        <img src={service.category.backgroundImage?.url} alt="" />
        <h5 className="h5 has-text-centered bottom-0">{service.name}</h5>
      </div>
    </Link>
  )
}
export default ServiceGridCard
