import { createReducer } from "@reduxjs/toolkit"
import * as productCategoryActions from "../../actions/productCategory"
import { ProductCountableConnection } from "../../../generated/graphql"

const initialState = {
  products: <ProductCountableConnection>null,
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(productCategoryActions.PRODUCT_CATEGORY_SUCCESS, (state, { payload }) => {
    state.products = { ...payload }
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
