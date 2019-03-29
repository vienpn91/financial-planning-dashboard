import { persistCombineReducers } from 'redux-persist';
import { Reducer, ReducersMapObject, Store } from 'redux';
import storage from 'redux-persist/lib/storage';

import { Reducers, LoadedState, LoadedReducers } from './reducerTypes';

// Import other reducers
import AuthReducer from './auth';

const config = {
  key: 'root',
  storage,
  whitelist: [],
};

let asyncReducers: LoadedReducers = {};
export const createRootReducer = (): Reducer<LoadedState> => {
  const initialReducers: ReducersMapObject = {
    auth: AuthReducer.reducer,
    ...asyncReducers,
  } as Reducers;
  return persistCombineReducers(config, initialReducers);
};

export const injectReducer = (store: Store<LoadedState>, reducers: LoadedReducers) => {
  asyncReducers = { ...asyncReducers, ...reducers };
  store.replaceReducer(createRootReducer());
};
