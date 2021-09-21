import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import {
  SERVICE_PROVIDERS_ERROR,
  SERVICE_PROVIDERS_INIT,
  SERVICE_PROVIDERS_SUCCESS,
} from "../actions/serviceProviders"

export default (dispatch) => {
  return {
    [SERVICE_PROVIDERS_INIT.type]: async (_state) => {
      const query = gql`
        query serviceProvider (first: 5) {
          vendors {
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
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `
      try {
        const data = await request(API_URI, query)
        dispatch(SERVICE_PROVIDERS_SUCCESS(data.vendor))
      } catch (error) {
        dispatch(SERVICE_PROVIDERS_ERROR("error de service provider"))
      }
    },
  }
}
