import React, { useEffect, useState } from "react"
import TiendaBanner from "./TiendaBanner"
import TiendaNavbar from "./TiendaNavbar"
import { useDispatch, useSelector } from "react-redux"
import { STORE_INIT } from "../../state/actions/store"
import { RootState } from "../../state/reducers"
import Filters from "../../components/ProductsShop/Filters"
import ProductsContainer from "../../components/ProductsShop/ProductsContainer"

const Tienda = () => {
  const [filter, setFilter] = useState("low")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(STORE_INIT({ id: "VmVuZG9yOjE=" }))
  }, [dispatch])
  const data = [
    { id: 1, name: "Arena", price: 500 },
    { id: 2, name: "Porlan", price: 800 },
    { id: 3, name: "Cal", price: 100 },
    { id: 4, name: "Arena", price: 600 },
    { id: 5, name: "Arena", price: 100 },
    { id: 6, name: "Arena", price: 20000 },
    { id: 7, name: "Arena", price: 1000 },
    { id: 8, name: "Arena", price: 300 },
  ]
  const filterData = data.sort((a, b) => {
    if (filter == "low") return a.price - b.price
    else return b.price - a.price
  })

  const userData = useSelector((state: RootState) => state.store)

  return (
    <>
      {userData.avatar && userData.banner && <TiendaBanner userData={userData} />}
      <TiendaNavbar />
      <div className="shop">
        <Filters setFilter={setFilter} />
        <ProductsContainer filterData={filterData} />
      </div>
    </>
  )
}

export default Tienda
