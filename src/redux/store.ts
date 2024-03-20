"use client"

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./features/userSlice";


const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userInfo'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   userInfo: userSlice.reducer,
  // },
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;