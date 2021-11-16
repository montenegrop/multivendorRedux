import serviceProviderReducers from "./serviceProvider"
import homepageReducers from "./homepage"
import storeReducers from "./store"
import categoryReducers from "./category"
import logginReducers from "./loggin"
import persistReducer from "redux-persist/lib/persistReducer"
import storage from "redux-persist/lib/storage"
import serviceProvidersReducers from "./serviceProviders"
import tiendasReducers from "./tiendas"
import servicesList from "./servicesList"
import contratarReducer from "./forms"

export default {
  ...serviceProviderReducers,
  ...serviceProvidersReducers,
  ...homepageReducers,
  ...storeReducers,
  ...tiendasReducers,
  ...servicesList,
  ...categoryReducers,
  ...contratarReducer,
  // category: persistReducer(
  //   {
  //     key: "category",
  //     storage,
  //   },
  //   categoryReducers.category
  // ),
  loggin: persistReducer(
    {
      key: "loggin",
      storage,
    },
    logginReducers.loggin
  ),
}
