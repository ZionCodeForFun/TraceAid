import {
  configureStore,
  combineReducers,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist/lib/persistStore";
import getStorage from "redux-persist/es/storage/getStorage";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});
const persist = {
  key: "root",
  Storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(rootReducer, persist);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
