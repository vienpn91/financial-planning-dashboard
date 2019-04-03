import { Map, Record } from 'immutable';

import { PayloadAction } from '../reducerTypes';

export interface AuthState {
  page: number;
  loading?: boolean;
  error?: string;
  message?: string;
  token: Map<string, any>;

  [propsName: string]: any;
}

export const defaultAuthState = {
  page: 1,
  loading: false,
  error: '',
  message: '',
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
  VERIFY_PASSWORD_REQUEST = 'auth/VERIFY_PASSWORD_REQUEST',
  VERIFY_PASSWORD_SUCCESS = 'auth/VERIFY_PASSWORD_SUCCESS',
  VERIFY_PASSWORD_FAILURE = 'auth/VERIFY_PASSWORD_FAILURE',
  VERIFY_EMAIL_REQUEST = 'auth/CHECK_EMAIL_REQUEST',
  VERIFY_EMAIL_SUCCESS = 'auth/CHECK_EMAIL_SUCCESS',
  VERIFY_EMAIL_FAILURE = 'auth/CHECK_EMAIL_FAILURE',
}

export interface CheckEmailPayload {
  email: string;
  error?: string;
}

export interface LoginPayload {
  password: string;
  email?: string;
  message?: string;
}

export interface TokenPayload {
  token: string;
  expired?: any;
}

export type CheckEmailAction = PayloadAction<AuthActionTypes.VERIFY_EMAIL_REQUEST, CheckEmailPayload>;
export type LoginAction = PayloadAction<AuthActionTypes.VERIFY_PASSWORD_REQUEST, LoginPayload>;
export type TokenAction = PayloadAction<AuthActionTypes.VERIFY_PASSWORD_SUCCESS, TokenPayload>;
