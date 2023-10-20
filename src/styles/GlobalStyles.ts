import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    /* over-flow-x: hidden; */
  }
  body, input {
    font-family: 'GmarketSans', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  h1, h2 {
    /* font-weight: normal; */
    margin: 0;
  }
  dl,
  dd,
  p {
    margin: 0;
  }
  button,
  input {
    appearance: none;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border-radius: 0;
  }

  button {
    cursor: pointer;
  }
  em {
    font-style: normal;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
  img {
    vertical-align: top;
  }
  fieldset {
    border: 0 none;
    margin: 0;
    padding: 0;
  }

  .hidden {
    display: none;
    @media ${({ theme }) => theme.display.desktop} {
      display: block;
    }
  }
`;
