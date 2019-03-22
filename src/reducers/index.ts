import { persistCombineReducers } from 'redux-persist';
import { Reducer, ReducersMapObject, Store } from 'redux';
import storage from 'redux-persist/lib/storage';

import AppReducer from './app';
import { Reducers, LoadedState, LoadedReducers } from './reducerTypes';

const config = {
  key: 'root',
  storage,
  whitelist: [],
};

// const reducerMap: ReducersMapObject = {
//   app: AppReducer.reducer,
// };

let asyncReducers: LoadedReducers = {};
export const createRootReducer = (): Reducer<LoadedState> => {
  const initialReducers: ReducersMapObject = {
    app: AppReducer.reducer,
    ...asyncReducers,
  } as Reducers;
  return persistCombineReducers(config, initialReducers);
};

export const injectReducer = (store: Store<LoadedState>, reducers: LoadedReducers) => {
  asyncReducers = { ...asyncReducers, ...reducers };
  store.replaceReducer(createRootReducer());
};
