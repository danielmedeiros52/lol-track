import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk, { ThunkAction } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import userSlice from './slices/userSlice';
import feedSlice from './slices/feedSlice';

const persistConfig = {
  key: 'root',
  storage
  // blacklist: [],
  // whitelist: [],
};

const rootReducer = combineReducers({
  user: userSlice,
  feed: feedSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
  // devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
