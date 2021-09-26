import { createReducer } from "@reduxjs/toolkit"
import * as servicesListActions from "../../actions/servicesList"
import { BaseProduct } from "../../../generated/graphql"

const initialState = {
  services: <BaseProduct[]>[],
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(servicesListActions.SERVICES_LIST_SUCCESS, (state, { payload }) => {
    state.services = payload.edges.map(({ node }) => node)
    state.loading = false
  })
  builder.addCase(servicesListActions.SERVICES_LIST_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(servicesListActions.SERVICES_LIST_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
