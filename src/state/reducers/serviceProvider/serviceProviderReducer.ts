import { createReducer } from "@reduxjs/toolkit"
import { PastExperienceCountableConnection } from "../../../generated/graphql"
import * as serviceProviderActions from "../../actions/serviceProvider"

const initialState = {
  name: <string>"",
  email: <string>"sdsd",
  location: { city: <string>"", fullAddress: <string>"" },
  phone: <string>"",
  cellularPhone: <string>"+656555",
  loading: <boolean>false,
  error: <string>"",
  pastExperiences: <PastExperienceCountableConnection>{},
}

export default createReducer(initialState, (builder) => {
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_SUCCESS, (state, { payload }) => {
    state.name = payload.name
    state.email = payload.email
    state.location = { city: payload.location?.city, fullAddress: payload.location?.fullAddress }
    state.phone = payload.phone
    state.loading = false
    state.pastExperiences = payload.pastExperiences
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
