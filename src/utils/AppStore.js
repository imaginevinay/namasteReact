import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './AppSlice';


/**
 * configure store - configureStore()
 * connect store - Provider from react-redux
 * create slice
 * add this slice to the configuration store
 */
const AppStore = configureStore({
    reducer: {
        cart : cartReducer
    }
});


export default AppStore;