export const ContactTable = ({ contact_data }) => {
  return (
    <table className="table is-fullwidth has-background-light my_table-light_titles my_table-no_borders my_table-right">
      <tbody>
        <tr>
          <th>Teléfono</th>
          <td>+23211231321</td>
        </tr>
        <tr>
          <th>Celular</th>
          <td>3121111111</td>
        </tr>
        <tr>
          <th>Dirección</th>
          <td>San luis 4433</td>
        </tr>
        <tr>
          <th>Ciudad</th>
          <td>Capital Federal</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>cacho_castaña@hotmail.com</td>
        </tr>
        <tr>
          <th>Redes</th>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
