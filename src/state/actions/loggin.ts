import { createAction } from "@reduxjs/toolkit"
import { CreateToken } from "../../generated/graphql"

export const LOG_IN = createAction<{ user: string; password: string }>("LOG_IN")
export const LOG_IN_SUCCESS = createAction<CreateToken>("LOG_IN_SUCCESS")
export const LOG_IN_ERROR = createAction<string>("LOG_IN_ERROR")
