import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import cardReducer from "./cardSlice";
import postReducer from "./postSlice";
import todoReducer from "./todoSlice";
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage: storageSession,
    blacklist: ["post", "card"]
}
const combinedReducers = combineReducers(
    {
        card: cardReducer,
        post: postReducer,
        todo: todoReducer
    }
)
const persistedReducer = persistReducer(persistConfig, combinedReducers)
export const store = configureStore(
    {
        reducer: persistedReducer,

    }
);




export const persistedStore = persistStore(store);