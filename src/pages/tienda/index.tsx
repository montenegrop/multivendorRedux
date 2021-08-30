import React, { useEffect } from "react"
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
      {userData.avatar && userData.banner && <TiendaBanner userData={userData} />}
      <TiendaNavbar />
    </>
  )
}

export default Tienda
