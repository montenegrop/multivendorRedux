import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CategoryBanner from "./categoryBanner"
import Repuesto from "./repuesto"
import SubCategory from "./subCategory"
import { CATEGORY_INIT } from "../../state/actions/category"
import { RootState } from "../../state/reducers"
import { useRouter } from "next/router"

const Category = () => {
  const router = useRouter()
  console.log(router.query.categoryId)
  const banner_image = "https://i.vimeocdn.com/video/966258373_640x360.jpg"
  const repuestoImg = "https://www.saumavw.com/_red/saumavw/userfiles/images/postventa/repe1.jpg"
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.category)
  useEffect(() => {
    dispatch(CATEGORY_INIT({ id: `${router.query.categoryId}`, channel: "default-channel" }))
  }, [dispatch])

  return (
    <>
      <div className="category_container">
        <CategoryBanner banner_image={banner_image} category_name={categRedux.category.name} />
        {categRedux.category ? (
          <>
            <div className="subcategory_grid">
              {categRedux.category.children.edges.map((item, index) => {
                return <SubCategory item={item} key={index} />
              })}
            </div>
            <Repuesto img={repuestoImg} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}
export default Category
