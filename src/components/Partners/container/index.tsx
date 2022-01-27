import { PartnerCard } from "../component/PartnerCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
const Partners = () => {
  const partners = [
    {
      img: "https://media.glassdoor.com/sqll/4264522/andreani-squarelogo-1627545291158.png",
      name: "Andreani",
      title: "Logistic Partner",
      id: "1",
    },
    {
      img: "https://media.glassdoor.com/sqll/4264522/andreani-squarelogo-1627545291158.png",
      name: "Andreani",
      title: "Logistic Partner",
      id: "2",
    },
    {
      img: "https://media.glassdoor.com/sqll/4264522/andreani-squarelogo-1627545291158.png",
      name: "Andreani",
      title: "Logistic Partner",
      id: "3",
    },
    {
      img: "https://media.glassdoor.com/sqll/4264522/andreani-squarelogo-1627545291158.png",
      name: "Andreani",
      title: "Logistic Partner",
      id: "4",
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="mb-5 partners">
      <h2 className="has-text-centered my-5 has-text-grey has-text-weight-light">
        Nuestros Partners
      </h2>
      <div className="grid-4col" id="partners-grid">
        {partners.map((item) => {
          return <PartnerCard data={item} key={item.id} />
        })}
      </div>
      <div id="partners-carousel">
        <Carousel
          responsive={responsive}
          showDots={false}
          ssr={true}
          removeArrowOnDeviceType={["tablet", "desktop", "superLargeDesktop"]}
          itemClass="carousel-item-padding-40-px"
          className="listStyleNone"
        >
          {partners.map((item) => {
            return <PartnerCard data={item} key={item.id} />
          })}
        </Carousel>
      </div>
    </div>
  )
}
export default Partners
