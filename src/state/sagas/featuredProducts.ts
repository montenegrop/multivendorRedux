import { gql, GraphQLClient } from "graphql-request"
import { API_URI } from "../../constants"

import {
  FEATURED_PRODUCTS_ERROR,
  FEATURED_PRODUCTS_INIT,
  FEATURED_PRODUCTS_SUCCESS,
} from "../actions/featuredProducts"
export default (dispatch) => {
  return {
    [FEATURED_PRODUCTS_INIT.type]: async (_state, payload) => {
      const query = gql`
        query FEATURED($id: [ID], $channel: String) {
          products(first: 5, filter: { collections: $id }, channel: $channel) {
            edges {
              node {
                id
                name
                defaultVariant {
                  pricing {
                    price {
                      net {
                        amount
                      }
                    }
                  }
                }
                images {
                  url
                  alt
                }
              }
            }
          }
        }
      `
      const client = new GraphQLClient(API_URI)

      const requestHeaders = {
        authorization:
          "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDI0NDM2NjUsImV4cCI6MTY0MjQ0Mzk2NSwidG9rZW4iOiJyWEJFUHJ6RjNQaUwiLCJlbWFpbCI6ImNib2VybzExMUBnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IlZYTmxjam95TkE9PSIsImlzX3N0YWZmIjp0cnVlfQ.xFLuhHOwdzfmqAz7JGV4tIsl7FYUogRWpe_eeeiFx44",
      }

      const variables = {
        id: payload.id,
        channel: payload.channel,
      }
      try {
        const data = await client.request(query, variables, requestHeaders)
        dispatch(FEATURED_PRODUCTS_SUCCESS(data.products))
      } catch (error) {
        dispatch(FEATURED_PRODUCTS_ERROR("error de featured products"))
      }
    },
  }
}
