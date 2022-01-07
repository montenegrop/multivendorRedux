import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { STORE_INIT, STORE_SUCCESS, STORE_ERROR, STORE_PRODUCT_INIT } from "../actions/store"

export default (dispatch) => {
  return {
    [STORE_INIT.type]: async (_state, payload) => {
      const query = gql`
        query store($id: ID!) {
          vendor(id: $id) {
            name
            mainImage {
              url
              alt
            }
            avatarImage {
              url
              alt
            }
            email
            location {
              province
              city
            }
            description
            bussiness
            foundingYear
            totalEmployess
            qualityNorms
            openHours
            billing
            contacts {
              name
              role
              phone
              email
            }
          }
        }
      `
      const variables = {
        id: payload.id,
      }
      try {
        const data = await request(API_URI, query, variables)
        dispatch(STORE_SUCCESS(data.vendor))
      } catch (error) {
        dispatch(STORE_ERROR("error de store (tienda)"))
      }
    },
    [STORE_PRODUCT_INIT.type]: async (_state, payload) => {
      const query = gql`
        query store($id: ID!) {
          vendor(id: $id) {
            name
            email
            mainImage {
              url
              alt
            }
            avatarImage {
              url
              alt
            }
            email
            location {
              province
              city
            }
            description
            bussiness
            foundingYear
            totalEmployess
            qualityNorms
            openHours
            billing
            contacts {
              name
              role
              phone
              email
            }
          }
        }
      `
      const variables = {
        filters: payload.filters,
      }
      try {
        const data = await request(API_URI, query, variables)
        dispatch(STORE_SUCCESS(data.vendor))
      } catch (error) {
        dispatch(STORE_ERROR("error de store (tienda)"))
      }
    },
  }
}
