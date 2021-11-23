const Filters = ({ refreshFiltersSelected }) => {
  return (
    <div className="filter">
      <ul className="filter-li">
        <li>
          <ul className="price_list">
            <strong>Segun Precio</strong>
            <li>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => refreshFiltersSelected("Menor Precio", "Mayor Precio")}
                onKeyDown={() => refreshFiltersSelected("Menor Precio", "Mayor Precio")}
              >
                <p id="low" className="is-clickable">
                  Menor Precio
                </p>
              </div>
            </li>
            <li>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => refreshFiltersSelected("Mayor Precio", "Menor Precio")}
                onMouseDown={() => refreshFiltersSelected("Mayor Precio", "Menor Precio")}
              >
                <p id="hight" className="is-clickable">
                  Mayor Precio
                </p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="name_list">
            <strong>Segun Orden</strong>
            <li>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => refreshFiltersSelected("Ordenado A-Z", "Ordenado Z-A")}
                onMouseDown={() => refreshFiltersSelected("Ordenado A-Z", "Ordenado Z-A")}
              >
                <p id="order" className="is-clickable">
                  A-Z
                </p>
              </div>
            </li>
            <li>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => refreshFiltersSelected("Ordenado Z-A", "Ordenado A-Z")}
                onMouseDown={() => refreshFiltersSelected("Ordenado Z-A", "Ordenado A-Z")}
              >
                <p id="reverse" className="is-clickable">
                  Z-A
                </p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="weight_list">
            <strong>Segun Peso</strong>
            <li>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => refreshFiltersSelected("Mas Liviano", "Mas Pesado")}
                onMouseDown={() => refreshFiltersSelected("Mas Liviano", "Mas Pesado")}
              >
                <p id="light" className="is-clickable">
                  Mas Liviano
                </p>
              </div>
            </li>
            <li>
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => refreshFiltersSelected("Mas Pesado", "Mas Liviano")}
                onMouseDown={() => refreshFiltersSelected("Mas Pesado", "Mas Liviano")}
              >
                <p id="heavy" className="is-clickable">
                  Mas Pesado
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
export default Filters
