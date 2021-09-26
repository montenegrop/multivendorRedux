import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { TIENDAS_INIT, TIENDAS_SUCCESS } from "../actions/tiendas"

export default (dispatch) => {
  return {
    [TIENDAS_INIT.type]: async (_state, _payload) => {
      const mutation = gql`
        query tiendasPage($tiendasAmount: Int) {
          vendors(first: $tiendasAmount) {
            edges {
              node {
                id
                name
                avatarImage {
                  url
                  alt
                }
              }
            }
          }
        }
      `
      const variables = {
        tiendasAmount: 15,
      }
      try {
        const data = await request(API_URI, mutation, variables)
        dispatch(TIENDAS_SUCCESS(data.vendors))
      } catch (error) {
        console.log("error de tiendas init")
      }
    },
  }
}
