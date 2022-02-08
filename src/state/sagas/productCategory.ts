import { gql, GraphQLClient } from "graphql-request"
import { API_URI } from "../../constants"
import {
  PRODUCT_CATEGORY_ERROR,
  PRODUCT_CATEGORY_INIT,
  PRODUCT_CATEGORY_SUCCESS,
} from "../actions/productCategory"

export default (dispatch) => {
  return {
    [PRODUCT_CATEGORY_INIT.type]: async (_state, payload) => {
      const query = gql`
        query productosPorCategoria($id: [ID], $channel: String, $minimum: Float, $maximum: Float) {
          products(
            filter: { categories: $id, channel: $channel, price: { lte: $maximum, gte: $minimum } }
            first: 15
            channel: $channel
          ) {
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
            "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDI0NDM2NjUsImV4cCI6MTY0MjQ0Mzk2NSwidG9rZW4iOiJyWEJFUHJ6RjNQaUwiLCJlbWFpbCI6ImNib2VybzExMUBnbWFpbC5jb20iLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6IlZYTmxjam95TkE9PSIsImlzX3N0YWZmIjp0cnVlfQ.xFLuhHOwdzfmqAz7JGV4tIsl7FYUogRWpe_eeeiFx44",
        },
      })

      const variables = {
        id: payload.id,
        channel: payload.channel,
        minimum: payload.minimum,
        maximum: payload.maximum,
      }
      try {
        const data = await graphQLClient.request(query, variables)
        dispatch(PRODUCT_CATEGORY_SUCCESS(data.products))
      } catch (error) {
        dispatch(PRODUCT_CATEGORY_ERROR("error de products by category"))
      }
    },
  }
}
