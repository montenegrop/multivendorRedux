import React from "react"
import CategoryGrid from "../components/CategoryGrid/CategoryGrid"
import { HomeCard } from "../components/Modal/NavBarShopModal/component/HomeCard"
import UserTypes from "../components/UserTypes/UserTypes"

const Home = () => {
  return (
    <>
      <div className="grid-2col mt-5">
        <a href="tiendas" className="color-inherit ">
          <HomeCard
            data={{
              title: "Tiendas",
              text: "PRODUCTOS Y SERVICIOS QUE NECESITaS PARA TU PRóXIMO PROYECTO.",
              subText: "Buscá productos en la mayor red de construccion.",
              button: "on",
            }}
          />
        </a>
        <HomeCard
          data={{
            title: "Licitaciones",
            text: "PARTICIPÁ EN LICITACIONES MINORISTAS COMPRANDO O VENDIENDO.",
            subText: "Compará precios, ubicaciones y las mejores condiciones.",
            button: "off",
          }}
        />
      </div>
      <CategoryGrid />
      <UserTypes />
    </>
  )
}
export default Home
