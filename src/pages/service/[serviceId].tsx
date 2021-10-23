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
import Basic from "./RequestServiceForm"

export default function Service() {
  Modal.setAppElement("#__next")
  const router = useRouter()
  console.log(router, 999)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SERVICE_PROVIDER_INIT({ id: router.query.serviceId }))
  }, [])

  const services_data = useSelector((state: RootState) => state.serviceProviderServices.services)
  const banner_image = useSelector((state: RootState) => state.serviceProviderImages.banner.url)
  const avatar_image = useSelector((state: RootState) => state.serviceProviderImages.avatar.url)
  const name = useSelector((state: RootState) => state.serviceProvider.name)
  const phone = useSelector((state: RootState) => state.serviceProvider.phone)
  const cellularPhone = useSelector((state: RootState) => state.serviceProvider.cellularPhone)
  const email = useSelector((state: RootState) => state.serviceProvider.email)
  const location = useSelector((state: RootState) => state.serviceProvider.location)
  // const contact_data = {
  //   phone: phone,
  //   cellularPhone: cellularPhone,
  //   email: email,
  //   location: location,
  // }
  ;("https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg")
  const hireStep = 1
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
          <Link href={`/service/${router.query.serviceId}?step=${hireStep}`}>
            <a className="button is-rounded is-primary">contratar</a>
          </Link>
        </div>
        <div className="column"></div>
      </section>

      <Modal
        isOpen={!!router.query.step}
        onRequestClose={() => router.push(`/service/${router.query.serviceId}`)}
      >
        <Basic services={services_data}></Basic>
      </Modal>
    </>
  )
}
