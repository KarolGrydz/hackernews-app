import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './containers/Navbar';
import { StoriesContainer } from './containers/StoriesContainer';
import { GlobalStyle } from './styles/GlobalStyle';
import { Sidebar } from './containers/Sidebar';
import { routes } from './router/router';

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Sidebar />
      <StoriesContainer fetchURL="NEWS" />
      <Switch>
        {/* {routes.map(route => {
          <Route
            path={route.path}
            render={() => <StoriesContainer fetchURL={route.data} />}
          />;
        })} */}
      </Switch>
    </Router>
  </>
);

{
  /* <Route path={routes.path} render={() => <StoriesContainer someData={routes.data} />} /> */
}
