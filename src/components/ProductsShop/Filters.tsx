import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Filters = ({ filters, refreshFiltersSelected }) => {
  const router = useRouter()
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  useEffect(() => {
    if (router.query?.max) {
      setMax(router.query.max.toString())
    }
    if (router.query?.min) {
      setMin(router.query.min.toString())
    } else return
  }, [])
  if (router.pathname == "/category/[categoryId]/[subCategoryId]") {
    return (
      <div className="filter ml-5">
        <div className="navbar-end is-expanded tienda_navbar_input_container ">
          <div className="navbar-item tienda_navbar_input">
            <input
              className="input is-rounded is-normal shadow"
              type="text"
              placeholder="Buscar en esta tienda..."
            />
          </div>
        </div>
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
  } else {
    const handleEnterKey = (e) => {
      if (e.key == "Enter") {
        if (max < min && max !== "") {
          alert("Introduzca un precio maximo mayor o igual al menor")
          return
        }
        max !== ""
          ? router.push({
              query: { min, max, vendorId: router.query.vendorId },
              href: router.asPath,
            })
          : router.push({ query: { min, vendorId: router.query.vendorId }, href: router.asPath })
      }
    }
    return (
      <div className="filter ml-5">
        <div className="navbar-end is-expanded tienda_navbar_input_container">
          <div className="navbar-item tienda_navbar_input p-0">
            <input
              className="input is-rounded is-normal"
              type="text"
              placeholder="Buscar en esta tienda..."
            />
          </div>
        </div>
        <ul className="filter-li">
          <li>
            <ul className="price_list">
              <strong>Segun Precio</strong>
              <li>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Minimo"
                    defaultValue={router.query?.min && router.query.min}
                    onChange={(e) => setMin(e.target.value)}
                    onKeyDown={handleEnterKey}
                  />
                </div>
              </li>
              <li>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Maximo"
                    defaultValue={router.query?.max && router.query.max}
                    onChange={(e) => setMax(e.target.value)}
                    onKeyDown={handleEnterKey}
                  />
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
}
export default Filters
