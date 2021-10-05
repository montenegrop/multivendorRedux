const Filters = ({ refreshFiltersSelected }) => {
  return (
    <div className="filter">
      <ul>
        <li>
          <div
            className="has-background-link-light is-clickable sub-filter"
            role="button"
            tabIndex={0}
          >
            <p className="has-text-black is-clickable ">Precio</p>
            <p className="icon" id="icon-price">
              &#5125;
            </p>
          </div>
          <ul className="price_list is-hidden">
            <li>
              <label>
                <input
                  type="radio"
                  name="price"
                  id="low"
                  onClick={() => refreshFiltersSelected("Menor Precio", "Mayor Precio")}
                />{" "}
                Menor Precio
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="price"
                  id="hight"
                  onClick={() => refreshFiltersSelected("Mayor Precio", "Menor Precio")}
                />{" "}
                Mayor Precio
              </label>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="has-background-link-light is-clickable sub-filter"
            role="button"
            tabIndex={0}
          >
            <p className="has-text-black is-clickable ">Nombre</p>
            <p className="icon" id="icon-name">
              &#5125;
            </p>
          </div>
          <ul className="name_list is-hidden">
            <li>
              <label>
                <input
                  type="radio"
                  name="name"
                  id="order"
                  onClick={() => refreshFiltersSelected("Ordenado A-Z", "Ordenado Z-A")}
                />{" "}
                A-Z
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="name"
                  id="reverse"
                  onClick={() => refreshFiltersSelected("Ordenado Z-A", "Ordenado A-Z")}
                />{" "}
                Z-A
              </label>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="has-background-link-light is-clickable sub-filter"
            role="button"
            tabIndex={0}
          >
            <p className="has-text-black is-clickable ">Peso</p>
            <p className="icon" id="icon-weight">
              &#5125;
            </p>
          </div>

          <ul className="weight_list is-hidden">
            <li>
              <label>
                <input
                  type="radio"
                  name="weight"
                  id="light"
                  onClick={() => refreshFiltersSelected("Mas Liviano", "Mas Pesado")}
                />
                Mas Liviano
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="weight"
                  id="heavy"
                  onClick={() => refreshFiltersSelected("Mas Pesado", "Mas Liviano")}
                />
                Mas Pesado
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
export default Filters
