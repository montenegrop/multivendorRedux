import { createReducer } from "@reduxjs/toolkit"
import * as storeActions from "../../actions/store"
import { Image } from "../../actions/store"

const initialState = {
  loading: <boolean>false,
  error: <string>"",
  name: <string>"",
  banner: <Image>null,
  avatar: <Image>null,
  description: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(storeActions.STORE_SUCCESS, (state, { payload }) => {
    state.name = payload.name
    state.banner = { url: payload.mainImage.url, alt: payload.mainImage.alt }
    state.avatar = { url: payload.avatarImage.url, alt: payload.avatarImage.alt }
    state.description = payload.description
    state.loading = false
  })
  builder.addCase(storeActions.STORE_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(storeActions.STORE_ERROR, (state, { payload }) => {
    state.error = payload
  })
})
