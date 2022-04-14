import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    height: 100vh;

    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0 0 8px 0;
  }

  body {

    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }

  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  a, button {
    cursor: pointer;
  }

  pre {
    white-space: pre-line;
  }
`;

export default GlobalStyle;
