const ServicesFilter = ({ handleToggleDropdown, turnFilter, zoneFilter, profFilter }) => {
  return (
    <div className="filter-provider-bar is-flex is-justify-content-space-around">
      <div className={`dropdown ${profFilter}`} id="profesion-dropdown">
        <div className="dropdown-trigger">
          <button
            className="button is-small filter-button is-flex is-justify-content-space-between"
            id="profession-button"
            onClick={() => handleToggleDropdown("profesion")}
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
      <div className={`dropdown ${zoneFilter}`} id="zone-dropdown">
        <div className="dropdown-trigger">
          <button
            className="button is-small filter-button is-flex is-justify-content-space-between"
            onClick={() => handleToggleDropdown("zone")}
          >
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
      <div className={`dropdown ${turnFilter}`} id="turn-dropdown">
        <div className="dropdown-trigger">
          <button
            className="button is-small filter-button is-flex is-justify-content-space-between"
            onClick={() => handleToggleDropdown("turn")}
          >
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
