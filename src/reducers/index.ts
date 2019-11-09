import { persistReducer, createTransform } from 'redux-persist';
import { fromJS } from 'immutable';
import { Reducer, Store, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { LoadedState, LoadedReducers } from './reducerTypes';

// Import other reducers
import AuthReducer, { AuthStateRecord, defaultAuthState, AuthState } from './auth';
import ClientReducer from './client';
import DrawerReducer from './drawer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transforms: [
    createTransform(
      (inboundState: AuthState) => {
        return fromJS({
          userId: inboundState.get('userId'),
          token: inboundState.get('token'),
          expired: inboundState.get('expired'),
          fullName: inboundState.get('fullName'),
          refreshToken: inboundState.get('refreshToken'),
        });
      },
      (outboundState: AuthState) => {
        const defaultState = new AuthStateRecord(defaultAuthState);
        return defaultState
          .set('userId', outboundState.userId)
          .set('token', outboundState.token)
          .set('expired', outboundState.expired)
          .set('fullName', outboundState.fullName)
          .set('refreshToken', outboundState.refreshToken);
      },
      {
        whitelist: ['auth'],
      },
    ),
  ],
};

let asyncReducers: LoadedReducers = {};
export const createRootReducer = (): Reducer => {
  const initialReducers = combineReducers({
    auth: AuthReducer.reducer,
    client: ClientReducer.reducer,
    drawer: DrawerReducer.reducer,
    ...asyncReducers,
  });
  return persistReducer(rootPersistConfig, initialReducers);
};

export const injectReducer = (store: Store<LoadedState>, reducers: Reducer<LoadedState>) => {
  asyncReducers = { ...asyncReducers, ...reducers };
  store.replaceReducer(createRootReducer());
};
