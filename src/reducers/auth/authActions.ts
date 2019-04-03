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
  public static verifyEmail = (payload: CheckEmailPayload): CheckEmailAction =>
    createPayloadAction(AuthActionTypes.VERIFY_EMAIL_REQUEST, payload)

  public static verifyPassword = (payload: LoginPayload): LoginAction =>
    createPayloadAction(AuthActionTypes.VERIFY_PASSWORD_REQUEST, payload)

  public static loginCompleted = (payload: TokenPayload): TokenAction =>
    createPayloadAction(AuthActionTypes.VERIFY_PASSWORD_SUCCESS, payload)
}
