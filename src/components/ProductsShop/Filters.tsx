const Filters = ({ hanldeClicPrice, hanldeClicName, hanldeClicWeight }) => {
  return (
    <div className="filter">
      <ul>
        <li>
          <div
            className="has-background-link-light is-clickable sub-filter"
            onClick={hanldeClicPrice}
            onKeyDown={hanldeClicPrice}
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
                <input type="radio" name="price" id="low" /> Menor Precio
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="price" id="hight" /> Mayor Precio
              </label>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="has-background-link-light is-clickable sub-filter"
            onClick={hanldeClicName}
            onKeyDown={hanldeClicName}
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
                <input type="radio" name="name" id="order" /> A-Z
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="name" id="reverse" /> Z-A
              </label>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="has-background-link-light is-clickable sub-filter"
            onClick={hanldeClicWeight}
            onKeyDown={hanldeClicWeight}
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
                <input type="radio" name="weight" id="light" /> Mas Liviano
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="weight" id="heavy" /> Mas Pesado
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
export default Filters
