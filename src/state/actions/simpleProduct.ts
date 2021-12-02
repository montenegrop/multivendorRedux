import { createAction } from "@reduxjs/toolkit"
import { Product } from "../../generated/graphql"

export const SIMPLE_PRODUCT_INIT =
  createAction<{ id: string | string[]; channel: string }>("SIMPLE_PRODUCT_INIT")
export const SIMPLE_PRODUCT_SUCCESS = createAction<Product>("SIMPLE_PRODUCT_SUCCESS")
export const SIMPLE_PRODUCT_ERROR = createAction<string>("SIMPLE_PRODUCT_ERROR")
