import { createStore, applyMiddleware } from "redux";

import middlewares from "./middleware";
import rootReducers from "./reducers";

import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['navigation'] // uncomment this line if you want to use persist for navigation
};

const persistReducer = persistCombineReducers(persistConfig, rootReducers);

const store = createStore(persistReducer, {}, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };