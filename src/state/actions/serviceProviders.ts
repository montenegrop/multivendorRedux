import { createAction } from "@reduxjs/toolkit"
import { VendorCountableConnection } from "../../generated/graphql"

export type Vendor = {
  id: string
  name: string
  relevance: number
  openHours: string
  location: {
    id: string
  }
  avatarImage: {
    url: string
    alt: string
  }
  services: {
    edges: {
      node: {
        name: string
      }
    }[]
  }
}
export const SERVICE_PROVIDERS_INIT = createAction("SERVICE_PROVIDERS_INIT")
export const SERVICE_PROVIDERS_SUCCESS = createAction<VendorCountableConnection>(
  "SERVICE_PROVIDERS_SUCCESS"
)
export const SERVICE_PROVIDERS_ERROR = createAction<string>("SERVICE_PROVIDERS_ERROR")
