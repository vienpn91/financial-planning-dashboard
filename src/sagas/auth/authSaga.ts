import { all, takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { get } from 'lodash-es';

import { AuthActionTypes, LoginPayload, AuthActions } from '../../reducers/auth';
import AuthService from './authService';

export default class AuthSaga {
  public static* loginUser({ payload }: { payload: LoginPayload }) {
    try {
      const { email, password } = payload;
      const response: AxiosResponse = yield call(AuthService.login, { email, password });
      const status: number = get(response, 'status');
      if (status === 200) {
        yield put(AuthActions.loginCompleted({
          token: 'test-token',
          expired: new Date(),
        }));
      }
    } catch (error) {
      yield put({
        type: AuthActionTypes.AUTH_LOGIN_FAILED,
        error,
      });
    }
  }

  public static* watchLogin() {
    // @ts-ignore
    yield takeLatest(AuthActionTypes.AUTH_LOGIN_START, AuthSaga.loginUser);
  }

  public static* authFlow() {
    yield all([
      AuthSaga.watchLogin(),
    ]);
  }
}
