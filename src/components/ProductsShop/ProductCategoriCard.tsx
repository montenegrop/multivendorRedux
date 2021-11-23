export const ProductCategoryCard = ({ data }) => {
  const img = "https://www.innaturale.com/es/wp-content/uploads/2021/09/Jardineria-salud.jpg"
  return (
    <div className="product_card">
      {data.images.length != 0 ? (
        <div className="image mx-auto">
          <img className="" src={data?.images[0].url} alt={data?.images[0].alt} />
        </div>
      ) : (
        <div>
          <img className="" src={img} alt="" />
        </div>
      )}
      <p>{data.name}</p>
      {data.description != "" ? (
        <p>{data.description}</p>
      ) : (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      )}
    </div>
  )
}
