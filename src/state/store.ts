import { configureStore } from "@reduxjs/toolkit"
import rootReducers from "./reducers"
import { DEBUG } from "../constants"
import { sagasMiddleware } from "./sagas"

const isServer = typeof window === "undefined"
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__"

export const initializeStore = (preloadedState?) => {
  return configureStore({
    reducer: rootReducers,
    preloadedState,
    devTools: DEBUG,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"],
        },
      }).concat(sagasMiddleware),
  })
}

export const getOrCreateStore = (initialState?) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}
