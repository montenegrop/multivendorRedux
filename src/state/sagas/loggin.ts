import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { AccountErrorCode } from "../../generated/graphql"
import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  LOG_IN,
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LOG_OUT_RESULT,
} from "../actions/loggin"

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
    [LOG_OUT.type]: async (_state, _payload) => {
      const mutation = gql`
        mutation Logout {
          tokensDeactivateAll {
            accountErrors {
              message
              code
            }
          }
        }
      `
      try {
        const _data = await request(API_URI, mutation)
        dispatch(LOG_OUT_RESULT())
      } catch (error) {
        dispatch(LOG_OUT_RESULT())
      }
    },
    [CREATE_USER.type]: async (_state, payload) => {
      const mutation = gql`
        mutation crearProveedor($email: String!, $password: String!, $providesServices: Boolean) {
          accountRegister(
            input: { email: $email, password: $password, providesServices: $providesServices }
          ) {
            requiresConfirmation

            user {
              firstName
              lastName
              isActive
              isStaff
              id
              email
              firstName
              vendorId
              identification
              typeOfIdentification
            }
            accountErrors {
              message
              code
            }
          }
        }
      `
      const variables = {
        email: payload.email,
        password: payload.password,
        providesServices: payload.providesServices,
        firstname: payload.firstname,
        lastName: payload.lastname,
        identification: payload.identification,
      }
      try {
        const data = await request(API_URI, mutation, variables)
        if (!data.accountRegister.accountErrors.length) {
          dispatch(CREATE_USER_SUCCESS())
        } else {
          dispatch(LOG_IN_ERROR(data.tokenCreate.accountErrors))
        }
        dispatch(CREATE_USER_SUCCESS())
      } catch (error) {
        dispatch(
          CREATE_USER_ERROR([
            {
              code: AccountErrorCode.GraphqlError,
              message: "no se ha podido crear el usuario",
              field: "Error de CREATE_USER_INIT action",
            },
          ])
        )
      }
    },
  }
}
