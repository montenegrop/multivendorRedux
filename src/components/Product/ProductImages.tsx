export const ProductImages = ({ images }) => {
  return (
    <div className="product-page-images">
      {images.map((item, index) => {
        return (
          <div className="mb-1" key={index}>
            <img src={item.url} alt={item.alt} />
          </div>
        )
      })}
    </div>
  )
}
