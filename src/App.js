import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './containers/Navbar';
import { GlobalStyle } from './styles/GlobalStyle';
import { Sidebar } from './containers/Sidebar';
import { routes } from './router';

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        {routes.map(route => (
          <Route
            key={route.state.id}
            path={route.pathname}
            exact
            render={props => <route.component {...props} data={route.state} />}
          />
        ))}
      </Switch>
    </Router>
  </>
);
