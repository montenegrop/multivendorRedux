import { createAction } from "@reduxjs/toolkit"
import { Category } from "../../generated/graphql"

export const PRODUCT_CATEGORY_INIT =
  createAction<{ id: string; channel: string }>("PRODUCT_CATEGORY_INIT")
export const PRODUCT_CATEGORY_SUCCESS = createAction<Category>("PRODUCT_CATEGORY_SUCCESS")
export const PRODUCT_CATEGORY_ERROR = createAction<string>("PRODUCT_CATEGORY_ERROR")
