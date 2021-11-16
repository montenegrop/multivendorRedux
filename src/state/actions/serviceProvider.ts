import { createAction } from "@reduxjs/toolkit"
import { Vendor } from "../../generated/graphql"

export type Service = {
  name: string
  id: string
  score: number
}

export type Image = {
  url: string
  alt: string
}

export const SERVICE_PROVIDER_INIT =
  createAction<{ id: string | string[] }>("SERVICE_PROVIDER_INIT")
export const SERVICE_PROVIDER_SUCCESS = createAction<Vendor>("SERVICE_PROVIDER_SUCCESS")
export const SERVICE_PROVIDER_ERROR = createAction<string>("SERVICE_PROVIDER_ERROR")
