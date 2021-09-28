import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import {
  SERVICE_PROVIDERS_ERROR,
  SERVICE_PROVIDERS_INIT,
  SERVICE_PROVIDERS_SUCCESS,
} from "../actions/serviceProviders"

export default (dispatch) => {
  return {
    [SERVICE_PROVIDERS_INIT.type]: async (_state, payload) => {
      const query = gql`
        query serviciosConCategoria($numberOfProviders: Int, $servicesArray: [ID]) {
          vendors(first: $numberOfProviders, filter: { services: $servicesArray }) {
            totalCount
            edges {
              node {
                id
                name
                relevance
                openHours
                location {
                  id
                }
                avatarImage {
                  url
                  alt
                }
                services(first: 5) {
                  edges {
                    node {
                      __typename
                      id
                      name
                      category {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
      const variables = {
        numberOfProviders: payload.numberOfProviders,
        servicesArray: payload.servicesArray,
      }
      try {
        const data = await request(API_URI, query, variables)
        dispatch(SERVICE_PROVIDERS_SUCCESS(data.vendors))
      } catch (error) {
        dispatch(SERVICE_PROVIDERS_ERROR("error de service provider"))
      }
    },
  }
}
