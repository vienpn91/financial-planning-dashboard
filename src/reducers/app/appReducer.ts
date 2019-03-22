import { AppStateRecord, AppState, defaultAppState } from './appTypes';
import { StandardAction } from '../reducerTypes';

export default class AppReducer {
  public static reducer(
    state: AppState = AppReducer.initialState, action: StandardAction<any>)
    : AppState {
    switch (action.type) {
      default:
        return state;
    }
  }

  private static readonly initialState = new AppStateRecord(defaultAppState);
}
