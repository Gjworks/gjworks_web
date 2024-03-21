"use client"

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./features/userSlice";


const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
  // serialize: false, // Disable serialization
  // serialize: data => JSON.stringify(data), // 객체를 문자열로 변환
  whitelist: ['userInfo'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   userInfo: userSlice.reducer,
  // },
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;