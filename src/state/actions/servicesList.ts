import { createAction } from "@reduxjs/toolkit"
import { BaseProductCountableConnection } from "../../generated/graphql"

export const SERVICES_LIST_INIT = createAction("SERVICES_LIST_INIT")
export const SERVICES_LIST_SUCCESS =
  createAction<BaseProductCountableConnection>("SERVICES_LIST_SUCCESS")
export const SERVICES_LIST_ERROR = createAction<string>("SERVICES_LIST_ERROR")
