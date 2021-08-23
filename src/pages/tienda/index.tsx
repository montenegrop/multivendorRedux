import React, { useEffect } from "react"
import Layout from "../Layout"
import Navbar from "../../components/Navbar/Navbar"
import TiendaBanner from "./TiendaBanner"
import TiendaNavbar from "./TiendaNavbar"
import { useDispatch, useSelector } from "react-redux"
import { STORE_INIT } from "../../state/actions/store"
import { RootState } from "../../state/reducers"

const Tienda = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(STORE_INIT({ id: "VmVuZG9yOjE=" }))
  }, [dispatch])

  const userData = useSelector((state: RootState) => state.store)

  return (
    <>
      <Navbar />
      <Layout>
        {userData.avatar && userData.banner && <TiendaBanner userData={userData} />}
        <TiendaNavbar />
      </Layout>
    </>
  )
}

export default Tienda
