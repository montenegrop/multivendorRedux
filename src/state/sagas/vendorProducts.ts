import { request, gql } from "graphql-request"
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
      const variables = {
        id: payload.id,
        channel: payload.channel,
      }
      try {
        const data = await request(API_URI, query, variables)
        dispatch(VENDOR_PRODUCTS_SUCCESS(data.products))
      } catch (error) {
        dispatch(VENDOR_PRODUCTS_ERROR("error de vendor products"))
      }
    },
  }
}
