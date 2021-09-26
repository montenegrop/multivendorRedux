import { createReducer } from "@reduxjs/toolkit"
import * as categoryActions from "../../actions/tiendas"
import { Vendor } from "../../../generated/graphql"

const initialState = {
  stores: <Vendor[]>[],
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(categoryActions.TIENDAS_SUCCESS, (state, { payload }) => {
    state.stores = payload.edges.map(({ node }) => node)
    state.loading = false
  })
  builder.addCase(categoryActions.TIENDAS_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(categoryActions.TIENDAS_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
