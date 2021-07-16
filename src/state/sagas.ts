import { INCREMENT } from "./actions/count"
import allSagas from "./sagas/index"

export const sagasMiddleware = ({ getState, dispatch }) => {
  const sagas = allSagas.map((saga) => saga(dispatch))

  return (next) => (action) => {
    const result = next(action)
    sagas.forEach((saga) => {
      if (typeof saga[action.type] != "undefined") {
        saga[action.type](getState(), action.payload)
      }
    })
    return result
  }
}
