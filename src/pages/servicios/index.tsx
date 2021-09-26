import ServiceContainer from "../../components/ServicesProviders/ServicesContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { SERVICES_LIST_INIT } from "../../state/actions/servicesList"
import { RootState } from "../../state/reducers"

const Servicios = () => {
  const bannerImage = "https://brandme.la/wp-content/uploads/2018/01/Idealightbulbs.jpg"
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICES_LIST_INIT())
  }, [])

  const service_list = useSelector((state: RootState) => state.servicesList.services)
  return <ServiceContainer bannerImage={bannerImage} services={service_list}></ServiceContainer>
}

export default Servicios
