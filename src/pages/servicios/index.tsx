import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProviderContainer from "../../components/ServicesProviders/ProviderContainer"
import { SERVICE_PROVIDERS_INIT } from "../../state/actions/serviceProviders"
import { RootState } from "../../state/reducers"
/* const data = [
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "NO",
    distance: "3,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
  {
    name: "Roman",
    specialties: ["Plomero", "Cerrajero", "Albañil"],
    score: 4,
    ratings: 3,
    attention24hs: "SI",
    distance: "1,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "SI",
    distance: "3,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
  {
    name: "Juan",
    specialties: ["Plomero", "Cerrajero"],
    score: 5,
    ratings: 8,
    attention24hs: "SI",
    distance: "3,2 Km",
    image:
      "https://us.123rf.com/450wm/afalken/afalken1910/afalken191001330/131434789-representaci%C3%B3n-3d-de-la-gota-de-agua-azul-brillante.jpg?ver=6",
  },
] */

//const bannerImage = "https://brandme.la/wp-content/uploads/2018/01/Idealightbulbs.jpg"
const Servicios = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICE_PROVIDERS_INIT({ numberOfCharacters: 5 }))
  }, [dispatch])
  const serviceProviders = useSelector((state: RootState) => state.serviceProviders.providers)
  return (
    <>
      {/* <ServiceContainer bannerImage={bannerImage} data={imagesForGrid} /> */}
      {serviceProviders && <ProviderContainer prestadores={serviceProviders} />}
    </>
  )
}
export default Servicios
