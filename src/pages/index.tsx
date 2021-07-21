import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar } from "../components/Avatar"
import { ContactTable } from "../components/ContactTable"
import { ServiceButton } from "../components/ServiceButton"
import { ServicesTable } from "../components/ServicesTable"
import { SERVICE_PROVIDER_INIT } from "../state/actions/serviceProvider"
import { RootState } from "../state/reducers"

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICE_PROVIDER_INIT({ id: "VmVuZG9yOjE=" }))
  }, [])
  const onClick = () => {
    dispatch(SERVICE_PROVIDER_INIT({ id: "VmVuZG9yOjE=" }))
  }
  const name = useSelector<RootState>((state) => state.serviceProvider.name)
  const loading = useSelector<RootState>((state) => state.serviceProvider.loading)
  const services_data = useSelector<RootState>((state) => state.serviceProviderServices.services)
  const banner_image = "https://http2.mlstatic.com/D_NQ_905027-MLA46750656973_072021-OO.webp"
  const avatar_image =
    "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
  console.log(services_data, 21)
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
            className="mb-3 my_banner-service_provider is-flex is-align-items-flex-end"
            style={{ backgroundImage: `url(${banner_image})` }}
          >
            <div className="is-flex is-align-items-center mb-3 ml-3">
              <Avatar image_url={avatar_image}></Avatar>
              <h2 className="my_1px_black_stroke title is-3 has-text-warning ml-3">
                Leopoldo Lugones
              </h2>
            </div>
          </section>
          <section className="mb-3 columns">
            <div className="column">
              <h2 className="column_title title has-text-grey-light has-text-weight-light has-background-light mb-0 has-text-centered">
                CONTACTO
              </h2>
              <ContactTable contact_data={{}}></ContactTable>
            </div>
            <div className="column">
              <h2 className="column_title title has-text-grey-light has-text-weight-light has-background-light mb-0 has-text-centered">
                SERVICIOS
              </h2>
              <ServicesTable services_data={services_data}></ServicesTable>
            </div>
          </section>
          <section className="mb-3 columns">
            <div className="column">
              <button className="button is-rounded is-primary">Contratar</button>
            </div>
            <div className="column"></div>
          </section>

          <section className="section ml-6">
            <ServiceButton onClick={onClick}>nombre</ServiceButton>
          </section>
          <button onClick={onClick}>nombre del vendor</button>
          <div className="warning">{name}</div>
          {loading && <div>loading</div>}
          <div className="App"></div>
        </div>
        <div className="column is-2"></div>
      </div>
    </div>
  )
}
