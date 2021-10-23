import { createAction } from "@reduxjs/toolkit"
import { CreateToken, AccountError } from "../../generated/graphql"

export const LOG_IN = createAction<{ user: string; password: string }>("LOG_IN")
export const LOG_IN_SUCCESS = createAction<CreateToken>("LOG_IN_SUCCESS")
export const LOG_IN_ERROR = createAction<AccountError[]>("LOG_IN_ERROR")
export const LOG_OUT = createAction("LOG_OUT")
export const LOG_OUT_RESULT = createAction("LOG_OUT_RESULT")
export const CREATE_USER =
  createAction<{ email: string; password: string; providesServices: boolean }>("CREATE_USER")
export const CREATE_USER_SUCCESS = createAction("CREATE_USER_SUCCESS")
export const CREATE_USER_ERROR = createAction<AccountError[]>("CREATE_USER_ERROR")
