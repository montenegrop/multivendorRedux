import CarouselProduct from "./Carousel"

const CarouselContainer = () => {
  return (
    <div className="carousel">
      <button className="button">&#10094;</button>
      <div className="slider-carousel-products right">
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
        <CarouselProduct />
      </div>
      <button className="button">&#10095;</button>
    </div>
  )
}
export default CarouselContainer
