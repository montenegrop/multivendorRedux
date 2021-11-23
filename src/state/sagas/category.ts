import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { CATEGORY_ERROR, CATEGORY_INIT, CATEGORY_SUCCESS } from "../actions/category"

export default (dispatch) => {
  return {
    [CATEGORY_INIT.type]: async (_state, payload) => {
      const query = gql`
        query categoria($id: ID!, $channel: String) {
          category(id: $id) {
            slug
            name
            id
            level
            backgroundImage {
              url
              alt
            }
            children(first: 5) {
              edges {
                node {
                  name
                  id
                  level
                  backgroundImage {
                    url
                    alt
                  }
                  products(first: 5, channel: $channel) {
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
        }
      `
      const variables = {
        id: payload.id,
        channel: payload.channel,
      }
      try {
        const data = await request(API_URI, query, variables)
        dispatch(CATEGORY_SUCCESS(data.category))
      } catch (error) {
        dispatch(CATEGORY_ERROR("error de category"))
      }
    },
  }
}
