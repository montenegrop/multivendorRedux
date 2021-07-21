import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import {
  SERVICE_PROVIDER_ERROR,
  SERVICE_PROVIDER_INIT,
  SERVICE_PROVIDER_SUCCESS,
} from "../actions/serviceProvider"

export default (dispatch) => {
  return {
    [SERVICE_PROVIDER_INIT.type]: async (state, payload) => {
      const query = gql`
        query serviceProvider($id: ID!) {
          vendor(id: $id) {
            name
            mainImage {
              url
              alt
            }
            avatarImage {
              url
              alt
            }
            services(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      `
      const variables = {
        id: payload.id,
      }
      try {
        const data = await request(API_URI, query, variables)
        console.log(data)
        dispatch(SERVICE_PROVIDER_SUCCESS(data.vendor))
        /// llamada a API de graphql
      } catch (error) {
        console.log(error)
        dispatch(SERVICE_PROVIDER_ERROR("error de service provider"))
      }
    },
  }
}
