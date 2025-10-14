import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});
const persist = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persist, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
