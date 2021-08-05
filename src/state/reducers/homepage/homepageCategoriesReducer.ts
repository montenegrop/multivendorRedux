import { createReducer } from "@reduxjs/toolkit"
import * as homepageActions from "../../actions/homepage"
import { Category } from "../../actions/homepage"

const initialState = {
  categories: <Category[]>[],
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(homepageActions.HOMEPAGE_SUCCESS, (state, { payload }) => {
    state.categories = payload.edges.map(({ node }) => ({
      id: node.id,
      name: node.name,
      url: node.backgroundImage.url,
      alt: node.backgroundImage.alt,
    }))
  })
  builder.addCase(homepageActions.HOMEPAGE_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(homepageActions.HOMEPAGE_ERROR, (state, { payload }) => {
    state.error = payload
  })
})
