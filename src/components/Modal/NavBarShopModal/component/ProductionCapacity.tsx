export const ProductionCapacity = () => {
  return (
    <div>
      <h1 className="is-size-2 mb-6">Capacidad Productiva</h1>
      <div className="grid-2col mb-5">
        <div className="mx-auto">
          <label htmlFor="company-cuit" className="label has-text-left">
            Negocio
          </label>
          <input
            id="company-cuit"
            className="input string-input "
            disabled
            style={{ cursor: "default" }}
            value="-"
          />
        </div>

        <div className="mx-auto">
          <label htmlFor="company-cuit" className="label has-text-left">
            Negocio
          </label>
          <input
            id="company-cuit"
            className="input string-input "
            disabled
            style={{ cursor: "default" }}
            value="-"
          />
        </div>
        <div className="mx-auto">
          <label htmlFor="company-mail" className="label has-text-left">
            Año de Fundacion
          </label>
          <input
            id="company-mail"
            className="input string-input"
            disabled
            style={{ cursor: "default" }}
            value="-"
          />
        </div>
        <div className="mx-auto">
          <label htmlFor="company-password" className="label has-text-left">
            Horario de Atencion
          </label>
          <input
            id="company-password"
            className="input string-input"
            disabled
            style={{ cursor: "default" }}
            value="-"
          />
        </div>
        <div className="mx-auto">
          <label htmlFor="company-employee" className="label has-text-left">
            Empleados
          </label>
          <input
            id="company-employee"
            className="input string-input"
            disabled
            style={{ cursor: "default" }}
            value="-"
          />
        </div>
        <div className="mx-auto">
          <label htmlFor="company-billing" className="label has-text-left">
            Facturacion anual
          </label>
          <input
            id="company-billing"
            className="input string-input"
            disabled
            style={{ cursor: "default" }}
            value="-"
          />
        </div>
      </div>
    </div>
  )
}
