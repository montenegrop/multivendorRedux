import React from "react"
import { Score } from "./Score"

export const ServicesTable = ({ services_data }) => {
  return (
    <table className="table is-hoverable has-background-light">
      <tbody>
        {services_data.map((service_data, _index) => {
          return (
            <tr
              key={`tr-${service_data.name}`}
              className="is-size-4 py-1 has-text-grey has-text-weight-light"
            >
              <th className="is-size-4 py-1 has-text-grey has-text-weight-light">
                {service_data.name}
              </th>
              <td>
                <Score score={2} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
