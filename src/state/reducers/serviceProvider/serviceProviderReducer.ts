import { createReducer } from "@reduxjs/toolkit"
import * as serviceProviderActions from "../../actions/serviceProvider"

const initialState = {
  name: <string>"",
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_SUCCESS, (state, { payload }) => {
    state.name = payload.name
    state.loading = false
  })
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
