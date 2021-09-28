import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TIENDAS_INIT } from "../../state/actions/tiendas"
import { RootState } from "../../state/reducers"
import Link from "next/link"
import Slider from "../../components/Slide/Slider"

const TiendasPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(TIENDAS_INIT({ tiendasAmount: 4 }))
  }, [dispatch])
  const SliderData = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ]
  const tiendas = useSelector((state: RootState) => state.tiendas.stores)
  return (
    <>
      <div className="">
        <Slider slides={SliderData} />
      </div>
      <div className="grid_container">
        <div className="columns is-centered is-multiline grid_grid">
          {tiendas &&
            tiendas.map((tienda) => {
              return (
                <div className="column is-half grid_card" key={tienda.id}>
                  <div className="grid_img_container">
                    <Link href={`/tienda/${tienda.id}`}>
                      <div
                        className="grid_img"
                        style={{ backgroundImage: `url(${tienda.avatarImage?.url})` }}
                      >
                        <div className="grid_item_name">
                          <p>{tienda.name}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default TiendasPage
