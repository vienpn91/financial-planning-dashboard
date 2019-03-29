import { fromJS } from 'immutable';
import { Reducer } from 'redux';

import { AuthStateRecord, AuthState, defaultAuthState, AuthActionTypes } from './authTypes';
import { StandardAction } from '../reducerTypes';

export default class AuthReducer {
  public static reducer: Reducer<AuthState, StandardAction<any>> = (
    state: AuthState = AuthReducer.initialState, action: StandardAction<any>)
    : AuthState => {
    switch (action.type) {
      case AuthActionTypes.CHECK_EMAIL_REQUEST:
      case AuthActionTypes.CHECK_EMAIL_SUCCESS:
      case AuthActionTypes.CHECK_EMAIL_FAILURE:
        return AuthReducer.checkEmailHandler(state, action);
      case AuthActionTypes.AUTH_LOGIN_START:
      case AuthActionTypes.AUTH_LOGIN_COMPLETED:
      case AuthActionTypes.AUTH_LOGIN_FAILED:
        return AuthReducer.loginHandler(state, action);
      default:
        return state;
    }
  }

  private static readonly initialState = new AuthStateRecord(defaultAuthState);

  private static checkEmailHandler(state: AuthState, action: StandardAction<any>): AuthState {
    switch (action.type) {
      case AuthActionTypes.CHECK_EMAIL_REQUEST:
        return state
          .set('loading', true)
          .set('error', '');

      case AuthActionTypes.CHECK_EMAIL_SUCCESS:
        return state.merge(fromJS({
          loading: false,
          token: action.payload,
        }));

      case AuthActionTypes.CHECK_EMAIL_FAILURE:
        return state
          .set('loading', false)
          .set('error', action.error);

      default:
        return state;
    }
  }

  private static loginHandler(state: AuthState, action: StandardAction<any>): AuthState {
    switch (action.type) {
      case AuthActionTypes.AUTH_LOGIN_START:
        return state
          .set('loading', true)
          .set('error', '');

      case AuthActionTypes.AUTH_LOGIN_COMPLETED:
        return state.merge(fromJS({
          loading: false,
          token: action.payload,
        }));

      case AuthActionTypes.AUTH_LOGIN_FAILED:
        return state
          .set('loading', false)
          .set('error', action.error);

      default:
        return state;
    }
  }
}
