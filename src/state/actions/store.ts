import { createAction } from "@reduxjs/toolkit"
import { Vendor } from "../../generated/graphql"

export type Image = {
  url: string
  alt: string
}

export const STORE_INIT = createAction("STORE_INIT")
export const STORE_SUCCESS = createAction<Vendor>("STORE_SUCCESS")
export const STORE_ERROR = createAction<string>("STORE_ERROR")
