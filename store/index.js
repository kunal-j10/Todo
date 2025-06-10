import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider, useSelector, useDispatch, useStore} from 'react-redux';
import {persistStore, persistReducer, PERSIST} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import generalReducer from './General';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['general'],
};

const combinedReducer = combineReducers({
  general: generalReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
        ignoredPaths: ['general'],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor, Provider, useSelector, useDispatch, useStore};

export default store;
