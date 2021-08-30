import { createReducer } from "@reduxjs/toolkit"
import * as logginActions from "../../actions/loggin"
import { CreateToken } from "../../../generated/graphql"

const initialState = {
  data: <CreateToken>null,
  logeado: <boolean>false,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(logginActions.LOG_IN_SUCCESS, (state, { payload }) => {
    state.data = payload
    state.logeado = true
  })
  builder.addCase(logginActions.LOG_IN, (state) => {
    state.data = null
    state.logeado = false
  })
  builder.addCase(logginActions.LOG_IN_ERROR, (state) => {
    state.data = null
    state.logeado = false
  })
})
