import { AuthActionTypes, LoginPayload, LoginAction, TokenPayload, TokenAction } from './authTypes';
import { createPayloadAction } from '../reducerHelpers';

export default class AuthActions {
  public static login = (payload: LoginPayload): LoginAction =>
    createPayloadAction(AuthActionTypes.AUTH_LOGIN_START, payload)

  public static loginCompleted = (payload: TokenPayload): TokenAction =>
    createPayloadAction(AuthActionTypes.AUTH_LOGIN_COMPLETED, payload)
}
