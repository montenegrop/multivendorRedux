import { INCREMENT } from "../actions/count"

export default (dispatch) => {
  return {
    [INCREMENT.type]: async (state, payload) => {
      try {
        const data = await Promise.resolve()
        console.log(state)
        console.log(payload)
        dispatch({ type: "incrementDispatched" })
        /// llamada a API de graphql
      } catch (error) {
        console.log(error)
        dispatch({ type: "incrementerror" })
      }
    },
  }
}
