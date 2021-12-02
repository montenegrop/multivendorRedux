import { useRouter } from "next/router"
import { useEffect, useMemo, useRef, useState } from "react"
import { useWindowSize } from "../../hooks/useWindowWidth"
import CarouselProduct from "./CarouselProduct"

const CarouselContainer = ({ data }) => {
  useWindowSize()
  const [page, setPage] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>()
  const productsRef = useRef<HTMLDivElement>()

  const containerWidth = containerRef.current?.offsetWidth || 1
  const productsWidth = productsRef.current?.scrollWidth || 1

  const widthOfEachImage = productsWidth / data.length
  const numberOfImagesToShow = containerWidth / widthOfEachImage

  const maxPage = useMemo(() => {
    if (data.length < numberOfImagesToShow) {
      return 0
    } else {
      return Math.ceil(data.length / numberOfImagesToShow - 1)
    }
  }, [data, numberOfImagesToShow])

  useEffect(() => {
    if (page > maxPage) {
      setPage(maxPage)
    }
  }, [maxPage, page, setPage])

  const marginLeft = useMemo(() => {
    if (containerRef.current) {
      const p = page === maxPage ? data.length / numberOfImagesToShow - 1 : page
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
  const router = useRouter()
  return (
    <div className="carousel-shop mb-6">
      <div
        className={`${router.pathname == "/product" && "has-background-white"} carousel`}
        ref={containerRef}
      >
        <button className="button" onClick={decreasePage}>
          &#10094;
        </button>
        <div className={`slider-carousel-products`} ref={productsRef} style={{ marginLeft }}>
          {data.map((item, index) => {
            return <CarouselProduct data={item} key={`carouse-product-${index}`} />
          })}
        </div>
        <button className="button" onClick={increasePage}>
          &#10095;
        </button>
      </div>
    </div>
  )
}
export default CarouselContainer
