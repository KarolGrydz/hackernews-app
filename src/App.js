import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './containers/Navbar';
import { StoriesContainer } from './containers/StoriesContainer';
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
            render={props => <StoriesContainer {...props} data={route.state} />}
          />
        ))}
      </Switch>
    </Router>
  </>
);
