import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import productsReducer from '../components/products/product_slice';


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer
});

export default entitiesReducer;