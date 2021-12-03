export const ProductFeatures = ({ simpleProduct }) => {
  return (
    <div>
      <h2>Caracteristicas principales</h2>
      <table className="table">
        <tbody>
          {simpleProduct.attributes.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.attribute.name}</th>
                {item.values.map((subItem, index) => {
                  return <td key={index}>{subItem.name}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
