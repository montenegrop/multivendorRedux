import { INCREMENT } from "./actions/count"
import countSaga from "./sagas/count"

export const sagasMiddleware = ({ getState, dispatch }) => {
  const sagas = [countSaga].map((saga) => saga(dispatch))

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
