import { createReducer } from "@reduxjs/toolkit"
import * as logginActions from "../../actions/loggin"
import { CreateToken, AccountError } from "../../../generated/graphql"

const initialState = {
  data: <CreateToken | string>null,
  errors: <AccountError[]>[],
  loading: <boolean>false,
}

export default createReducer(initialState, (builder) => {
  builder.addCase(logginActions.LOG_IN_SUCCESS, (state, { payload }) => {
    state.data = payload
    state.errors = []
    state.loading = false
  })
  builder.addCase(logginActions.LOG_IN, (state) => {
    state.data = null
    state.loading = true
  })
  builder.addCase(logginActions.LOG_IN_ERROR, (state, { payload }) => {
    state.errors = payload
    state.loading = false
  })
})
