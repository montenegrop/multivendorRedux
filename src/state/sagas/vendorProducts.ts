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
        query productsBySeller($id: ID!, $channel: String) {
          products(first: 15, channel: $channel, filter: { vendors: [$id] }) {
            edges {
              node {
                id
                slug
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
                description
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
      const graphQLClient = new GraphQLClient(API_URI, {
        headers: {
          authorization:
            "Bearer JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDI0NDM2NjUsImV4cCI6MTY0MjQ0Mzk2NSwidG9rZW4iOiJyWEJFUHJ6RjNQaUwiLCJlbWFpbCI6ImNib2VybzExMUBnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IlZYTmxjam95TkE9PSIsImlzX3N0YWZmIjp0cnVlfQ.xFLuhHOwdzfmqAz7JGV4tIsl7FYUogRWpe_eeeiFx44",
        },
      })

      const variables = {
        id: payload.id,
        channel: payload.channel,
      }
      try {
        const data = await graphQLClient.request(query, variables)
        dispatch(VENDOR_PRODUCTS_SUCCESS(data.products))
      } catch (error) {
        dispatch(VENDOR_PRODUCTS_ERROR("error de vendor products"))
      }
    },
  }
}
