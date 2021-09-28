const Banner = ({ banner_image, banner_title }) => {
  return (
    <div className="banner-container">
      <div className="banner-img">
        <img src={banner_image} alt="" />
      </div>
      <h1 className="banner-title has-text-centered">
        <strong>{banner_title}</strong>
      </h1>
    </div>
  )
}
export default Banner
