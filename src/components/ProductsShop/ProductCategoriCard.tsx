export const ProductCategoryCard = ({ data }) => {
  console.log(data)
  const img = "https://www.innaturale.com/es/wp-content/uploads/2021/09/Jardineria-salud.jpg"
  return (
    <div className="product_card">
      {data.images.length != 0 ? (
        <img className="mx-auto  mt-6" src={data?.images[0].url} alt={data?.images[0].alt} />
      ) : (
        <img className="mx-auto" src={img} alt="" />
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
