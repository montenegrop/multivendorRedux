import React from "react"
import { StarEmpty } from "./StarEmpty"
import { StarFilled } from "./StarFilled"

export const Score = ({ score }) => {
  const rows = []
  for (let i = 0; i < 5; i++) {
    rows.push(
      i < score ? <StarFilled key={`star-filled-${i}`} /> : <StarEmpty key={`star-empty-${i}`} />
    )
  }
  return <div className="stars-no_wrap">{rows}</div>
}
