const ServicesFilter = ({ handleDropdownOpen }) => {
  return (
    <div className="filter-provider-bar is-flex is-justify-content-space-around">
      <div className="dropdown " id="profesion-dropdown">
        <div className="drop-down-trigger">
          <button
            className="button is-small filter-button"
            id="profession-button"
            onClick={() => handleDropdownOpen("profesion-dropdown")}
          >
            Profesion
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
      <div className="dropdown " id="zone-dropdown">
        <div className="drop-down-trigger">
          <button
            className="button is-small filter-button"
            onClick={() => handleDropdownOpen("zone-dropdown")}
          >
            Zona
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
      <div className="dropdown" id="turn-dropdown">
        <div className="drop-down-trigger">
          <button
            className="button is-small filter-button"
            onClick={() => handleDropdownOpen("turn-dropdown")}
          >
            Horario
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
