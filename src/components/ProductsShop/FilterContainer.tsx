import { useState } from "react"
import Filters from "../../components/ProductsShop/Filters"
/* import ClearFiltersButton from "./ClearFiltersButton" */
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

  const removeFilter = (filter: string): void => {
    const filters = filtCheck
    const index = filters.indexOf(filter)
    filters.splice(index, 1)
    setFiltCheck([...filters])
  }

  return (
    <div className="filter-colum ">
      <div className="filter-card-container ml-5 mt-3">
        {filtCheck.map((item, index) => {
          return <FilterCard filter={item} key={index} removeFilter={removeFilter} />
        })}
      </div>
      <Filters filters={filter} refreshFiltersSelected={refreshFiltersSelected} />
    </div>
  )
}
export default FilterContainer
