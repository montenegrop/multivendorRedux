import { request, gql } from "graphql-request"
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
        query productosPorCategoria($id: ID!, $channel: String) {
          category(id: $id) {
            products(first: 10, channel: $channel) {
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
        }
      `
      const variables = {
        id: payload.id,
        channel: payload.channel,
      }
      try {
        const data = await request(API_URI, query, variables)
        dispatch(PRODUCT_CATEGORY_SUCCESS(data.category))
      } catch (error) {
        dispatch(PRODUCT_CATEGORY_ERROR("error de category"))
      }
    },
  }
}
