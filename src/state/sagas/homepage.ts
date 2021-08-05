import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { HOMEPAGE_ERROR, HOMEPAGE_INIT, HOMEPAGE_SUCCESS } from "../actions/homepage"

export default (dispatch) => {
  return {
    [HOMEPAGE_INIT.type]: async (_state, _payload) => {
      const query = gql`
        query homepageData {
          categories(
            first: 13
            sortBy: { field: RELEVANCE, direction: ASC, channel: "default-channel" }
            level: 0
          ) {
            edges {
              node {
                id
                name
                backgroundImage {
                  url
                }
              }
            }
          }
        }
      `

      try {
        const data = await request(API_URI, query)
        dispatch(HOMEPAGE_SUCCESS(data.categories))
        /// llamada a API de graphql
      } catch (error) {
        dispatch(HOMEPAGE_ERROR("error de home page"))
      }
    },
  }
}
