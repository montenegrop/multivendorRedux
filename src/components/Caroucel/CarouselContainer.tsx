import { useMemo, useState } from "react"
import CarouselProduct from "./Carousel"

const CarouselContainer = ({ carouselImages }) => {
  const [page, setPage] = useState<number>(1)
  const maxPage = useMemo(() => {
    let max = 1
    carouselImages.forEach((item) => {
      if (item.page > max) {
        max = item.page
      }
    })
    return max
  }, [carouselImages])
  const increasePage = () => {
    if (maxPage !== page) {
      setPage(page + 1)
    }
  }
  const decreasePage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }
  return (
    <div className="carousel">
      <button className="button" onClick={decreasePage}>
        &#10094;
      </button>
      <div className="slider-carousel-products right">
        {carouselImages.map((item, index) => {
          if (page == item.page) return <CarouselProduct image={item.image} key={index} />
        })}
      </div>
      <button className="button" onClick={increasePage}>
        &#10095;
      </button>
    </div>
  )
}
export default CarouselContainer
