import { createReducer } from "@reduxjs/toolkit"
import * as categoryActions from "../../actions/category"
import { Category } from "../../../generated/graphql"

const initialState = {
  category: <Category>null,
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(categoryActions.CATEGORY_SUCCESS, (state, { payload }) => {
    state.category = { ...payload }
    state.loading = false
  })
  builder.addCase(categoryActions.CATEGORY_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(categoryActions.CATEGORY_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
