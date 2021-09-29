import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TIENDAS_INIT } from "../../state/actions/tiendas"
import { RootState } from "../../state/reducers"
import StoreCard from "../../components/Store/StoreCard"
import Banner from "../../components/Banner"

const TiendasPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(TIENDAS_INIT({ tiendasAmount: 4 }))
  }, [dispatch])
  const stores = useSelector((state: RootState) => state.tiendas.stores)
  const banner_image = "https://www.24store.com.ar/static/media/logo-24-store.ba4bf5c5.png"
  const banner_title = "Tiendas"
  return (
    <div className="grey-background">
      <Banner banner_image={banner_image} banner_title={banner_title} />
      <div className="store-links-grid">
        <a className="button  polygon-button secondary-color store-link">CREA TU TIENDA</a>
        <a className="button  polygon-button secondary-color store-link">
          VER TODAS LAS SUCURSALES
        </a>
        <a className="button  polygon-button secondary-color store-link">BUSCAR POR RUBRO</a>
      </div>
      <div className="grid_container columns is-centered is-multiline grid_grid store-grid">
        {stores &&
          stores.map((store) => {
            return <StoreCard store={store} key={store.id} />
          })}
      </div>
    </div>
  )
}

export default TiendasPage
