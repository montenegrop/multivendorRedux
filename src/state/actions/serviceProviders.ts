import { createAction } from "@reduxjs/toolkit"
import { VendorCountableConnection } from "../../generated/graphql"

export const SERVICE_PROVIDERS_INIT =
  createAction<{ numberOfProviders: number; servicesArray: string | string[] }>(
    "SERVICE_PROVIDERS_INIT"
  )
export const SERVICE_PROVIDERS_SUCCESS = createAction<VendorCountableConnection>(
  "SERVICE_PROVIDERS_SUCCESS"
)
export const SERVICE_PROVIDERS_ERROR = createAction<string>("SERVICE_PROVIDERS_ERROR")
