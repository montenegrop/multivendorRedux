import { request, gql } from "graphql-request"
import { API_URI } from "../../constants"
import { LOG_IN, LOG_IN_SUCCESS } from "../actions/loggin"

export default (dispatch) => {
  return {
    [LOG_IN.type]: async (_state, payload) => {
      const mutation = gql`
        mutation Logear {
          tokenCreate(email: "cboero111@gmail.com", password: "admin") {
            token
            user {
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
        email: payload.email,
        password: payload.password,
      }
      try {
        const data = await request(API_URI, mutation, variables)
        dispatch(LOG_IN_SUCCESS(data.tokenCreate))
      } catch (error) {
        console.log("error de log in")
      }
    },
  }
}
