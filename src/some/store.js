import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
// import { FilterSlice } from './FilterSlice';
import { authReducer } from './auth/AuthSlice';

const authPersistConfig = {
  key: 'auth',
    storage,
  whitelist: ['token']
}



export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        // contacts: contactsReducer,
  },
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


 export const persistor = persistStore(store);

 