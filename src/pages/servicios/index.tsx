import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { SERVICES_LIST_INIT } from "../../state/actions/servicesList"
import { RootState } from "../../state/reducers"
import { CardSkeleton } from "../../components/Skeleton/CardSkeleton"
import { Banner } from "../../components/Banner"
import ServicesFilter from "../../components/ServicesProviders/ServicesFilter"
import ServicesGrid from "../../components/ServicesProviders/ServiceProvidersGrid"

const Servicios = () => {
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
  const bannerImage = "https://brandme.la/wp-content/uploads/2018/01/Idealightbulbs.jpg"
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICES_LIST_INIT())
  }, [])
  const banner_title = "¡Hola! Busca el profesional que necesites en la red mas grande"
  const serviceList = useSelector((state: RootState) => state.servicesList)
  if (serviceList.error) {
    return <h1>Ocurrio un error.</h1>
  }
  return (
    <div className="providers-grid">
      <Banner banner_image={bannerImage} banner_title={banner_title} />
      <ServicesFilter
        handleToggleDropdown={handleToggleDropdown}
        profFilter={profFilter}
        zoneFilter={zoneFilter}
        turnFilter={turnFilter}
      />
      {!serviceList.loading && !serviceList.error && serviceList.services.length !== 0 ? (
        <ServicesGrid services={serviceList.services} />
      ) : (
        <div className="is-flex is-justify-content-center">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      )}
    </div>
  )
}

export default Servicios
