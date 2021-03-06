import { fromJS } from 'immutable';
import { Reducer } from 'redux';

import { AuthStateRecord, AuthState, defaultAuthState, AuthActionTypes, LoginPayload } from './authTypes';
import { StandardAction } from '../reducerTypes';

export default class AuthReducer {
  public static reducer: Reducer<AuthState, StandardAction<any>> = (
    state: AuthState = AuthReducer.initialState, action: StandardAction<any>)
    : AuthState => {
    switch (action.type) {
      case AuthActionTypes.VERIFY_EMAIL_REQUEST:
      case AuthActionTypes.VERIFY_EMAIL_SUCCESS:
      case AuthActionTypes.VERIFY_EMAIL_FAILURE:
        return AuthReducer.verifyEmailHandler(state, action);
      case AuthActionTypes.VERIFY_PASSWORD_REQUEST:
      case AuthActionTypes.VERIFY_PASSWORD_SUCCESS:
      case AuthActionTypes.VERIFY_PASSWORD_FAILURE:
        return AuthReducer.verifyPasswordHandler(state, action);
      default:
        return state;
    }
  }

  private static readonly initialState = new AuthStateRecord(defaultAuthState);

  private static verifyEmailHandler(state: AuthState, action: StandardAction<any>): AuthState {
    switch (action.type) {
      case AuthActionTypes.VERIFY_EMAIL_REQUEST:
        return state
          .set('loading', true)
          .set('error', '');

      case AuthActionTypes.VERIFY_EMAIL_SUCCESS:
        return state.merge(fromJS({
          loading: false,
          page: 2,
        }));

      case AuthActionTypes.VERIFY_EMAIL_FAILURE:
        return state
          .set('loading', false)
          .set('error', action.error);

      default:
        return state;
    }
  }

  private static verifyPasswordHandler(state: AuthState, action: StandardAction<any>): AuthState {
    switch (action.type) {
      case AuthActionTypes.VERIFY_PASSWORD_REQUEST:
        return state
          .set('loading', true)
          .set('error', '')
          .set('message', '');

      case AuthActionTypes.VERIFY_PASSWORD_SUCCESS:
        return state.merge(fromJS({
          loading: false,
          message: action.payload.message,
          page: 3,
        }));

      case AuthActionTypes.VERIFY_PASSWORD_FAILURE:
        return state
          .set('loading', false)
          .set('error', action.error)
          .set('message', '');

      default:
        return state;
    }
  }
}
