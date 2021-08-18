import serviceProviderReducers from "./serviceProvider"
import homepageReducers from "./homepage"
import storeReducers from "./store"

export default { ...serviceProviderReducers, ...homepageReducers, ...storeReducers }
