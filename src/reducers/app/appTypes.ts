import { Map, Record } from 'immutable';

import { PayloadAction } from '../reducerTypes';

export interface AppState {
  loading?: boolean;
  error?: boolean;
  appConfig: Map<string, any>;
}

export const defaultAppState = {
  appConfig: Map({}),
  error: false,
  loading: false,
};

export class AppStateRecord extends Record(defaultAppState) implements AppState {
  // Set the params
  constructor(props: AppState) {
    super(props);
  }
}

// Define action types
export enum AppActionTypes {
  APP_ADD_CONFIG = 'app/ADD_CONFIG',
}

export type AddAppConfigAction = PayloadAction<AppActionTypes.APP_ADD_CONFIG, Map<string, any>>;
