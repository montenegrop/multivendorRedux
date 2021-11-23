import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
/* import { Banner } from "../../../../components/Banner" */
import FilterContainer from "../../../../components/ProductsShop/FilterContainer"
import ProductsContainer from "../../../../components/ProductsShop/ProductsContainer"
import WspContactButton from "../../../../components/ProductsShop/WspContactButton"
import { PRODUCT_CATEGORY_INIT } from "../../../../state/actions/productCategory"
import { RootState } from "../../../../state/reducers"

const ProductCategory = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.productCategory)
  useEffect(() => {
    dispatch(PRODUCT_CATEGORY_INIT({ id: router.query.subCategoryId, channel: "pesos" }))
  }, [dispatch])

  if (categRedux.loading) {
    return <p className="has-text-centered is-size-1">Cargando...</p>
  }
  console.log(categRedux)

  if (categRedux.category) {
    return (
      <div>
        {/*  <Banner banner_image={} banner_title={} /> */}
        <div className="store">
          <FilterContainer />
          <ProductsContainer data={categRedux.category.products.edges} />
          <WspContactButton />
        </div>
      </div>
    )
  } else return null
}
export default ProductCategory
