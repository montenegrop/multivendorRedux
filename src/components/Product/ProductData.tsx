export const ProductData = ({ simpleProduct }) => {
  return (
    <div className="product-page-data">
      <p className="has-text-grey">Nuevo</p>
      <h1 className="is-capitalized">{simpleProduct.name}</h1>
      <p>4 Estrellas</p>
      <small className="has-text-grey">{simpleProduct.rating} opiniones</small>
      <p className="is-size-3">
        ${simpleProduct.defaultVariant.pricing.price.net.amount} <strong>+ imp</strong>
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
