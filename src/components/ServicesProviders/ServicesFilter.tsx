const ServicesFilter = ({ handleToggleDropdown, turnFilter, zoneFilter, profFilter }) => {
  return (
    <div className="filter-provider-bar is-flex is-justify-content-space-around is-flex-wrap-wrap">
      <div
        className={`dropdown ${profFilter}`}
        id="profesion-dropdown"
        onMouseEnter={() => handleToggleDropdown("profesion")}
        onMouseLeave={() => handleToggleDropdown("profesion")}
      >
        <div className="dropdown-trigger my-auto">
          <button
            className="button is-small filter-button is-flex is-justify-content-space-between"
            id="profession-button"
          >
            Profesion
            <p>&#10145;</p>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="ironmonger-chkbx" /> Ferretero
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="electrician-chkbx" /> Electricista
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="plumber-chkbx" /> Plomero
            </label>
          </div>
        </div>
      </div>
      <div
        className={`dropdown ${zoneFilter}`}
        id="zone-dropdown"
        onMouseEnter={() => handleToggleDropdown("zone")}
        onMouseLeave={() => handleToggleDropdown("zone")}
      >
        <div className="dropdown-trigger my-auto">
          <button className="button is-small filter-button is-flex is-justify-content-space-between">
            Zona
            <p>&#10145;</p>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="center-chkbx" /> Centro
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="south-chkbx" /> Sur
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="east-chkbx" /> Este
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="west-chkbx" /> Oeste
            </label>
          </div>
        </div>
      </div>
      <div
        className={`dropdown ${turnFilter}`}
        id="turn-dropdown"
        onMouseEnter={() => handleToggleDropdown("turn")}
        onMouseLeave={() => handleToggleDropdown("turn")}
      >
        <div className="dropdown-trigger my-auto">
          <button className="button is-small filter-button is-flex is-justify-content-space-between">
            Horario
            <p>&#10145;</p>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="morning -chkbx" /> Mañana
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="afternoon -chkbx" /> Tarde
            </label>
            <label className="dropdown-item is-clickable">
              <input type="checkbox" name="evening-chkbx" /> Noche
            </label>
          </div>
        </div>
      </div>
      <button className="button find-button">Buscar</button>
    </div>
  )
}
export default ServicesFilter
