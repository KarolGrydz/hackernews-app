import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './containers/Navbar';
import { StoriesContainer } from './containers/StoriesContainer';
import { Home } from './components/Home';
import { GlobalStyle } from './styles/GlobalStyle';
import { Sidebar } from './containers/Sidebar';
import { routes } from './router/router';

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' component={Home} />
        <Route
          path='/news'
          render={() => <StoriesContainer title='News' fetchURL='NEWS' />}
        />
        <Route
          path='/top'
          render={() => <StoriesContainer title='Top' fetchURL='TOP' />}
        />
        {/* {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            render={() => <StoriesContainer fetchURL={route.data} />}
          />
        ))} */}
      </Switch>
    </Router>
  </>
);
