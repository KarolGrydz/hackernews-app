import React, { Fragment } from 'react';
import { Navbar } from './containers/Navbar';
import { StoriesContainer } from './containers/StoriesContainer';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StoriesContainer />
  </>
);
