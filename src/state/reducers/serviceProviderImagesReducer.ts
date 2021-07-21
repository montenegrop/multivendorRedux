import { createReducer } from "@reduxjs/toolkit"
import * as serviceProviderActions from "../actions/serviceProvider"
import { Image } from "../actions/serviceProvider"

const initialState = {
  banner: <Image>null,
  avatar: <Image>{ alt: "", url: "" },
}

export default createReducer(initialState, (builder) => {
  builder.addCase(serviceProviderActions.SERVICE_PROVIDER_SUCCESS, (state, { payload }) => {
    state.banner = { url: payload.mainImage.url, alt: payload.mainImage.alt }
    state.avatar = { url: payload.avatarImage.url, alt: payload.avatarImage.alt }
  })
})
