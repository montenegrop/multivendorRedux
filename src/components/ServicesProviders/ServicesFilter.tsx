const ServicesFilter = ({ handleDropdownOpen }) => {
  return (
    <div className="filter-provider-bar is-flex is-justify-content-space-around">
      <div className="dropdown " id="profesion-dropdown">
        <div className="drop-down-trigger">
          <button
            className="button is-small filter-button"
            id="profession-button"
            onClick={handleDropdownOpen}
          >
            Profesion
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-item">Ferretero</div>
            <div className="dropdown-item">Electricista</div>
            <div className="dropdown-item">Plomero</div>
            <div className="dropdown-item">Fontanero</div>
          </div>
        </div>
      </div>
      <div className="dropdown " id="profesion-dropdown">
        <div className="drop-down-trigger">
          <button className="button is-small filter-button">Zona</button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-item">Centro</div>
            <div className="dropdown-item">Zur</div>
            <div className="dropdown-item">Este</div>
            <div className="dropdown-item">Oeste</div>
          </div>
        </div>
      </div>
      <div className="dropdown " id="profesion-dropdown">
        <div className="drop-down-trigger">
          <button className="button is-small filter-button">Horario</button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-item">Mañana</div>
            <div className="dropdown-item">Tarde</div>
            <div className="dropdown-item">Noche</div>
            <div className="dropdown-item">Todos</div>
          </div>
        </div>
      </div>
      <button className="button find-button">Buscar</button>
    </div>
  )
}
export default ServicesFilter
