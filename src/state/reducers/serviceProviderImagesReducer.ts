import { createReducer } from "@reduxjs/toolkit"
import * as serviceProviderActions from "../actions/serviceProvider"
import { Image } from "../actions/serviceProvider"

const initialState = {
  banner: <Image>null,
  avatar: <Image>null,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_SUCCESS, (state, { payload }) => {
    state.banner.url = payload?.mainImage.url
    state.banner.alt = payload?.mainImage.alt

    state.avatar.url = payload?.avatarImage.url
    state.avatar.alt = payload?.avatarImage.alt
  })
})
