import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TIENDAS_INIT } from "../../state/actions/tiendas"
import { RootState } from "../../state/reducers"
import StoreCard from "../../components/Store/StoreCard"
import { Banner } from "../../components/Banner"
import CarouselContainer from "../../components/Caroucel/CarouselContainer"
import { CardSkeleton } from "../../components/Skeleton/CardSkeleton"
import { useRouter } from "next/router"

const TiendasPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(TIENDAS_INIT({ tiendasAmount: 4 }))
  }, [dispatch])
  const usuario = useSelector((state: RootState) => state.loggin.data?.user)
  const router = useRouter()
  if (!usuario) {
    router.push("/?loggin=loggin")
  }
  const stores = useSelector((state: RootState) => state.tiendas)
  const banner_image = "https://www.24store.com.ar/static/media/logo-24-store.ba4bf5c5.png"
  const banner_title = "Tiendas Destacadas"
  const carouselImages: { image: string }[] = [
    { image: "http://lorempixel.com/400/200/sports/20/" },
    { image: "http://lorempixel.com/400/200/sports/2/" },
    { image: "http://lorempixel.com/400/200/sports/1/" },
    { image: "http://lorempixel.com/400/200/sports/1/" },
    { image: "http://lorempixel.com/400/200/sports/2/" },
  ]
  return (
    <>
      {usuario && (
        <div>
          <Banner banner_image={banner_image} banner_title={banner_title} />
          <CarouselContainer data={carouselImages} />
          <div className="store-links-grid">
            <a className="button  polygon-button secondary-color store-link">CREA TU TIENDA</a>
            <a className="button  polygon-button secondary-color store-link">
              VER TODAS LAS SUCURSALES
            </a>
            <a className="button  polygon-button secondary-color store-link">BUSCAR POR RUBRO</a>
          </div>
          <div className="grid_container columns is-centered is-multiline grid_grid store-grid">
            {stores.loading && (
              <>
                <CardSkeleton size={400} />
                <CardSkeleton size={400} />
                <CardSkeleton size={400} />
                <CardSkeleton size={400} />
              </>
            )}
            {!stores.error &&
              !stores.loading &&
              stores.stores.length !== 0 &&
              stores.stores.map((store) => {
                return <StoreCard store={store} key={store.id} />
              })}
          </div>
        </div>
      )}
    </>
  )
}

export default TiendasPage
