import serviceProviderReducers from "./serviceProvider"
import homepageReducers from "./homepage"
import storeReducers from "./store"
import categoryReducers from "./category"
import logginReducers from "./loggin"
import persistReducer from "redux-persist/lib/persistReducer"
import storage from "redux-persist/lib/storage"
import serviceProvidersReducer from "./serviceProviders"

export default {
  ...serviceProviderReducers,
  ...serviceProvidersReducer,
  ...homepageReducers,
  ...storeReducers,
  ...logginReducers,
  category: persistReducer(
    {
      key: "category",
      storage,
    },
    categoryReducers.category
  ),
}
