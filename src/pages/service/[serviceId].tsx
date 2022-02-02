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
import { Score } from "../../components/Score"

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
          <div className="is-flex is-align-items-center mb-3 ml-6 pl-6 vendor-banner">
            <Avatar image_url={avatar_image}></Avatar>
            <h2 className="my_1px_black_stroke ml-3 has-text-white is-capitalized">
              {vendor.data.name}
            </h2>
          </div>
        </section>
        <section className="mb-3  grid-2col">
          <div className="mx-auto">
            <h2 className="column_title title has-text-grey-light has-text-weight-light mb-0 has-text-centered ">
              CONTACTO
            </h2>
            <ContactTable
              phone={vendor.data.phone}
              location={vendor.data.location}
              email={vendor.data.email}
            ></ContactTable>
          </div>
          <div className="mx-auto">
            <h2 className="column_title title has-text-grey-light has-text-weight-light mb-0 has-text-centered">
              SERVICIOS
            </h2>
            <ServicesTable services_data={services_data}></ServicesTable>
          </div>
          <section className="mx-auto">
            <Link
              scroll={false}
              href={{
                pathname: "/service/[serviceId]",
                query: {
                  serviceId: router.query.serviceId,
                  contratar: contratarPrimero,
                  vendor: vendor.data.name,
                },
              }}
            >
              <a className="button is-rounded is-primary ">contratar</a>
            </Link>
          </section>
        </section>

        <section className="ml-5">
          <h2 className="has-text-grey-light has-text-weight-light mb-3">
            EXPERIENCIAS CONSTRUIRTE
          </h2>
          <div className="is-flex m-2">
            <div className="is-flex w-50per has-text-black">
              <img
                src="https://la.duravit.com/dimg/6269435_web2_prod_normal_2.jpg"
                alt=""
                width={150}
                style={{ minWidth: "100px", objectFit: "cover" }}
              />
              <article style={{ width: "80%" }} className="ml-2 ">
                <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
                  <p className="is-size-5 mb-1 is-uppercase">Plomeria</p>
                  <p className="is-size-5 mb-1 is-uppercase">2019</p>
                  <p className="is-size-5 mb-1 ">Rosario</p>
                </div>
                <p className="is-size-6">Colocacion de lavamanos</p>
              </article>
            </div>
            <div className="ml-5">
              Calificacion <Score score={3} />
            </div>
          </div>
        </section>
        <Experiences data={vendor.data.pastExperiences} title={"TRABAJOS PREVIOS"} />
        <Modal
          isOpen={router.query.contratar === contratarPrimero}
          onRequestClose={() => router.push(`/service/${router.query.serviceId}`)}
          style={{
            content: {
              width: "80%",
              position: "relative",
              height: "90vh",
              padding: "15px 0px",
              overflow: "scroll",
              left: "10%",
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
