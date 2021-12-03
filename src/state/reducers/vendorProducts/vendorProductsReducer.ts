import { createReducer } from "@reduxjs/toolkit"
import * as vendorProductsAction from "../../actions/vendorProducts"
import { ProductCountableConnection } from "../../../generated/graphql"

const initialState = {
  products: <ProductCountableConnection>null,
  loading: <boolean>false,
  error: <string>"",
}

export default createReducer(initialState, (builder) => {
  builder.addCase(vendorProductsAction.VENDOR_PRODUCTS_SUCCESS, (state, { payload }) => {
    state.products = { ...payload }
    state.loading = false
  })
  builder.addCase(vendorProductsAction.VENDOR_PRODUCTS_INIT, (state) => {
    state.loading = true
    state.error = ""
  })
  builder.addCase(vendorProductsAction.VENDOR_PRODUCTS_ERROR, (state, { payload }) => {
    state.error = payload
    state.loading = false
  })
})
