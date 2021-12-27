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
import Experiences from "../../components/Experiences/container"

export default function Service() {
  Modal.setAppElement("#__next")
  const router = useRouter()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICE_PROVIDER_INIT({ id: router.query.serviceId }))
  }, [])
  const services_data = useSelector((state: RootState) => state.serviceProviderServices.services)
  const banner_image = useSelector((state: RootState) => state.serviceProviderImages.banner.url)
  const avatar_image = useSelector((state: RootState) => state.serviceProviderImages.avatar.url)
  const vendor = useSelector((state: RootState) => state.serviceProvider)
  const initialValuesContratar = useSelector((state: RootState) => state.contratar)
  if (vendor.loading) {
    return <p>Cargando...</p>
  }
  if (vendor.error) {
    return <p>Error..</p>
  }
  if (!vendor.loading && !vendor.error && vendor.data) {
    return (
      <>
        <section
          className="mb-3 my_banner-service_provider is-flex is-align-items-flex-end"
          style={{ backgroundImage: `url(${banner_image})` }}
        >
          <div className="is-flex is-align-items-center mb-3 ml-3">
            <Avatar image_url={avatar_image}></Avatar>
            <h2 className="my_1px_black_stroke title is-3 has-text-warning ml-3">
              {vendor.data.name}
            </h2>
          </div>
        </section>
        <section className="mb-3 columns">
          <div className="column">
            <h2 className="column_title title has-text-grey-light has-text-weight-light has-background-light mb-0 has-text-centered">
              CONTACTO
            </h2>
            <ContactTable
              phone={vendor.data.phone}
              location={vendor.data.location}
              email={vendor.data.email}
              cellularPhone={"3416"}
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
        </section>
        <Experiences data={vendor.data.pastExperiences} title={"TRABAJOS PREVIOS"} />
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
}
