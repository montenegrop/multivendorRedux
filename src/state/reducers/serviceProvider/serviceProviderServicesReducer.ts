import { createReducer } from "@reduxjs/toolkit"
import * as serviceProviderActions from "../../actions/serviceProvider"
import { Service } from "../../actions/serviceProvider"

const initialState = {
  services: <Service[]>[],
}

export default createReducer(initialState, (builder) => {
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_SUCCESS, (state, { payload }) => {
    state.services = payload.services.edges.map(({ node }) => ({ name: node.name, score: 3 }))
  })
})
