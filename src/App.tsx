import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './common/themes';

import configureStore from './stores/configureStore';

// Import layouts
import MainLayout from './layouts/MainLayout';

// Import Pages
import { Home } from './pages';

export const store = configureStore();

const AppRouter = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <MainLayout>
            <Switch>
              <Route path="/" exact component={Home} />
              {/*<Route path="/sign-in" exact component={} />*/}
            </Switch>
          </MainLayout>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
