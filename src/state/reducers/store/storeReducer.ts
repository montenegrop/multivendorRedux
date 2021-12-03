import { createReducer } from "@reduxjs/toolkit"
import { Vendor } from "../../../generated/graphql"
import * as storeActions from "../../actions/store"

const initialState = {
  loading: <boolean>false,
  error: <string>"",
  vendorStore: <Vendor>null,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(storeActions.STORE_SUCCESS, (state, { payload }) => {
    state.vendorStore = payload
    state.loading = false
  })
  builder.addCase(storeActions.STORE_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(storeActions.STORE_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
