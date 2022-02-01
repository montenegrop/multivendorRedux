export const ContactTable = (contact_data: {
  phone: string
  email: string
  location: { city: string; fullAddress: string }
}) => {
  return (
    <table
      className="table is-hoverable has-background-light ml-6 "
      style={{ borderCollapse: "collapse", border: "none" }}
    >
      <tbody>
        <tr className="mx-6">
          <th className="is-size-4 py-1 has-text-grey has-text-weight-light">Teléfono:</th>
          <td className="is-size-4 py-1 has-text-grey has-text-weight-light">
            {contact_data.phone}
          </td>
        </tr>
        <tr>
          <th className="is-size-4 py-1 has-text-grey has-text-weight-light">Dirección:</th>
          <td className="is-size-4 py-1 has-text-grey has-text-weight-light">
            {contact_data.location?.fullAddress}
          </td>
        </tr>
        <tr>
          <th className="is-size-4 py-1 has-text-grey has-text-weight-light">Ciudad:</th>
          <td className="is-size-4 py-1 has-text-grey has-text-weight-light">
            {contact_data.location?.city}
          </td>
        </tr>
        <tr>
          <th className="is-size-4 py-1 has-text-grey has-text-weight-light">Email:</th>
          <td className="is-size-4 py-1 has-text-grey has-text-weight-light">
            {contact_data.email}
          </td>
        </tr>
        <tr>
          <th className="is-size-4 py-1 has-text-grey has-text-weight-light"> Redes:</th>
          <td className="is-size-4"></td>
        </tr>
      </tbody>
    </table>
  )
}
