import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Avatar } from "../../components/Avatar"
import { ContactTable } from "../../components/ContactTable"
import { ServicesTable } from "../../components/ServicesTable"
import { SERVICE_PROVIDER_INIT } from "../../state/actions/serviceProvider"
import { RootState } from "../../state/reducers"
import { useRouter } from "next/router"
import Link from "next/link"
import Modal from "react-modal"
import ContratarForm from "./RequestServiceForm"
import { contratarPrimero, contratarSegundo } from "../../constants"

export default function Service() {
  Modal.setAppElement("#__next")
  const router = useRouter()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICE_PROVIDER_INIT({ id: router.query.serviceId }))
  }, [])
  const data = useSelector((state: RootState) => state.serviceProvider)

  console.log(data)

  const services_data = useSelector((state: RootState) => state.serviceProviderServices.services)
  const banner_image = useSelector((state: RootState) => state.serviceProviderImages.banner.url)
  const avatar_image = useSelector((state: RootState) => state.serviceProviderImages.avatar.url)
  const name = useSelector((state: RootState) => state.serviceProvider.name)
  const phone = useSelector((state: RootState) => state.serviceProvider.phone)
  const cellularPhone = useSelector((state: RootState) => state.serviceProvider.cellularPhone)
  const email = useSelector((state: RootState) => state.serviceProvider.email)
  const location = useSelector((state: RootState) => state.serviceProvider.location)
  const initialValuesContratar = useSelector((state: RootState) => state.contratar)
  // const contact_data = {
  //   phone: phone,
  //   cellularPhone: cellularPhone,
  //   email: email,
  //   location: location,
  // }
  ;("https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg")

  return (
    <>
      <section
        className="mb-3 my_banner-service_provider is-flex is-align-items-flex-end"
        style={{ backgroundImage: `url(${banner_image})` }}
      >
        <div className="is-flex is-align-items-center mb-3 ml-3">
          <Avatar image_url={avatar_image}></Avatar>
          <h2 className="my_1px_black_stroke title is-3 has-text-warning ml-3">{name}</h2>
        </div>
      </section>
      <section className="mb-3 columns">
        <div className="column">
          <h2 className="column_title title has-text-grey-light has-text-weight-light has-background-light mb-0 has-text-centered">
            CONTACTO
          </h2>
          <ContactTable
            phone={phone}
            location={location}
            email={email}
            cellularPhone={cellularPhone}
          ></ContactTable>
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
          <Link
            scroll={false}
            href={{
              pathname: "/service/[serviceId]",
              query: { serviceId: router.query.serviceId, contratar: contratarPrimero },
            }}
          >
            <a className="button is-rounded is-primary">contratar</a>
          </Link>
        </div>
        <div className="column"></div>
      </section>
      <Modal
        isOpen={router.query.contratar === contratarPrimero}
        onRequestClose={() => router.push(`/service/${router.query.serviceId}`)}
        style={{
          content: {
            width: "80%",
            height: "100vh",
            position: "relative",
            left: "10%",
            padding: "15px 0px",
            overflow: "scroll",
            paddingBottom: "100px",
          },
          overlay: { zIndex: 1000 },
        }}
      >
        <ContratarForm
          services={services_data}
          initialValues={initialValuesContratar}
        ></ContratarForm>
      </Modal>
      <Modal
        isOpen={router.query.contratar === contratarSegundo}
        onRequestClose={() => router.push(`/service/${router.query.serviceId}`)}
        style={{
          content: {
            width: "80%",
            position: "relative",
            top: "40vh",
            left: "10%",
            padding: "15px 0px",
          },
          overlay: { zIndex: 1500 },
        }}
      >
        <div className="has-text-centered">
          <h1 className="is-size-4">
            ¿Desea confirmar el envío de solicitud de servicio de ELECTRICIDAD #12412412 a OSVALDO
            PEREZ?
          </h1>
          <img src="/images/checkImage.png" alt="" width={50} className="mr-6 is-clickable" />
          <img src="/images/cancelImage.png" alt="" width={50} className="is-clickable" />
        </div>
      </Modal>
    </>
  )
}
