import ProductCard from "./ProductCard"

const ProductsContainer = ({ filterData }) => {
  return (
    <div className="products">
      {filterData.map((item) => {
        return (
          <ProductCard name={item.name} price={item.price} weight={item.weight} key={item.id} />
        )
      })}
    </div>
  )
}
export default ProductsContainer
