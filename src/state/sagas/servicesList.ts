import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import {
  SERVICES_LIST_INIT,
  SERVICES_LIST_SUCCESS,
  SERVICES_LIST_ERROR,
} from "../actions/servicesList"

export default (dispatch) => {
  return {
    [SERVICES_LIST_INIT.type]: async (_state, _payload) => {
      const query = gql`
        query servicesList {
          baseProducts(onlyServices: true, first: 15) {
            edges {
              node {
                name
                id
                category {
                  backgroundImage {
                    url
                    alt
                  }
                }
              }
            }
          }
        }
      `
      try {
        const data = await request(API_URI, query)
        dispatch(SERVICES_LIST_SUCCESS(data.baseProducts))
      } catch (error) {
        dispatch(SERVICES_LIST_ERROR("error de services list"))
      }
    },
  }
}
