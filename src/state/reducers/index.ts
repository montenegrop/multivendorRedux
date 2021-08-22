import serviceProviderReducers from "./serviceProvider"
import homepageReducers from "./homepage"
import storeReducers from "./store"
import categoryReducers from "./category"

export default {
  ...serviceProviderReducers,
  ...homepageReducers,
  ...storeReducers,
  ...categoryReducers,
}
