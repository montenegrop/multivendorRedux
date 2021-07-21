import React from "react"
import { Score } from "./Score"
import { ServiceButton } from "./ServiceButton"

export const ServicesTable = ({ services_data }) => {
  const example = [
    { name: "Montenegro", score: 3 },
    { name: "jose", score: 4 },
  ]
  console.log(services_data)
  return (
    <table className="table is-fullwidth has-background-light my_table-light_titles my_table-no_borders my_table-right">
      <tbody>
        {services_data.map((service_data, index) => {
          return (
            <tr>
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
