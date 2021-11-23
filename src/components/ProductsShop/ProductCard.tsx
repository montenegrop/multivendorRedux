const ProductCard = ({ name, price, weight }) => {
  return (
    <div className="product_card">
      <img
        className="img-w-200-h-auto"
        src="https://canteraperea.com/wp-content/uploads/2020/11/BigBag-1000kg.jpg"
        alt="imagen de arena"
      />
      <div className="product_desc">
        <strong>$ {price} + imp</strong>
        <p>
          {name} {weight}kg
        </p>
      </div>
      <div className="vendor">
        <p>
          vendido por <strong>Carlos</strong>
        </p>
      </div>
    </div>
  )
}
export default ProductCard
