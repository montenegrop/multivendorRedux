import serviceProviderReducers from "./serviceProvider"
import homepageReducers from "./homepage"
import storeReducers from "./store"
import categoryReducers from "./category"
import logginReducers from "./loggin"

export default {
  ...serviceProviderReducers,
  ...homepageReducers,
  ...storeReducers,
  ...categoryReducers,
  ...logginReducers,
}
