import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { get } from 'lodash-es';

import { AuthActionTypes, LoginPayload, AuthActions, CheckEmailPayload } from '../../reducers/auth';
import AuthService from './authService';

const delay = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

// interface BackendError {
//   response: {
//     data: string;
//     error: string;
//     message: string;
//     success: boolean;
//   };
// }

// function getErrorMessage(error: AxiosError & BackendError) {
//   return error.error.response && error.response.error;
// }

export default class AuthSaga {
  public static *loginUser({ payload }: { payload: LoginPayload }) {
    try {
      const { email, password } = payload;
      const response: AxiosResponse = yield call(AuthService.login, { email, password });
      console.log('response',{ response })
      const status: number = get(response, 'status');
      if (status === 200) {
        yield put(
          AuthActions.loginCompleted({
            token: 'test-token',
            expired: new Date(),
          }),
        );
      }
    } catch (error) {
      yield put({
        type: AuthActionTypes.AUTH_LOGIN_FAILED,
        error,
      });
    }
  }

  public static *checkEmail({ payload }: { payload: CheckEmailPayload }) {
    try {
      const { email } = payload;
      const response: AxiosResponse = yield call(AuthService.checkEmail, email);
      const status: number = get(response, 'status');
      if (status === 200) {
        yield put({
          type: AuthActionTypes.CHECK_EMAIL_SUCCESS,
        });
      }
    } catch (error) {
      const errorMsg = get(error, 'error.response.error', '[Default]: Your account could not be located');
      yield put({
        type: AuthActionTypes.CHECK_EMAIL_FAILURE,
        error: errorMsg,
      });
    }
  }

  public static *watchCheckEmail() {
    // @ts-ignore
    yield takeLatest(AuthActionTypes.CHECK_EMAIL_REQUEST, AuthSaga.checkEmail);
  }

  public static *watchLogin() {
    // @ts-ignore
    yield takeLatest(AuthActionTypes.AUTH_LOGIN_START, AuthSaga.loginUser);
  }

  // public static* watchVerifyOTP() {
  //   // @ts-ignore
  //   yield takeLatest(AuthActionTypes.AUTH_LOGIN_START, AuthSaga.loginUser);
  // }

  public static *authFlow() {
    yield all([AuthSaga.watchCheckEmail(), AuthSaga.watchLogin()]);
  }
}
