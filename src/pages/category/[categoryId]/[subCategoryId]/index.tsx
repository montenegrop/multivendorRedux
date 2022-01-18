import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
/* import { Banner } from "../../../../components/Banner" */
import FilterContainer from "../../../../components/ProductsShop/FilterContainer"
import ProductsContainer from "../../../../components/ProductsShop/ProductsContainer"
import WspContactButton from "../../../../components/ProductsShop/WspContactButton"
import { FILTERS_CATEGORY_INIT } from "../../../../state/actions/filtersCategory"
import { PRODUCT_CATEGORY_INIT } from "../../../../state/actions/productCategory"
import { RootState } from "../../../../state/reducers"

const ProductCategory = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.productCategory)
  const filtersRedux = useSelector((state: RootState) => state.filtersCategory)

  useEffect(() => {
    dispatch(PRODUCT_CATEGORY_INIT({ id: router.query.subCategoryId, channel: "pesos" }))
    dispatch(FILTERS_CATEGORY_INIT({ id: router.query.subCategoryId, channel: "pesos" }))
  }, [dispatch])
  console.log(categRedux)

  if (categRedux.loading || filtersRedux.loading) {
    return <p className="has-text-centered is-size-1">Cargando...</p>
  }
  if (categRedux.category && filtersRedux.filtersAttributes) {
    return (
      <div>
        <div className="store">
          <FilterContainer filter={filtersRedux.filtersAttributes.edges} />
          <ProductsContainer data={categRedux.category.products.edges} />
          <WspContactButton />
        </div>
      </div>
    )
  } else return null
}
export default ProductCategory
