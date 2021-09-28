import { useEffect, useState } from "react"
import useInView from "react-cool-inview"
import { useDispatch, useSelector } from "react-redux"
import ProviderContainer from "../../components/ServicesProviders/ProviderContainer"
import { SERVICE_PROVIDERS_INIT } from "../../state/actions/serviceProviders"
import { RootState } from "../../state/reducers"
import { useRouter } from "next/router"
import Banner from "../../components/Banner"

const ServiceProvidersPage = () => {
  const router = useRouter()
  const services = router.query.service ? router.query.service : null

  const [maxProviders, setMaxProviders] = useState(5)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      SERVICE_PROVIDERS_INIT({
        numberOfProviders: maxProviders,
        servicesArray: services,
      })
    )
  }, [maxProviders])
  const serviceProviders = useSelector((state: RootState) => state.serviceProviders.providers)
  console.log(serviceProviders)

  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: "1px 0px",
    // When the last item comes to the viewport
    onEnter: () => {
      setMaxProviders(maxProviders + 5)
    },
  })
  const banner_image =
    "https://media-exp1.licdn.com/dms/image/C5612AQE80C_qJ3GEaw/article-cover_image-shrink_600_2000/0/1520105529084?e=1635984000&v=beta&t=4Q2biN5HiqImGAK2FQRJSp06GyutqUKRPdghtFcLD7A"
  const banner_title = "Proveedores De Servicio"
  return (
    <div>
      <Banner banner_image={banner_image} banner_title={banner_title} />
      {serviceProviders && (
        <ProviderContainer
          providers={serviceProviders}
          observe={observe}
          maxProviders={maxProviders}
        />
      )}
    </div>
  )
}
export default ServiceProvidersPage
