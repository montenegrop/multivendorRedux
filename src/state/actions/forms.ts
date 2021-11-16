import { createAction } from "@reduxjs/toolkit"
import { ContratarType } from "../reducers/forms/contratarReducer"

export const FORM_CONTRATAR_INIT = createAction<ContratarType>("FORM_CONTRATAR_INIT")
export const FORM_CONTRATAR_SUCCESS = createAction("FORM_CONTRATAR_SUCCESS")
export const FORM_CONTRATAR_ERROR = createAction<string>("HOMEPAGE_ERROR")
