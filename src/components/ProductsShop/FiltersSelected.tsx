const FilterCard = ({ filter }) => {
  return (
    <div className="filter-card">
      <p>{filter}</p>
      <button className="button is-small">X</button>
    </div>
  )
}
export default FilterCard
