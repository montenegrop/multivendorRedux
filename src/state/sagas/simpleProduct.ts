import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import {
  SIMPLE_PRODUCT_ERROR,
  SIMPLE_PRODUCT_INIT,
  SIMPLE_PRODUCT_SUCCESS,
} from "../actions/simpleProduct"
export default (dispatch) => {
  return {
    [SIMPLE_PRODUCT_INIT.type]: async (_state, payload) => {
      const query = gql`
        query singleProduct($id: ID!, $channel: String) {
          product(id: $id, channel: $channel) {
            id
            name
            description
            descriptionJson
            rating
            images {
              url
              alt
            }
            slug
            category {
              id
              name
              slug
            }
            attributes {
              attribute {
                name
                slug
              }
              values {
                name
                slug
              }
            }
            defaultVariant {
              pricing {
                price {
                  net {
                    currency
                    amount
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
        dispatch(SIMPLE_PRODUCT_SUCCESS(data.product))
      } catch (error) {
        dispatch(SIMPLE_PRODUCT_ERROR("error de simple product"))
      }
    },
  }
}
