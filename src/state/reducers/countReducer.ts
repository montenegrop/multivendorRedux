import { createReducer } from "@reduxjs/toolkit"
import * as countActions from "../actions/count"

const initialState = <number | null>7

export default createReducer(initialState, (builder) => {
  builder.addCase(countActions.INCREMENT, (state, action) => {
    action.payload.name
    state = state + 1
    return state
  })
})
