import { INCREMENT } from "../actions/count"
import { request, gql } from "graphql-request"

export default (dispatch) => {
  return {
    [INCREMENT.type]: async (state, payload) => {
      const endpoint = "https://construirte-api-staging.herokuapp.com/graphql/"
      const query = gql`
        query twoVendors($first: Int!) {
          vendors(first: $first) {
            edges {
              node {
                name
              }
            }
          }
        }
      `
      const variables = {
        first: 2,
      }
      try {
        const data = await request(endpoint, query, variables)
        console.log(state)
        console.log(payload)
        console.log(data, 99)
        dispatch({ type: "incrementDispatched" })
        /// llamada a API de graphql
      } catch (error) {
        console.log(error)
        dispatch({ type: "incrementerror" })
      }
    },
  }
}
