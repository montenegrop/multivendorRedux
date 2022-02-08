import { gql, GraphQLClient } from "graphql-request"
import { API_URI } from "../../constants"

import {
  VENDOR_PRODUCTS_ERROR,
  VENDOR_PRODUCTS_INIT,
  VENDOR_PRODUCTS_SUCCESS,
} from "../actions/vendorProducts"
export default (dispatch) => {
  return {
    [VENDOR_PRODUCTS_INIT.type]: async (_state, payload) => {
      const query = gql`
        query productsBySeller($id: ID!, $channel: String, $minimum: Float, $maximum: Float) {
          products(
            first: 15
            channel: $channel
            filter: { vendors: [$id], channel: $channel, price: { lte: $maximum, gte: $minimum } }
          ) {
            edges {
              node {
                id
                slug
                name
                description
                defaultVariant {
                  pricing {
                    price {
                      net {
                        amount
                      }
                    }
                  }
                }
                productType {
                  name
                  productAttributes {
                    name
                    values {
                      name
                    }
                  }
                }
                images {
                  alt
                  url
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
        minimum: payload.minimum,
        maximum: payload.maximum,
      }
      try {
        const data = await client.request(query, variables, requestHeaders)
        dispatch(VENDOR_PRODUCTS_SUCCESS(data.products))
      } catch (error) {
        dispatch(VENDOR_PRODUCTS_ERROR("error de vendor products"))
      }
    },
  }
}
