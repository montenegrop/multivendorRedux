export const ProductDescription = ({ description }) => {
  return (
    <div className="has-background-white pt-6 px-6 ">
      <h2>Descripción</h2>
      <p className="is-uppercase is-size-5 w-60p product-desc">{description}</p>
    </div>
  )
}
