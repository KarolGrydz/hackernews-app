import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
