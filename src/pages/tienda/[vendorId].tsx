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

const Tienda = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const userData = useSelector((state: RootState) => state.store)
  useEffect(() => {
    dispatch(VENDOR_PRODUCTS_INIT({ id: router.query.vendorId, channel: "pesos" }))
    dispatch(STORE_INIT({ id: router.query.vendorId }))
  }, [dispatch])

  const dataCarousel: { image: string }[] = [
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
    { image: "https://placekitten.com/640/360" },
  ]
  const vendorProducts = useSelector((state: RootState) => state.vendorProducts)
  if (vendorProducts.loading) {
    return <p>Cargando...</p>
  }
  if (vendorProducts.error) {
    return <p>Error...</p>
  }
  if (vendorProducts.products && !vendorProducts.loading && !vendorProducts.error) {
    return (
      <>
        {userData.vendorStore.avatarImage && userData.vendorStore.mainImage && (
          <TiendaBanner userData={userData.vendorStore} />
        )}
        <TiendaNavbar userData={userData.vendorStore} />
        <div className="shop">
          <div className="carousel-shop">
            <CarouselContainer data={dataCarousel} />
          </div>
          <div className="store">
            <FilterContainer />
            <ProductsContainer
              data={vendorProducts.products.edges}
              vendor={userData.vendorStore.name}
            />
            <WspContactButton />
          </div>
        </div>
      </>
    )
  } else return null
}
export default Tienda
