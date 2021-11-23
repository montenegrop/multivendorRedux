const CarouselProduct = ({ data }) => {
  return (
    <div className="carousel-product">
      <img src={data.image} alt=" " />
      {data?.price && <p>{data.price}</p>}
      {data?.title && <p>{data.title}</p>}
    </div>
  )
}
export default CarouselProduct
