import { ProductCategoryCard } from "./ProductCategoriCard"

const ProductsContainer = ({ data, vendor = "" }) => {
  return (
    <div className="products">
      {data.map((item, index) => {
        return <ProductCategoryCard data={item.node} vendor={vendor} key={index} />
      })}
    </div>
  )
}
export default ProductsContainer
