const Filters = ({ setFilter }) => {
  return (
    <div className="filter">
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="price_filter"
              id="low_price"
              defaultChecked
              onClick={() => {
                setFilter("low")
              }}
            />
            Menor Precio
          </label>
        </li>
        <br />
        <li>
          <label>
            <input
              type="radio"
              name="price_filter"
              id="high_price"
              onClick={() => {
                setFilter("high")
              }}
            />
            Mayor Precio
          </label>
        </li>
      </ul>
    </div>
  )
}
export default Filters
