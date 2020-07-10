import { createStore, combineReducers, applyMiddleware } from "redux";
import { todoReducer } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ todoReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
