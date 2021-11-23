import { createReducer } from "@reduxjs/toolkit"
import * as productCategoryActions from "../../actions/productCategory"
import { Category } from "../../../generated/graphql"

const initialState = {
  category: <Category>null,
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(productCategoryActions.PRODUCT_CATEGORY_SUCCESS, (state, { payload }) => {
    state.category = { ...payload }
    state.loading = false
  })
  builder.addCase(productCategoryActions.PRODUCT_CATEGORY_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(productCategoryActions.PRODUCT_CATEGORY_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
