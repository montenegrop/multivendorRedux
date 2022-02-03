import React from "react"
import { useSelector } from "react-redux"
import CategoryGrid from "../components/CategoryGrid/CategoryGrid"
import { HomeCard } from "../components/Modal/NavBarShopModal/component/HomeCard"
import Partners from "../components/Partners/container"
import UserTypes from "../components/UserTypes/UserTypes"
import { RootState } from "../state/reducers"
import { Slide } from "react-awesome-reveal"
const Home = () => {
  const usuario = useSelector((state: RootState) => state.loggin.data?.user)
  const logginQuery = "?loggin=loggin"

  return (
    <>
      <div className="widescreenMaxWidth mx-auto">
        <div className="grid-2col mt-5">
          <a href={`${usuario ? "tiendas" : logginQuery}`} className="color-inherit ">
            <HomeCard
              data={{
                title: "Tiendas",
                image: "./images/homeCardBackground.png",
                text: "PRODUCTOS Y SERVICIOS QUE NECESITaS PARA TU PRóXIMO PROYECTO.",
                subText: "Buscá productos en la mayor red de construccion.",
                button: "on",
              }}
            />
          </a>
          <HomeCard
            data={{
              title: "Licitaciones",
              image: "./images/licitaciones.png",
              text: "PARTICIPÁ EN LICITACIONES MINORISTAS COMPRANDO O VENDIENDO.",
              subText: "Compará precios, ubicaciones y las mejores condiciones.",
              button: "off",
            }}
          />
        </div>
        <CategoryGrid />
        <Partners />
      </div>
      <Slide direction="up" damping={500} triggerOnce={true}>
        <UserTypes />
      </Slide>
    </>
  )
}
export default Home
