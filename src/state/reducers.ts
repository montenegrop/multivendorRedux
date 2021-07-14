import { type } from "os"
import { combineReducers } from "redux"

import count from "./reducers/countReducer"

const reducers = combineReducers({
  count,
})

export default reducers
export type RootState = ReturnType<typeof reducers>
