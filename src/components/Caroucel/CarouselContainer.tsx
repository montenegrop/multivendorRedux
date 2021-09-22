import { useEffect, useMemo, useRef, useState } from "react"
import { useWindowSize } from "../../hooks/useWindowWidth"
import CarouselProduct from "./CarouselProduct"

const CarouselContainer = ({ carouselImages }) => {
  useWindowSize()
  const [page, setPage] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>()
  const productsRef = useRef<HTMLDivElement>()

  const containerWidth = containerRef.current?.offsetWidth || 1
  const productsWidth = productsRef.current?.scrollWidth || 1

  const widthOfEachImage = productsWidth / carouselImages.length
  const numberOfImagesToShow = containerWidth / widthOfEachImage

  const maxPage = useMemo(() => {
    if (carouselImages.length < numberOfImagesToShow) {
      return 0
    } else {
      return Math.ceil(carouselImages.length / numberOfImagesToShow - 1)
    }
  }, [carouselImages, numberOfImagesToShow])

  useEffect(() => {
    if (page > maxPage) {
      setPage(maxPage)
    }
  }, [maxPage, page, setPage])

  const marginLeft = useMemo(() => {
    if (containerRef.current) {
      const p = page === maxPage ? carouselImages.length / numberOfImagesToShow - 1 : page
      return `-${containerWidth * p}px`
    }
    return 0
  }, [containerWidth, productsWidth, page, maxPage])

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
    <div className="carousel" ref={containerRef}>
      <button className="button" onClick={decreasePage}>
        &#10094;
      </button>
      <div className={`slider-carousel-products`} ref={productsRef} style={{ marginLeft }}>
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
