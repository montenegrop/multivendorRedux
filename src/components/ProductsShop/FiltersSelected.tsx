const FilterCard = ({ filter }) => {
  return (
    <div className="filter-card">
      <p className="is-capitalized">{filter}</p>
      <button className="button is-small">x</button>
    </div>
  )
}
export default FilterCard
