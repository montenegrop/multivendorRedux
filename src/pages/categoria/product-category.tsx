import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FilterContainer from "../../components/ProductsShop/FilterContainer"
import WspContactButton from "../../components/ProductsShop/WspContactButton"
import { PRODUCT_CATEGORY_INIT } from "../../state/actions/productCategory"
import { RootState } from "../../state/reducers"

const ProductCategory = () => {
  const dispatch = useDispatch()
  const categRedux = useSelector((state: RootState) => state.productCategory)
  useEffect(() => {
    dispatch(PRODUCT_CATEGORY_INIT({ id: `Q2F0ZWdvcnk6MzA=`, channel: "pesos" }))
  }, [dispatch])
  console.log(categRedux)

  return (
    <div>
      <div className="store">
        <FilterContainer />

        <WspContactButton />
      </div>
    </div>
  )
}
export default ProductCategory
