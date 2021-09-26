import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TIENDAS_INIT } from "../../state/actions/tiendas"
import { RootState } from "../../state/reducers"
import Link from "next/link"

const TiendasPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("tiuendas")
    dispatch(TIENDAS_INIT({ tiendasAmount: 4 }))
  }, [dispatch])

  const tiendas = useSelector((state: RootState) => state.tiendas.stores)
  return (
    <div className="grid_container">
      <div className="columns is-centered is-multiline grid_grid">
        {tiendas &&
          tiendas.map((tienda) => {
            return (
              <div className="column is-half grid_card" key={tienda.id}>
                <div className="grid_img_container">
                  <Link href={`/tienda/${tienda.id}`}>
                    <div
                      className="grid_img"
                      style={{ backgroundImage: `url(${tienda.avatarImage?.url})` }}
                    >
                      <div className="grid_item_name">
                        <p>{tienda.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TiendasPage
