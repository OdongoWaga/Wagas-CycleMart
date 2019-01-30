import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER,
    ADD_TO_CART_USER
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload }
        case LOGOUT_USER:
            return {...state }
        case GET_CART_ITEMS_USER:
            return {...state,cartDetail: action.payload }
        case REMOVE_CART_ITEM_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData:{
                    ...state.userData,
                    cart: action.payload.cart
                }
            }
        case ADD_TO_CART_USER:
            return {...state, userData:{
                ...state.userData,
                cart: action.payload
            }}
        default:
            return state;
    }
}