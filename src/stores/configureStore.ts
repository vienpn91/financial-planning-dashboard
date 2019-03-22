import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { createRootReducer } from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = composeWithDevTools({
      // Specify name here, actionsBlacklist, actionsCreators
    });
    return composeEnhancers(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

// export const store: Store<RootState> = createStore(createRootReducer());

export default function configureStore() {
  const store = createStore(createRootReducer(), bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(rootSaga);
  return store;
}
