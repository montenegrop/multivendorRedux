import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Banner } from "../../../components/Banner"
import SubCategory from "./subCategory"
import { CATEGORY_INIT } from "../../../state/actions/category"
import { RootState } from "../../../state/reducers"
import { useRouter } from "next/router"

const Category = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.category)
  useEffect(() => {
    dispatch(CATEGORY_INIT({ id: router.query.categoryId, channel: "default-channel" }))
  }, [dispatch])

  return (
    <div className="category_container pb-5">
      <Banner
        banner_image={categRedux.category?.backgroundImage?.url}
        banner_title={categRedux.category?.name}
      />
      <h2 className="category_subtitle">BUSCA POR RUBRO</h2>
      {categRedux.category ? (
        <>
          <div className="subcategory_grid">
            {categRedux.category.children?.edges.map((item, index) => {
              return <SubCategory item={item} key={index} />
            })}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="grid-2col">
        <div>
          <p>SOLO CERCA TUYO</p>
        </div>
        <div>
          <p>LAS MEJORES MARCAS</p>
          <div className="is-flex m-3 is-align-items-center is-justify-content-center">
            <img src="../images/Marca1.png" alt="" width={70} className="mx-3" />
            <p className="is-size-4">Finning cat</p>
          </div>
          <div className="is-flex m-3 is-align-items-center is-justify-content-center">
            <img src="../images/Marca1.png" alt="" width={70} className="mx-3" />
            <p className="is-size-4">Finning cat</p>
          </div>
          <div className="is-flex m-3 is-align-items-center is-justify-content-center">
            <img src="../images/Marca1.png" alt="" width={70} className="mx-3" />
            <p className="is-size-4">Finning cat</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Category
