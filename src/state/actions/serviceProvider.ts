import { createAction } from "@reduxjs/toolkit"

export type Service = {
  name: string
  score: number
}

export const SERVICE_PROVIDER_INIT = createAction<{ id: string }>("SERVICE_PROVIDER_INIT")
export const SERVICE_PROVIDER_SUCCESS = createAction<any>("SERVICE_PROVIDER_SUCCESS")
export const SERVICE_PROVIDER_ERROR = createAction<string>("SERVICE_PROVIDER_ERROR")
