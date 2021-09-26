import { useEffect, useState } from "react"
import useInView from "react-cool-inview"
import { useDispatch, useSelector } from "react-redux"
import ProviderContainer from "../../components/ServicesProviders/ProviderContainer"
import { SERVICE_PROVIDERS_INIT } from "../../state/actions/serviceProviders"
import { RootState } from "../../state/reducers"
import { useRouter } from "next/router"

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
  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: "1px 0px",
    // When the last item comes to the viewport
    onEnter: () => {
      setMaxProviders(maxProviders + 5)
    },
  })
  return (
    <div>
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
