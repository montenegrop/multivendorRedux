export const ProductImages = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_SX522_.jpg",
  ]
  return (
    <div className="product-page-images">
      {images.map((item, index) => {
        return (
          <div className="mb-1" key={index}>
            <img src={item} alt="product" />
          </div>
        )
      })}
    </div>
  )
}
