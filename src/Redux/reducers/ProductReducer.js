
const initialState = {
    products: [],
}


export const ProductReducer = (state= initialState, action) => {

    switch(action.type) {
        case "SET_PRODUCTS":
            return {...state, products: action.payload};
        default:
            return state
    }
}


export const ProductDetailsReducer = (state= {}, {type, payload}) => {

    switch(type) {
        case "SELECTED_PRODUCT":
            return {...state, ...payload};
        case "REMOVE_SELECTED_PRODUCT":
            return {};
        default:
            return state
    }
}


