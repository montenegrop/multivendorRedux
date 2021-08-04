import { createAction } from "@reduxjs/toolkit"
import { CategoryCountableConnection } from "../../generated/graphql"

type Image = {
  url: string
  alt: string
}

export type Category = Image & {
  id: string
  name: string
}

export const HOMEPAGE_INIT = createAction("HOMEPAGE_INIT")
export const HOMEPAGE_SUCCESS = createAction<CategoryCountableConnection>("HOMEPAGE_SUCCESS")
export const HOMEPAGE_ERROR = createAction<string>("HOMEPAGE_ERROR")
