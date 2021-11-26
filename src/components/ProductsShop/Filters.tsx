const Filters = ({ filters, refreshFiltersSelected }) => {
  return (
    <div className="filter">
      <ul className="filter-li">
        {filters.map((item, index) => {
          return (
            <li key={index}>
              <ul className="price_list">
                <strong className="is-capitalized">{item.node.name}</strong>
                {item.node.values.map((item, index) => {
                  return (
                    <li key={index}>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-hidden="true"
                        onClick={() => refreshFiltersSelected(item.slug, "")}
                        onKeyDown={() => refreshFiltersSelected(item.slug, "")}
                      >
                        <p id="low" className="is-clickable is-capitalized">
                          {item.name}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Filters
