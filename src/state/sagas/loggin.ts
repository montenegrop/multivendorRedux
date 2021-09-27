import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { AccountErrorCode } from "../../generated/graphql"
import { LOG_IN, LOG_IN_ERROR, LOG_IN_SUCCESS } from "../actions/loggin"

export default (dispatch) => {
  return {
    [LOG_IN.type]: async (_state, payload) => {
      const mutation = gql`
        mutation Logear($email: String!, $password: String!) {
          tokenCreate(email: $email, password: $password) {
            token
            accountErrors {
              message
              field
              code
            }
            user {
              id
              email
              vendorId
              userPermissions {
                name
              }
            }
          }
        }
      `
      const variables = {
        email: payload.user,
        password: payload.password,
      }
      try {
        const data = await request(API_URI, mutation, variables)
        if (!data.tokenCreate.accountErrors.length) {
          dispatch(LOG_IN_SUCCESS(data.tokenCreate))
        } else {
          dispatch(LOG_IN_ERROR(data.tokenCreate.accountErrors))
        }
      } catch (error) {
        dispatch(
          LOG_IN_ERROR([
            {
              code: AccountErrorCode.GraphqlError,
              message: "Error de LOG_IN action",
              field: "no se registra",
            },
          ])
        )
      }
    },
  }
}
