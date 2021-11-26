import { createReducer } from "@reduxjs/toolkit"
import * as filtersCategoryActions from "../../actions/filtersCategory"
import { AttributeCountableConnection } from "../../../generated/graphql"

const initialState = {
  filtersAttributes: <AttributeCountableConnection>null,
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(filtersCategoryActions.FILTERS_CATEGORY_SUCCESS, (state, { payload }) => {
    state.filtersAttributes = { ...payload }
    state.loading = false
  })
  builder.addCase(filtersCategoryActions.FILTERS_CATEGORY_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(filtersCategoryActions.FILTERS_CATEGORY_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
