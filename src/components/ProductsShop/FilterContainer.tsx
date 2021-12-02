import { useState } from "react"
import Filters from "../../components/ProductsShop/Filters"
import ClearFiltersButton from "./ClearFiltersButton"
import FilterCard from "./FiltersSelected"
const FilterContainer = ({ filter = {} }) => {

  const [filtCheck, setFiltCheck] = useState([])
  const refreshFiltersSelected = (add: string, remove: string): void => {
    if (!filtCheck.includes(add)) {
      const newFilterCheck = [...filtCheck, add]

      if (filtCheck.includes(remove)) {
        newFilterCheck.splice(newFilterCheck.indexOf(remove), 1)
      }
      setFiltCheck(newFilterCheck)
    }
  }
  const clearFilters = () => {
    setFiltCheck([])
  }

  return (
    <div className="filter-colum">
      <div className="filter-card-container">
        {filtCheck.map((item, index) => {
          return <FilterCard filter={item} key={index} />
        })}
      </div>
      <ClearFiltersButton filtCheck={filtCheck} clearFilters={clearFilters} />
      <Filters filters={filter} refreshFiltersSelected={refreshFiltersSelected} />
    </div>
  )
}
export default FilterContainer
