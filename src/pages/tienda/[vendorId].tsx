import React, { useEffect, useMemo } from "react"
import TiendaBanner from "./TiendaBanner"
import TiendaNavbar from "./TiendaNavbar"
import { useDispatch, useSelector } from "react-redux"
import { STORE_INIT } from "../../state/actions/store"
import { RootState } from "../../state/reducers"
import ProductsContainer from "../../components/ProductsShop/ProductsContainer"
import FilterContainer from "../../components/ProductsShop/FilterContainer"
import { useRouter } from "next/router"
import WspContactButton from "../../components/ProductsShop/WspContactButton"
import { VENDOR_PRODUCTS_INIT } from "../../state/actions/vendorProducts"
import { FEATURED_PRODUCTS_INIT } from "../../state/actions/featuredProducts"
import { FEATURED_ID } from "../../constants"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
const Tienda = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const userData = useSelector((state: RootState) => state.store)
  const vendorProducts = useSelector((state: RootState) => state.vendorProducts)
  const featuredProducts = useSelector((state: RootState) => state.featuredProducts)

  const min = useMemo(() => {
    if (router.query?.min) {
      return parseFloat(router.query.min.toString())
    } else return 0
  }, [router.query])
  const max = useMemo(() => {
    if (router.query?.max) {
      return parseFloat(router.query.max.toString())
    } else return 9000
  }, [router.query])
  useEffect(() => {
    dispatch(
      VENDOR_PRODUCTS_INIT({
        id: router.query.vendorId,
        channel: "default-channel",
        minimum: min,
        maximum: max,
      })
    )
    dispatch(STORE_INIT({ id: router.query.vendorId }))
    dispatch(FEATURED_PRODUCTS_INIT({ id: FEATURED_ID, channel: "default-channel" }))
  }, [dispatch, min, max])
  if (vendorProducts.loading) {
    return <p>Cargando...</p>
  }
  if (vendorProducts.error) {
    return <p>Error...</p>
  }
  if (
    vendorProducts.products !== null &&
    !vendorProducts.loading &&
    !vendorProducts.error &&
    userData.vendorStore
  ) {
    const images = featuredProducts.products?.edges.map((item) => {
      return {
        url: item.node.images[0].url,
        alt: item.node.images[0].alt,
        price: item.node.defaultVariant.pricing.price.net.amount,
        id: item.node.id,
        title: item.node.name,
      }
    })
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 700 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
      },
    }
    return (
      <>
        {userData.vendorStore?.avatarImage && userData.vendorStore.mainImage && (
          <TiendaBanner userData={userData.vendorStore} />
        )}
        <TiendaNavbar userData={userData.vendorStore} />
        <div className="shop">
          {images && (
            <Carousel responsive={responsive} showDots={false} ssr={true} className="listStyleNone">
              {images.map((item) => {
                return (
                  <div
                    className="is-flex is-flex-direction-column is-align-items-center low-shadow has-background-white is-clickable p-3 m-2 has-text-centered user-select-none w-220px border-radius-15px"
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
          <div className="store">
            <FilterContainer />
            <ProductsContainer
              data={vendorProducts.products.edges}
              vendor={userData.vendorStore?.name}
            />
            <WspContactButton phone={userData.vendorStore.phone} />
          </div>
        </div>
      </>
    )
  } else return null
}
export default Tienda
