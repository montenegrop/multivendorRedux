import React from "react"
import { useMemo, useState } from "react"
import { useMediaQuery } from "react-responsive"
import CarouselProduct from "./CarouselProduct"
const CarouselContainer = ({ carouselImages, numberOfImagesToShow }) => {
  const [page, setPage] = useState<number>(0)
  const xlWidth = useMediaQuery({
    query: "(min-width: 1200px)",
  })
  const lgWidth = useMediaQuery({
    query: "(min-width: 956px)",
  })
  const mdWidth = useMediaQuery({
    query: "(min-width: 760px)",
  })
  const smWidth = useMediaQuery({
    query: "(min-width: 480px)",
  })
  const xsWidth = useMediaQuery({
    query: "(min-width:320px",
  })

  const screenWidths = [xlWidth, lgWidth, mdWidth, smWidth, xsWidth]
  console.log(screenWidths)

  const maxPage = useMemo(() => {
    const hiddenImages = screenWidths.filter((item) => {
      return item == false
    }).length
    if (carouselImages.length < numberOfImagesToShow + hiddenImages) {
      return 0
    } else {
      return carouselImages.length - numberOfImagesToShow + hiddenImages
    }
  }, [carouselImages, screenWidths])
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
