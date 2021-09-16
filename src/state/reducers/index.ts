import serviceProviderReducers from "./serviceProvider"
import homepageReducers from "./homepage"
import storeReducers from "./store"
import categoryReducers from "./category"
import logginReducers from "./loggin"
import persistReducer from "redux-persist/lib/persistReducer"
import storage from "redux-persist/lib/storage"
import serviceProvidersReducers from "./serviceProviders"

export default {
  ...serviceProviderReducers,
  ...serviceProvidersReducers,
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
