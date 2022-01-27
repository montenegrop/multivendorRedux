import { useRouter } from "next/router"

const FilterCard = ({ filter, removeFilter }) => {
  const router = useRouter()
  if (router.pathname == "/category/[categoryId]/[subCategoryId]") {
    return (
      <div className="filter-card m-0">
        <button className="button is-small" onClick={() => removeFilter(filter.slug)}>
          <p></p>
          {filter} &#10006;
        </button>
      </div>
    )
  } else {
    return (
      <div className="filter-card m-0 shadow">
        <button className="button is-small" onClick={() => removeFilter(filter)}>
          <p className="is-size-6">{filter} &#10006;</p>
        </button>
      </div>
    )
  }
}
export default FilterCard
