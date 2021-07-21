import React from "react"
import { StarEmpty } from "./StarEmpty"
import { StarFilled } from "./StarFilled"

export const Score = ({ score }) => {
  var rows = []
  for (var i = 0; i < 5; i++) {
    console.log(score)
    rows.push(i < score ? <StarFilled /> : <StarEmpty />)
  }
  return <div className="stars-no_wrap">{rows}</div>
}
