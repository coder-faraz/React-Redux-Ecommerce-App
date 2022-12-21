
import { combineReducers } from "redux";
import { ProductDetailsReducer, ProductReducer } from "./ProductReducer";


export const reducers = combineReducers({
    allProducts: ProductReducer,
    productDetails: ProductDetailsReducer,
})

