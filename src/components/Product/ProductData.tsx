export const ProductData = ({ product }) => {
  return (
    <div className="product-page-data">
      <p className="has-text-grey">{product.state}</p>
      <h1 className="is-capitalized">{product.title}</h1>
      <p>{product.starts} Estrellas</p>
      <small className="has-text-grey">{product.opinions} opiniones</small>
      <p className="is-size-3">
        ${product.price} <strong>+ imp</strong>
      </p>

      <small className="has-text-link">Ver los metodos de pago</small>
      <br />
      <strong>Envios y Devoluciones acordar con Tienda vendedora</strong>
      <p className="has-text-link">Necesitas un trasnporte? Contactate</p>
      <a className="button  polygon-button secondary-color" style={{ height: "30px" }}>
        Agregar al carrito
      </a>
    </div>
  )
}
