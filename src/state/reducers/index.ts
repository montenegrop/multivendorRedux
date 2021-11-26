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
import productCategoryReducer from "./productCategory"
import filtersCategoryReducer from "./filtersCategory"

export default {
  ...categoryReducers,
  ...contratarReducer,
  ...homepageReducers,
  ...filtersCategoryReducer,
  loggin: persistReducer(
    {
      key: "loggin",
      storage,
    },
    logginReducers.loggin
  ),
  ...productCategoryReducer,
  ...serviceProviderReducers,
  ...serviceProvidersReducers,
  ...storeReducers,
  ...tiendasReducers,
  ...servicesList,
  // category: persistReducer(
  //   {
  //     key: "category",
  //     storage,
  //   },
  //   categoryReducers.category
  // ),
}
