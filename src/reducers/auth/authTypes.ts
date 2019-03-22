import { Map, Record } from 'immutable';

import { PayloadAction } from '../reducerTypes';

export interface AuthState {
  loading?: boolean;
  error?: boolean;
  token: Map<string, any>;

  [ propsName: string ]: any;
}

export const defaultAuthState = {
  token: Map({}),
  error: false,
  loading: false,
};

export class AuthStateRecord extends Record(defaultAuthState) implements AuthState {
  // Set the params
  constructor(props: AuthState) {
    super(props);
  }
}

// Define action types
export enum AuthActionTypes {
  AUTH_LOGIN_START = 'auth/LOGIN_START',
  AUTH_LOGIN_COMPLETED = 'auth/LOGIN_COMPLETED',
  AUTH_LOGIN_FAILED = 'auth/LOGIN_FAILED',
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface TokenPayload {
  token: string;
  expired?: any;
}

export type LoginAction = PayloadAction<AuthActionTypes.AUTH_LOGIN_START, LoginPayload>;
export type TokenAction = PayloadAction<AuthActionTypes.AUTH_LOGIN_COMPLETED, TokenPayload>;
