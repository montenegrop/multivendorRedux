import ProductCard from "./ProductCard"

const ProductsContainer = ({ data }) => {
  return (
    <div className="products">
      {data.map((item) => {
        return (
          <ProductCard name={item.name} price={item.price} weight={item.weight} key={item.id} />
        )
      })}
    </div>
  )
}
export default ProductsContainer
