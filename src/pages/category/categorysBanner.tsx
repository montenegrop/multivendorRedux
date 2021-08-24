const CategoryBanner = ({ banner_image }) => {
  return (
    <div className="bannerContainer">
      <div className="categoryImg">
        <img src={banner_image} alt="imagen de tractor" />
      </div>
      <h1 className="category_title">
        <strong>Maquinaria</strong>
      </h1>
      <h2 className="category_subtitle">BUSCA POR RUBRO</h2>
    </div>
  )
}
export default CategoryBanner
