import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TIENDAS_INIT } from "../../state/actions/tiendas"
import { RootState } from "../../state/reducers"
import StoreCard from "../../components/Store/StoreCard"
import { Banner } from "../../components/Banner"
import { CardSkeleton } from "../../components/Skeleton/CardSkeleton"
import { useRouter } from "next/router"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { FEATURED_PRODUCTS_INIT } from "../../state/actions/featuredProducts"
import { FEATURED_ID } from "../../constants"

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
  const featuredProducts = useSelector((state: RootState) => state.featuredProducts)
  const stores = useSelector((state: RootState) => state.tiendas)
  const banner_image = "https://www.24store.com.ar/static/media/logo-24-store.ba4bf5c5.png"
  const banner_title = "Tiendas Destacadas"
  useEffect(() => {
    dispatch(FEATURED_PRODUCTS_INIT({ id: FEATURED_ID, channel: "default-channel" }))
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1250 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1250, min: 950 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 950, min: 700 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  }
  const images = featuredProducts.products?.edges.map((item) => {
    return {
      url: item.node.images[0].url,
      alt: item.node.images[0].alt,
      price: item.node.defaultVariant.pricing.price.net.amount,
      id: item.node.id,
      title: item.node.name,
    }
  })
  return (
    <>
      {usuario && (
        <div>
          <Banner banner_image={banner_image} banner_title={banner_title} />
          {images && (
            <Carousel responsive={responsive} showDots={false} ssr={true} className="listStyleNone">
              {[...images, ...images, ...images].map((item) => {
                return (
                  <div
                    className="is-flex is-flex-direction-column is-align-items-center low-shadow has-background-white is-clickable p-3 m-2 has-text-centered user-select-none border-radius-15px store-carousel-card"
                    key={item.id}
                  >
                    <img src={item.url} alt={item.alt} style={{ height: "100px" }} />
                    {item?.price && <p className="is-size-4 mb-0 mt-5">${item.price}</p>}
                    {item?.title && <p className="is-size-5">{item.title}</p>}
                  </div>
                )
              })}
            </Carousel>
          )}
          <div className="store-links-grid mt-4">
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
