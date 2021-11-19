import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FilterContainer from "../../components/ProductsShop/FilterContainer"
import ProductsContainer from "../../components/ProductsShop/ProductsContainer"
import WspContactButton from "../../components/ProductsShop/WspContactButton"
import { PRODUCT_CATEGORY_INIT } from "../../state/actions/productCategory"
import { RootState } from "../../state/reducers"

const ProductCategory = () => {
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.productCategory)
  useEffect(() => {
    dispatch(PRODUCT_CATEGORY_INIT({ id: `Q2F0ZWdvcnk6MzA=`, channel: "pesos" }))
  }, [dispatch])

  if (categRedux.loading) {
    return <p className="has-text-centered is-size-1">Cargando...</p>
  }
  if (categRedux.category) {
    return (
      <div>
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
