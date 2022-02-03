import Link from "next/link"
const CarouselProduct = ({ data }) => {
  return (
    <Link href={`/product/${data.id}`}>
      <div className="carousel-product">
        <img src={data.url} alt={data.url} />
        {data?.price && <p className="is-size-5">${data.price}</p>}
        {data?.title && <p>{data.title}</p>}
      </div>
    </Link>
  )
}
export default CarouselProduct
