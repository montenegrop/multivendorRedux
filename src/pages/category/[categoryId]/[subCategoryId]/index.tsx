import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FilterContainer from "../../../../components/ProductsShop/FilterContainer"
import ProductsContainer from "../../../../components/ProductsShop/ProductsContainer"
import { FILTERS_CATEGORY_INIT } from "../../../../state/actions/filtersCategory"
import { PRODUCT_CATEGORY_INIT } from "../../../../state/actions/productCategory"
import { RootState } from "../../../../state/reducers"

const ProductCategory = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.productCategory)
  const filtersRedux = useSelector((state: RootState) => state.filtersCategory)
  useEffect(() => {
    dispatch(
      PRODUCT_CATEGORY_INIT({
        id: router.query.subCategoryId,
        channel: "default-channel",
        minimum: 223,
        maximum: 899,
      })
    )
    dispatch(FILTERS_CATEGORY_INIT({ id: router.query.subCategoryId, channel: "default-channel" }))
  }, [dispatch])

  if (categRedux.loading || filtersRedux.loading) {
    return <p className="has-text-centered is-size-1">Cargando...</p>
  }
  if (categRedux.products && filtersRedux.filtersAttributes) {
    return (
      <div>
        <div className="store">
          <FilterContainer filter={filtersRedux.filtersAttributes.edges} />
          <ProductsContainer data={categRedux.products.edges} />
        </div>
      </div>
    )
  } else return null
}
export default ProductCategory
