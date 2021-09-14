import React, { useEffect } from "react"
import TiendaBanner from "./TiendaBanner"
import TiendaNavbar from "./TiendaNavbar"
import { useDispatch, useSelector } from "react-redux"
import { STORE_INIT } from "../../state/actions/store"
import { RootState } from "../../state/reducers"
import ProductsContainer from "../../components/ProductsShop/ProductsContainer"
import CarouselContainer from "../../components/Caroucel/CarouselContainer"
import FilterContainer from "../../components/ProductsShop/FilterContainer"

const Tienda = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(STORE_INIT({ id: "VmVuZG9yOjE=" }))
  }, [dispatch])
  const data = [
    {
      id: 1,
      name: "ArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArenaArena",
      price: 5000,
      weight: 600,
    },
    { id: 2, name: "Porlan", price: 8000, weight: 600 },
    { id: 3, name: "Cal", price: 1000, weight: 600 },
    { id: 4, name: "Arena", price: 6000, weight: 600 },
    { id: 5, name: "Arena", price: 1000, weight: 600 },
    { id: 6, name: "Arena", price: 200000, weight: 600 },
    { id: 7, name: "Arena", price: 10000, weight: 600 },
    { id: 8, name: "Arena", price: 3000, weight: 600 },
    { id: 9, name: "Arena", price: 90000, weight: 600 },
  ]
  const carouselImages: { image: string; page: number }[] = [
    { image: "http://lorempixel.com/400/200/sports/20/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/2/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/1/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/1/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/2/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/3/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/4/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/5/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/6/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/7/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/8/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/9/", page: 1 },
    { image: "http://lorempixel.com/400/200/sports/10/", page: 1 },
  ]
  const userData = useSelector((state: RootState) => state.store)

  return (
    <>
      {userData.avatar && userData.banner && <TiendaBanner userData={userData} />}
      <TiendaNavbar />
      <div className="shop">
        <div className="carousel-shop">
          <CarouselContainer carouselImages={carouselImages} />
        </div>
        <div className="store">
          <FilterContainer />
          <ProductsContainer data={data} />
        </div>
      </div>
    </>
  )
}

export default Tienda
