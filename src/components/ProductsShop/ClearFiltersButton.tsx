const ClearFiltersButton = ({ filtCheck, clearFilters }) => {
  if (filtCheck.length !== 0) {
    return (
      <button className="button is-small ml-5 mb-" onClick={clearFilters}>
        Borrar Filtros
      </button>
    )
  } else {
    return null
  }
}
export default ClearFiltersButton
