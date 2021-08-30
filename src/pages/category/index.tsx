import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../../components/Navbar/Navbar"
import CategoryBanner from "./categorysBanner"
import Repuesto from "./repuesto"
import SubCategory from "./subCategory"
import { CATEGORY_INIT } from "../../state/actions/category"
import { RootState } from "../../state/reducers"
import Layout from "../Layout"
const Category = () => {
  const banner_image = "https://i.vimeocdn.com/video/966258373_640x360.jpg"
  const repuestoImg = "https://www.saumavw.com/_red/saumavw/userfiles/images/postventa/repe1.jpg"
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.category)
  useEffect(() => {
    dispatch(CATEGORY_INIT({ id: "Q2F0ZWdvcnk6MzA=", channel: "default-channel" }))
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="category_container">
        <CategoryBanner banner_image={banner_image} />
        <Layout>
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
        </Layout>
      </div>
    </>
  )
}
export default Category
