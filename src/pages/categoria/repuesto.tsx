const Repuesto = ({ img }) => {
  return (
    <div className="category_subtitle">
      <p>BUSCA EN LA RED MAS GRANDE DE REPUESTOS</p>
      <div className="bigImageContainer">
        <div className="textInImage">
          <img src={img} alt="" className="repImage" />
          <div className="texto">
            <p>REPUESTOS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Repuesto
