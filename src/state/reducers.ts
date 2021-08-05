import { combineReducers } from "redux"

import combinedReducers from "./reducers/index"

const reducers = combineReducers(combinedReducers)

export default reducers
export type RootState = ReturnType<typeof reducers>
