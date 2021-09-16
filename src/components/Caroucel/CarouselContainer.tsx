import { useMemo, useState } from "react"
import CarouselProduct from "./CarouselProduct"

const CarouselContainer = ({ carouselImages, numberOfImagesToShow }) => {
  const [page, setPage] = useState<number>(0)
  const maxPage = useMemo(() => {
    if (carouselImages.length < numberOfImagesToShow) {
      return 0
    } else {
      return carouselImages.length - numberOfImagesToShow
    }
  }, [carouselImages])
  const increasePage = () => {
    if (page !== maxPage) {
      setPage(page + 1)
    }
  }
  const decreasePage = () => {
    if (page !== 0) {
      setPage(page - 1)
    }
  }
  return (
    <div className="carousel">
      <button className="button" onClick={decreasePage}>
        &#10094;
      </button>
      <div className={`slider-carousel-products margin-left-${page}`}>
        {carouselImages.map((item, index) => {
          return <CarouselProduct image={item.image} key={`carouse-product-${index}`} />
        })}
      </div>
      <button className="button" onClick={increasePage}>
        &#10095;
      </button>
    </div>
  )
}
export default CarouselContainer
