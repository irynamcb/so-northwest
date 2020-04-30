import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from '../components/products/product_slice';
import cartReducer from '../components/cart/cart_slice';


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer
});

export default entitiesReducer;