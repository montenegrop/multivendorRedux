import { createAction } from "@reduxjs/toolkit"
import { ProductCountableConnection } from "../../generated/graphql"

export const PRODUCT_CATEGORY_INIT =
  createAction<{ id: string | string[]; channel: string; minimum: number; maximum: number }>(
    "PRODUCT_CATEGORY_INIT"
  )
export const PRODUCT_CATEGORY_SUCCESS = createAction<ProductCountableConnection>(
  "PRODUCT_CATEGORY_SUCCESS"
)
export const PRODUCT_CATEGORY_ERROR = createAction<string>("PRODUCT_CATEGORY_ERROR")
