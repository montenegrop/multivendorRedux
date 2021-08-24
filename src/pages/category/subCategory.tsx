const SubCategory = ({ item }) => {
  return (
    <div className="subcategory_container">
      <div className="textInImage">
        <img src={item.node.backgroundImage.url} alt={item.node.backgroundImage.alt} />
        <div className="texto">
          <p>{item.node.name}</p>
        </div>
      </div>
      <div className="subcategory_products productEfect">
        {item.node.products.edges.map((prod, index) => {
          return (
            <p key={index}>
              <strong>{prod.node.name}</strong>
            </p>
          )
        })}
      </div>
    </div>
  )
}
export default SubCategory
