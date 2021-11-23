export const ProductImg = () => {
  const img =
    "https://cdn.joyeriaintercontinental.com/wp-content/uploads/2020/07/15111110/Servicios-01-relojeria-1200x706-compressed.jpg"
  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center">
      <img src={img} alt="images" className="primary-image" />
    </div>
  )
}
