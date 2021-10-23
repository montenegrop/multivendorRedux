export const ContactTable = (contact_data: {
  phone: string
  cellularPhone: string
  email: string
  location: { city: string; fullAddress: string }
}) => {
  return (
    <table className="table is-fullwidth has-background-light my_table-light_titles my_table-no_borders my_table-right">
      <tbody>
        <tr>
          <th>Teléfono</th>
          <td>{contact_data.phone}</td>
        </tr>
        <tr>
          <th>Celular</th>
          <td>{contact_data.cellularPhone}</td>
        </tr>
        <tr>
          <th>Dirección</th>
          <td>{contact_data.location?.fullAddress}</td>
        </tr>
        <tr>
          <th>Ciudad</th>
          <td>{contact_data.location?.city}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{contact_data.email}</td>
        </tr>
        <tr>
          <th>Redes</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
