import React from "react"
import { Score } from "./Score"
import { ServiceButton } from "./ServiceButton"

export const ServicesTable = ({ services_data }) => {
  console.log(services_data)
  return (
    <table className="table is-fullwidth has-background-light my_table-light_titles my_table-no_borders my_table-right">
      <tbody>
        {services_data.map((service_data, _index) => {
          return (
            <tr key={`tr-${service_data.name}`}>
              <th>
                <ServiceButton onClick={() => {}}>{service_data.name}</ServiceButton>
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
