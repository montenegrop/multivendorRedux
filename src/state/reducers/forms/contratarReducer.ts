import { createReducer } from "@reduxjs/toolkit"
import * as formActions from "../../actions/forms"

const initialStateContratar = {
  service: { name: "", id: "" },
  date: <string>"",
  hour: <string>"",
  address: <string>"",
  location: <string>"",
  checkbox: <boolean>false,
  description: <string>"",
}
export type ContratarType = typeof initialStateContratar

export default createReducer(initialStateContratar, (builder) => {
  builder.addCase(formActions.FORM_CONTRATAR_INIT, (state, { payload }) => {
    state.service = payload.service
    state.date = payload.date
    state.hour = payload.hour
    state.description = payload.description
    state.location = payload.location
    state.checkbox = payload.checkbox
    state.address = payload.address
    state.description = payload.description
  })
  // builder.addCase(formActions.FORM_CONTRATAR_SUCCESS, (state) => {
  //   state = initialStateContratar
  // })
})
