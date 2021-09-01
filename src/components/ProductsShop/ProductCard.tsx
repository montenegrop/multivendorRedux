import { useState } from "react"

const ProductCard = ({ id, name, price }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMouseHover = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="product_card" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
      <strong>{name}</strong>
      <p>ID:{id}</p>
      <img
        src="https://canteraperea.com/wp-content/uploads/2020/11/BigBag-1000kg.jpg"
        alt="imagen de arena"
      />
      <details open={isOpen}>
        <summary hidden={true}></summary>
        <p>{price}</p>
      </details>
    </div>
  )
}
export default ProductCard
