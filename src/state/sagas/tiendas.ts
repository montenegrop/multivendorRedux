import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { TIENDAS_ERROR, TIENDAS_INIT, TIENDAS_SUCCESS } from "../actions/tiendas"

export default (dispatch) => {
  return {
    [TIENDAS_INIT.type]: async (_state, _payload) => {
      const query = gql`
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
        const data = await request(API_URI, query, variables)
        dispatch(TIENDAS_SUCCESS(data.vendors))
      } catch (error) {
        dispatch(TIENDAS_ERROR("error de tiendas"))
      }
    },
  }
}
