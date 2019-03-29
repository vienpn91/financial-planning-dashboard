import { Map, Record } from 'immutable';

import { PayloadAction } from '../reducerTypes';

export interface AuthState {
  loading?: boolean;
  error?: string;
  token: Map<string, any>;

  [propsName: string]: any;
}

export const defaultAuthState = {
  loading: false,
  error: '',
  token: Map({}),
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
  CHECK_EMAIL_REQUEST = 'auth/CHECK_EMAIL_REQUEST',
  CHECK_EMAIL_SUCCESS = 'auth/CHECK_EMAIL_SUCCESS',
  CHECK_EMAIL_FAILURE = 'auth/CHECK_EMAIL_FAILURE',
}

export interface CheckEmailPayload {
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface TokenPayload {
  token: string;
  expired?: any;
}

export type CheckEmailAction = PayloadAction<AuthActionTypes.CHECK_EMAIL_REQUEST, CheckEmailPayload>;
export type LoginAction = PayloadAction<AuthActionTypes.AUTH_LOGIN_START, LoginPayload>;
export type TokenAction = PayloadAction<AuthActionTypes.AUTH_LOGIN_COMPLETED, TokenPayload>;
