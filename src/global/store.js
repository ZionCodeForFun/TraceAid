import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});
const persist = {
  key: "root",
  storage,
  whitelist: ["user", "auth"],
};
const persistedReducer = persistReducer(persist, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
