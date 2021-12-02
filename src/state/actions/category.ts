import { createAction } from "@reduxjs/toolkit"
import { Category } from "../../generated/graphql"

export const CATEGORY_INIT =
  createAction<{ id: string | string[]; channel: string }>("CATEGORY_INIT")
export const CATEGORY_SUCCESS = createAction<Category>("CATEGORY_SUCCESS")
export const CATEGORY_ERROR = createAction<string>("CATEGORY_ERROR")
