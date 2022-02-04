import React, { useEffect } from "react"
import TiendaBanner from "./TiendaBanner"
import TiendaNavbar from "./TiendaNavbar"
import { useDispatch, useSelector } from "react-redux"
import { STORE_INIT } from "../../state/actions/store"
import { RootState } from "../../state/reducers"
import ProductsContainer from "../../components/ProductsShop/ProductsContainer"
import CarouselContainer from "../../components/Caroucel/CarouselContainer"
import FilterContainer from "../../components/ProductsShop/FilterContainer"
import { useRouter } from "next/router"
import WspContactButton from "../../components/ProductsShop/WspContactButton"
import { VENDOR_PRODUCTS_INIT } from "../../state/actions/vendorProducts"
import { FEATURED_PRODUCTS_INIT } from "../../state/actions/featuredProducts"
import { FEATURED_ID } from "../../constants"

const Tienda = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const userData = useSelector((state: RootState) => state.store)
  const vendorProducts = useSelector((state: RootState) => state.vendorProducts)
  const featuredProducts = useSelector((state: RootState) => state.featuredProducts)

  useEffect(() => {
    dispatch(
      VENDOR_PRODUCTS_INIT({
        id: router.query.vendorId,
        channel: "default-channel",
        minimun: 0,
        maximum: 899,
      })
    )
    dispatch(STORE_INIT({ id: router.query.vendorId }))
    dispatch(FEATURED_PRODUCTS_INIT({ id: FEATURED_ID, channel: "default-channel" }))
  }, [dispatch])

  if (vendorProducts.loading) {
    return <p>Cargando...</p>
  }
  if (vendorProducts.error) {
    return <p>Error...</p>
  }
  console.log(vendorProducts.products)

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
      }
    })

    return (
      <>
        {userData.vendorStore?.avatarImage && userData.vendorStore.mainImage && (
          <TiendaBanner userData={userData.vendorStore} />
        )}
        <TiendaNavbar userData={userData.vendorStore} />
        <div className="shop">
          <div className="carousel-shop">{images && <CarouselContainer data={images} />}</div>
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
