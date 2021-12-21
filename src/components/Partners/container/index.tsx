import { PartnerCard } from "../component/PartnerCard"

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
  return (
    <div className="mb-5">
      <h2 className="has-text-centered my-5 has-text-grey has-text-weight-light">
        Nuestros Partners
      </h2>
      <div className="is-flex is-justify-content-space-around">
        {partners.map((item) => {
          return <PartnerCard data={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
export default Partners
