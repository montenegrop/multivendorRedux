import { createAction } from "@reduxjs/toolkit"
import { ProductCountableConnection } from "../../generated/graphql"

export const VENDOR_PRODUCTS_INIT =
  createAction<{ id: string | string[]; channel: string }>("VENDOR_PRODUCTS_INIT")
export const VENDOR_PRODUCTS_SUCCESS =
  createAction<ProductCountableConnection>("VENDOR_PRODUCTS_SUCCESS")
export const VENDOR_PRODUCTS_ERROR = createAction<string>("VENDOR_PRODUCTS_ERROR")
