import { createReducer } from "@reduxjs/toolkit"
import * as serviceProviders from "../../actions/serviceProviders"
import { Vendor } from "../../actions/serviceProviders"
const INIT_STATE = {
  providers: <Vendor[]>[],
  loading: <boolean>false,
  error: <string>"",
}
export default createReducer(INIT_STATE, (builder) => {
  builder.addCase(serviceProviders.SERVICE_PROVIDERS_SUCCESS, (state, { payload }) => {
    state.providers = payload.edges.map(({ node }) => ({
      id: node.id,
      name: node.name,
      relevance: node.relevance,
      openHours: node.openHours,
      location: {
        id: node.location.id,
      },
      avatarImage: {
        url: node.avatarImage.url,
        alt: node.avatarImage.alt,
      },
      services: {
        edges: node.services.edges,
      },
    }))
    state.loading = false
  })
  builder.addCase(serviceProviders.SERVICE_PROVIDERS_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(serviceProviders.SERVICE_PROVIDERS_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
