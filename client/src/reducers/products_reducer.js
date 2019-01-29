import {
    GET_PRODUCTS_BY_SALE,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_WOODS,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SALE:
            return {...state, bySale: action.payload }
        case GET_PRODUCTS_BY_ARRIVAL:
            return {...state, byArrival:  action.payload }   
        case GET_BRANDS:
            return {...state, brands: action.payload }
        case GET_WOODS:
            return {...state, woods: action.payload }
        case GET_PRODUCTS_TO_SHOP:
            return {
                ...state,
                toShop: action.payload.articles,
                toShopSize: action.payload.size
            }
        case ADD_PRODUCT:
            return {...state,addProduct: action.payload}
        

        default:
            return state;
    }
}