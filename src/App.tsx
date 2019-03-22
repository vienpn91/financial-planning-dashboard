import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './common/themes';

import { Home } from './pages';

import configureStore from './stores/configureStore';
export const store = configureStore();

const AppRouter = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/*<Route path="/sign-in" exact component={} />*/}
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
