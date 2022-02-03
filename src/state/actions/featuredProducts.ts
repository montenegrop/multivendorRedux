import { createAction } from "@reduxjs/toolkit"
import { ProductCountableConnection } from "../../generated/graphql"

export const FEATURED_PRODUCTS_INIT =
  createAction<{ id: string | string[]; channel: string }>("FEATURED_PRODUCTS_INIT")
export const FEATURED_PRODUCTS_SUCCESS = createAction<ProductCountableConnection>(
  "FEATURED_PRODUCTS_SUCCESS"
)
export const FEATURED_PRODUCTS_ERROR = createAction<string>("FEATURED_PRODUCTS_ERROR")
