import ServicesFilter from "./ServicesFilter"
import ServicesGrid from "./ServiceProvidersGrid"
import { useState } from "react"
import Banner from "../Banner"

const ServiceContainer = ({ bannerImage, services }) => {
  const [profFilter, setProfFilter] = useState("")
  const [zoneFilter, setZoneFilter] = useState("")
  const [turnFilter, setTurnFilter] = useState("")
  const handleToggleDropdown = (id) => {
    if (id == "profesion" && profFilter == "") setProfFilter("is-active")
    else setProfFilter("")
    if (id == "zone" && zoneFilter == "") setZoneFilter("is-active")
    else setZoneFilter("")
    if (id == "turn" && turnFilter == "") setTurnFilter("is-active")
    else setTurnFilter("")
  }

  const banner_title = "¡Hola! Busca el profesional que necesites en la red mas grande"
  return (
    <>
      <div className="providers-grid">
        <Banner banner_image={bannerImage} banner_title={banner_title} />
        <ServicesFilter
          handleToggleDropdown={handleToggleDropdown}
          profFilter={profFilter}
          zoneFilter={zoneFilter}
          turnFilter={turnFilter}
        />
        <ServicesGrid services={services} />
      </div>
    </>
  )
}
export default ServiceContainer
