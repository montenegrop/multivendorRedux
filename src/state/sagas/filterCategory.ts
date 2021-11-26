import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import {
  FILTERS_CATEGORY_ERROR,
  FILTERS_CATEGORY_INIT,
  FILTERS_CATEGORY_SUCCESS,
} from "../actions/filtersCategory"

export default (dispatch) => {
  return {
    [FILTERS_CATEGORY_INIT.type]: async (_state, payload) => {
      const query = gql`
        query filtrosAtributosPorCategoria($id: ID!, $channel: String) {
          attributes(filter: { inCategory: $id, channel: $channel }, first: 100) {
            totalCount
            edges {
              node {
                id
                name
                slug
                values {
                  id
                  name
                  slug
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
        dispatch(FILTERS_CATEGORY_SUCCESS(data.attributes))
      } catch (error) {
        dispatch(FILTERS_CATEGORY_ERROR("error de filters category"))
      }
    },
  }
}
