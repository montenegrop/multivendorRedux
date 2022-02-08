export const Banner = ({ banner_image, banner_title }) => {
  return (
    <div className="banner-container">
      <div className="banner-img">
        <img src={banner_image} alt="" style={{ objectFit: "cover" }} />
      </div>
      <h1 className="has-text-centered">
        <strong>{banner_title}</strong>
      </h1>
    </div>
  )
}
