import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thankMiddleware from "redux-thunk"
import {pizzaReduser} from "./Redusers/pizzaReduser";
import {sortReduser} from "./Redusers/sortReduser";
import {basketReduser} from "./Redusers/basketReduser";

let rootReduser = combineReducers({
    pizza: pizzaReduser,
    sort: sortReduser,
    basket:basketReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser,composeEnhancers(applyMiddleware(thankMiddleware)));


window._store_ = store

export default store