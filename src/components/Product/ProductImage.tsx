export const ProductImg = ({ image }) => {
  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center">
      <img src={image.url} alt={image.alt} className="primary-image" />
    </div>
  )
}
