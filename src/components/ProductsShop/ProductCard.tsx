const ProductCard = ({ id, name, price }) => {
  return (
    <div className="product_card">
      <strong>{name}</strong>
      <p>ID:{id}</p>
      <img
        src="https://canteraperea.com/wp-content/uploads/2020/11/BigBag-1000kg.jpg"
        alt="imagen de arena"
      />
      <p>{price}</p>
    </div>
  )
}
export default ProductCard
