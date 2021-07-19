import { useDispatch, useSelector } from "react-redux"
import { SERVICE_PROVIDER_INIT } from "../state/actions/serviceProvider"
import { RootState } from "../state/reducers"

export default function Home() {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(SERVICE_PROVIDER_INIT({ id: "VmVuZG9yOjE=" }))
  }
  const name = useSelector<RootState>((state) => state.serviceProvider.name)
  const loading = useSelector<RootState>((state) => state.serviceProvider.loading)
  const banner_image = "https://http2.mlstatic.com/D_NQ_905027-MLA46750656973_072021-OO.webp"
  const avatar_image =
    "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
  return (
    <div>
      {/* <section>
        <figure className="image my_banner_height_200px">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </section> */}
      <div className="columns">
        <div className="column is-2"></div>
        <div className="column">
          <section
            className="my_banner-service_provider is-flex is-align-items-flex-end"
            style={{ backgroundImage: `url(${banner_image})` }}
          >
            <div className="is-flex is-align-items-center">
              <figure className="image is-96x96">
                <img className="is-rounded" src={avatar_image} />
              </figure>
              <h2 className="my_1px_black_stroke title is-3 has-text-warning">
                Título de la empresa
              </h2>
            </div>
          </section>
          <section className="columns">
            <div className="column">
              <h2 className="title has-text-grey-light has-background-light mb-0 has-text-centered">
                CONTACTO
              </h2>
              <table className="table is-fullwidth has-background-light my_table-light_titles my_table-no_borders my_table-right">
                <tbody>
                  <tr>
                    <th>Teléfono</th>
                    <td>+23211231321</td>
                  </tr>
                  <tr>
                    <th>Celular</th>
                    <td>3121111111</td>
                  </tr>
                  <tr>
                    <th>Dirección</th>
                    <td>San luis 4433</td>
                  </tr>
                  <tr>
                    <th>Ciudad</th>
                    <td>Capital Federal</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>cacho_castaña@hotmail.com</td>
                  </tr>
                  <tr>
                    <th>Redes</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <h2 className="title has-text-grey-light has-background-light mb-0 has-text-centered">
                Servicios
              </h2>
              <table className="table is-fullwidth has-background-light my_table-light_titles my_table-no_borders my_table-right">
                <tbody>
                  <tr>
                    <th>Teléfono</th>
                    <td>+23211231321</td>
                  </tr>
                  <tr>
                    <th>Celular</th>
                    <td>3121111111</td>
                  </tr>
                  <tr>
                    <th>Dirección</th>
                    <td>San luis 4433</td>
                  </tr>
                  <tr>
                    <th>Ciudad</th>
                    <td>Capital Federal</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>cacho_castaña@hotmail.com</td>
                  </tr>
                  <tr>
                    <th>Redes</th>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <button onClick={onClick}>nombre del vendor</button>
          <div className="warning">{name}</div>
          {loading && <div>loading</div>}
        </div>
        <div className="column is-2"></div>
      </div>
    </div>
  )
}
