import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './common/themes';

import configureStore from './stores/configureStore';

// Import layouts
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';

// Import Pages
import { Home, LoginPage } from './pages';

export const store = configureStore();

interface DefaultProps {
  component: any;
  path?: string;
  exact?: boolean;
  [ propsName: string ]: any;
}

const PublicRoute: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={(matchProps: RouteComponentProps) => (
      <LoginLayout>
        <Component {...matchProps}/>
      </LoginLayout>
    )} />
  );
};

const PrivateRoute: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={(matchProps: RouteComponentProps) => (
      <LoginLayout>
        <Component {...matchProps}/>
      </LoginLayout>
    )} />
  );
};

const AppRouter = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute exact path="/sign-in" component={LoginPage} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
