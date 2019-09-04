import { combineReducers } from 'redux';


// Reducers
import userReducer from  './user/user-reducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer
})