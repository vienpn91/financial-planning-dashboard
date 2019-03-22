import { Map } from 'immutable';

import { AddAppConfigAction, AppActionTypes } from './appTypes';
import { createPayloadAction } from '../reducerHelpers';

export const addAppConfigAction = (config: Map<string, any>): AddAppConfigAction =>
  createPayloadAction(AppActionTypes.APP_ADD_CONFIG, config);
