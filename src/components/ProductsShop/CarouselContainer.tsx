import CarouselProduct from "./Carousel"

const CarouselContainer = () => {
  return (
    <div className="carousel">
      <button className="button" id="">
        After
      </button>
      <div className="slider-carousel-products">
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
      <button className="button">Prev</button>
    </div>
  )
}
export default CarouselContainer
