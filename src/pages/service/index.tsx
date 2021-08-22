import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar } from "../../components/Avatar"
import { ContactTable } from "../../components/ContactTable"
import { ServiceButton } from "../../components/ServiceButton"
import { ServicesTable } from "../../components/ServicesTable"
import { HOMEPAGE_INIT } from "../../state/actions/homepage"
import { SERVICE_PROVIDER_INIT } from "../../state/actions/serviceProvider"

import { RootState } from "../../state/reducers"
import Layout from "../Layout"

import { useRouter } from "next/router"
import Link from "next/link"
import Modal from "react-modal"
import Navbar from "../../components/Navbar/Navbar"
import { CATEGORY_INIT } from "../../state/actions/category"

export default function Home() {
  Modal.setAppElement("#__next")
  const router = useRouter()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICE_PROVIDER_INIT({ id: "VmVuZG9yOjE=" }))
  }, [])
  useEffect(() => {
    dispatch(CATEGORY_INIT({ id: "Q2F0ZWdvcnk6MzA=", channel: "default-channel" }))
  }, [])
  const onClick = () => {
    dispatch(HOMEPAGE_INIT())
  }
  const name = useSelector<RootState>((state) => state.serviceProvider.name)
  const loading = useSelector<RootState>((state) => state.serviceProvider.loading)
  const services_data = useSelector<RootState>((state) => state.serviceProviderServices.services)
  const banner_image = "https://http2.mlstatic.com/D_NQ_905027-MLA46750656973_072021-OO.webp"
  const avatar_image =
    "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
  const hireStep = 1
  return (
    <>
      <Navbar />
      <Layout>
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
            <ContactTable _contact_data={{}}></ContactTable>
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
            <Link href={`/?step=${hireStep}`}>
              <a className="button is-rounded is-primary">contratar</a>
            </Link>
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

        <Modal isOpen={!!router.query.step} onRequestClose={() => router.push("/")}>
          Dentro del Modal
        </Modal>

        {/* bulma modal: */}
        {/* <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-content has-background-white px-5 py-5">
            <h3 className="title mb-6">modal</h3>
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div> */}
      </Layout>
    </>
  )
}
