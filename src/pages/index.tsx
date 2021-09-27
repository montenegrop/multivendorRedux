import React from "react"
import CategoryGrid from "../components/CategoryGrid/CategoryGrid"
import UserTypes from "../components/UserTypes/UserTypes"

const Home = () => {
  return (
    <>
      <div className="buttons is-justify-content-space-around m-2">
        <a className="button is-link">Licitaciones</a>
        <a href="tiendas" className="button is-primary">
          Tiendas
        </a>
      </div>
      <CategoryGrid />
      <UserTypes />
    </>
  )
}

export default Home
