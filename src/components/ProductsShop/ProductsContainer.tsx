import ProductCard from "./ProductCard"

const ProductsContainer = ({ filterData }) => {
  return (
    <div className="products">
      {filterData.map((item, index) => {
        return <ProductCard id={item.id} name={item.name} price={item.price} key={index} />
      })}
    </div>
  )
}
export default ProductsContainer
