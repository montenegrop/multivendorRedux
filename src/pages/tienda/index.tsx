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
    { id: 1, name: "Arena", price: 5000, weight: 600 },
    { id: 2, name: "Porlan", price: 8000, weight: 600 },
    { id: 3, name: "Cal", price: 1000, weight: 600 },
    { id: 4, name: "Arena", price: 6000, weight: 600 },
    { id: 5, name: "Arena", price: 1000, weight: 600 },
    { id: 6, name: "Arena", price: 200000, weight: 600 },
    { id: 7, name: "Arena", price: 10000, weight: 600 },
    { id: 8, name: "Arena", price: 3000, weight: 600 },
    { id: 9, name: "Arena", price: 90000, weight: 600 },
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
