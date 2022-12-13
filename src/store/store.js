import { applyMiddleware, createStore } from "redux";

import { reducer } from '../services/reducer/rootReducer';
import thunk from "redux-thunk";
const middleware = [thunk];
const store = createStore(reducer);
console.log("store", store);
export default store;