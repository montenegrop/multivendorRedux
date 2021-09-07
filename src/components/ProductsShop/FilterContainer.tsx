import { useState } from "react"
import Filters from "../../components/ProductsShop/Filters"
import FilterCard from "./FiltersSelected"
const FilterContainer = () => {
  const [filtCheck, setFiltCheck] = useState([])
  const hanldeClicPrice = () => {
    document.querySelector(".price_list").classList.toggle("is-hidden")
    document.querySelector("#icon-price").classList.toggle("rotate")
  }
  const hanldeClicName = () => {
    document.querySelector(".name_list").classList.toggle("is-hidden")
    document.querySelector("#icon-name").classList.toggle("rotate")
  }
  const hanldeClicWeight = () => {
    document.querySelector(".weight_list").classList.toggle("is-hidden")
    document.querySelector("#icon-weight").classList.toggle("rotate")
  }
  const refreshFiltersSelected = (add: string, remove: string): void => {
    if (!filtCheck.includes(add)) {
      const newFilterCheck = [...filtCheck, add]
      if (filtCheck.includes(remove)) {
        newFilterCheck.splice(newFilterCheck.indexOf(remove), 1)
      }
      setFiltCheck(newFilterCheck)
    }
  }

  return (
    <div>
      {filtCheck.map((item, index) => {
        return <FilterCard filter={item} key={index} />
      })}

      <Filters
        hanldeClicPrice={hanldeClicPrice}
        hanldeClicName={hanldeClicName}
        hanldeClicWeight={hanldeClicWeight}
        refreshFiltersSelected={refreshFiltersSelected}
      />
    </div>
  )
}
export default FilterContainer
/*  */
