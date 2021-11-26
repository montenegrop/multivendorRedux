import { createAction } from "@reduxjs/toolkit"
import { AttributeCountableConnection } from "../../generated/graphql"

export const FILTERS_CATEGORY_INIT =
  createAction<{ id: string | string[]; channel: string }>("FILTERS_CATEGORY_INIT")
export const FILTERS_CATEGORY_SUCCESS = createAction<AttributeCountableConnection>(
  "FILTERS_CATEGORY_SUCCESS"
)
export const FILTERS_CATEGORY_ERROR = createAction<string>("FILTERS_CATEGORY_ERROR")
