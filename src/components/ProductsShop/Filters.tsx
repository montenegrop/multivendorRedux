const Filters = ({ hanldeClicPrice, hanldeClicName, hanldeClicWeight }) => {
  return (
    <div className="filter">
      <ul>
        <li>
          <a href="#" onClick={hanldeClicPrice}>
            Precio
          </a>
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
          <a href="#" onClick={hanldeClicName}>
            Nombre
          </a>
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
          <a href="#" onClick={hanldeClicWeight}>
            Peso
          </a>
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
