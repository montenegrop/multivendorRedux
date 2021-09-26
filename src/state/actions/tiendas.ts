import { createAction } from "@reduxjs/toolkit"
import { VendorCountableConnection } from "../../generated/graphql"

export const TIENDAS_INIT = createAction<{ tiendasAmount: number }>("TIENDAS_INIT")
export const TIENDAS_SUCCESS = createAction<VendorCountableConnection>("TIENDAS_SUCCESS")
export const TIENDAS_ERROR = createAction<string>("TIENDAS_ERROR")
