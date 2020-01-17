import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './containers/Navbar';
import { StoriesContainer } from './containers/StoriesContainer';
import { Home } from './components/Home';
import { Favorite } from './components/Favorite';
import { GlobalStyle } from './styles/GlobalStyle';
import { Sidebar } from './containers/Sidebar';

export const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/favorite' exact component={StoriesContainer} />
        <Route path='/archive' exact component={StoriesContainer} />

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
