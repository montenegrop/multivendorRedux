import { useState } from "react"

const ProductCard = ({ id, name, price, weight }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMouseHover = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="product_card" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
      <img
        src="https://canteraperea.com/wp-content/uploads/2020/11/BigBag-1000kg.jpg"
        alt="imagen de arena"
      />
      <div className="product_desc">
        <strong>$ {price} + imp</strong>
        <p>{name}</p>
        <p>{weight}kg</p>
        <p>{id}</p>
      </div>

      {/* <details open={isOpen}>
        <summary hidden={true}></summary>
        <p>{price}</p>
      </details> */}
    </div>
  )
}
export default ProductCard
