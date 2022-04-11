import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import usersReducer from '../features/usersSlice';
import contactsReducer from '../features/contactSlice';
import { persistReducer } from 'redux-persist';
// import { getPersistConfig } from 'redux-deep-persist';
import localStorage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  users: usersReducer,
  contacts: contactsReducer,
});

const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['users.loading'],
  rootReducer: reducers,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
