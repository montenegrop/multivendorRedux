export const ProductFeatures = ({ product }) => {
  return (
    <div>
      <h2>Caracteristicas principales</h2>
      <table className="table">
        <tbody>
          <tr>
            <th>Marca</th>
            <td>{product.features.mark}</td>
          </tr>
          <tr>
            <th>Modelo</th>
            <td>{product.features.model}</td>
          </tr>
          <tr>
            <th>Genero</th>
            <td>{product.features.gender}</td>
          </tr>
          <tr>
            <th>Color de la caja</th>
            <td>{product.features.boxColour}</td>
          </tr>
          <tr>
            <th>Material</th>
            <td>{product.features.material}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
