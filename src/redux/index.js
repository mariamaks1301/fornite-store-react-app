import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

import { goodsReducer } from "./reducers/goods";
import { cartReducer } from "./reducers/cart";

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,

  })
   
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store);
  