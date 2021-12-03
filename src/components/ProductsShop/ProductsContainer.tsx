import { ProductCategoryCard } from "./ProductCategoriCard"

const ProductsContainer = ({ data, vendor = "" }) => {
  return (
    <div className="products">
      {data.map((item) => {
        return (
          <>
            <ProductCategoryCard data={item.node} vendor={vendor} />
          </>
        )
      })}
    </div>
  )
}
export default ProductsContainer
