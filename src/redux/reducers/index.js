import { combineReducers } from "redux"
import { auth } from "./auth"
import { catagory } from "./catagory";
import { cart } from "./cart";
import { clicks } from "./clicks";

const rootReducer = combineReducers({
    auth,
    catagory,
    cart,
    clicks
})

export default rootReducer;