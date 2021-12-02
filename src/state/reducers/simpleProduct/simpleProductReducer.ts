import { createReducer } from "@reduxjs/toolkit"
import * as simpleProductAction from "../../actions/simpleProduct"
import { Product } from "../../../generated/graphql"

const initialState = {
  product: <Product>null,
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(simpleProductAction.SIMPLE_PRODUCT_SUCCESS, (state, { payload }) => {
    state.product = { ...payload }
    state.loading = false
  })
  builder.addCase(simpleProductAction.SIMPLE_PRODUCT_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(simpleProductAction.SIMPLE_PRODUCT_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
