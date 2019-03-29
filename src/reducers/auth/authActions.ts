import {
  AuthActionTypes,
  LoginPayload,
  LoginAction,
  TokenPayload,
  TokenAction,
  CheckEmailAction,
  CheckEmailPayload,
} from './authTypes';
import { createPayloadAction } from '../reducerHelpers';

export default class AuthActions {
  public static checkEmail = (payload: CheckEmailPayload): CheckEmailAction =>
    createPayloadAction(AuthActionTypes.CHECK_EMAIL_REQUEST, payload)

  public static login = (payload: LoginPayload): LoginAction =>
    createPayloadAction(AuthActionTypes.AUTH_LOGIN_START, payload)

  public static loginCompleted = (payload: TokenPayload): TokenAction =>
    createPayloadAction(AuthActionTypes.AUTH_LOGIN_COMPLETED, payload)
}
