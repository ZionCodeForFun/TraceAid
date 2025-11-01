import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import accountType from "../global/accountTypeSlice";
import adminAuthSlice from "./adminAuthSlice";
const rootReducer = combineReducers({
  auth: authSlice,
  adminAuth: adminAuthSlice,
  accountType: accountType,
});
const persist = {
  key: "root",
  storage,
  whitelist: [, "auth"],
};
const persistedReducer = persistReducer(persist, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
