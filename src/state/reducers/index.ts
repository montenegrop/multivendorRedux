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
import simpleProductReducer from "./simpleProduct"
import vendorProductsReducer from "./vendorProducts"
import featuredProductsReducer from "./featuredProducts"
export default {
  ...categoryReducers,
  ...contratarReducer,
  ...homepageReducers,
  ...featuredProductsReducer,
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
  ...simpleProductReducer,
  ...storeReducers,
  ...tiendasReducers,
  ...servicesList,
  ...vendorProductsReducer,
  // category: persistReducer(
  //   {
  //     key: "category",
  //     storage,
  //   },
  //   categoryReducers.category
  // ),
}
